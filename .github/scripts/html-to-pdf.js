const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function convertHtmlToPdf(htmlPath, pdfPath) {
  console.log(`Converting ${htmlPath} to ${pdfPath}...`);
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Read the HTML file
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const htmlUrl = `file://${path.resolve(htmlPath)}`;
  
  await page.goto(htmlUrl, { waitUntil: 'networkidle0' });
  
  // Generate PDF
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '0.4in',
      right: '0.4in',
      bottom: '0.4in',
      left: '0.4in'
    }
  });
  
  await browser.close();
  console.log(`✓ Successfully created ${pdfPath}`);
}

async function main() {
  // Create pdfs directory if it doesn't exist
  const pdfsDir = path.join(__dirname, '../../resources/pdfs');
  if (!fs.existsSync(pdfsDir)) {
    fs.mkdirSync(pdfsDir, { recursive: true });
  }
  
  // Convert English resume
  await convertHtmlToPdf(
    path.join(__dirname, '../../resources/html/resume_en.html'),
    path.join(__dirname, '../../resources/pdfs/resume.pdf')
  );
  
  // Convert French resume
  await convertHtmlToPdf(
    path.join(__dirname, '../../resources/html/resume_fr.html'),
    path.join(__dirname, '../../resources/pdfs/resume_fr.pdf')
  );
  
  console.log('All PDFs generated successfully!');
}

main().catch(error => {
  console.error('Error generating PDFs:', error);
  process.exit(1);
});

