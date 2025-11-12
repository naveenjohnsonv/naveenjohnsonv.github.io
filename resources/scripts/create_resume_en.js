const { Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat, ExternalHyperlink, BorderStyle, TabStopType, TabStopPosition, convertInchesToTwip, Tab } = require('docx');
const fs = require('fs');
const path = require('path');

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Titillium Web", size: 20 } }
    },
    paragraphStyles: [
      {
        id: "SectionHeader",
        name: "Section Header",
        basedOn: "Normal",
        run: { size: 22, bold: true, font: "Titillium Web" },
        paragraph: { 
          spacing: { before: 180, after: 80 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 12, color: "000000" } }
        }
      }
    ]
  },
  numbering: {
    config: [
      {
        reference: "bullet-list",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "•",
          alignment: AlignmentType.LEFT,
          style: { 
            paragraph: { 
              indent: { 
                left: convertInchesToTwip(0.125),
                hanging: convertInchesToTwip(0.125) 
              } 
            } 
          }
        }]
      }
    ]
  },
  sections: [{
    properties: {
      page: { 
        margin: { 
          top: 720,
          right: 720,
          bottom: 720,
          left: 720
        } 
      }
    },
    children: [
      // Name
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: "Naveen JOHNSON VALLAVANATT", size: 40, bold: true })]
      }),
      
      // Contact info
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 180 },
        children: [
          new TextRun({ text: "Nice, France • Email: ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "naveenjohnsonv@gmail.com", size: 18 })],
            link: "mailto:naveenjohnsonv@gmail.com"
          }),
          new TextRun({ text: " • Phone: ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "+33 6 02 56 18 12", size: 18 })],
            link: "tel:+33602561812"
          }),
          new TextRun({ text: " • LinkedIn: ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "in/naveenjv", size: 18 })],
            link: "https://www.linkedin.com/in/naveenjv"
          }),
          new TextRun({ text: " • Portfolio: ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "naveenjohnsonv.fr", size: 18 })],
            link: "https://naveenjohnsonv.fr"
          })
        ]
      }),

      // KEY STRENGTHS
      new Paragraph({
        style: "SectionHeader",
        text: "KEY STRENGTHS"
      }),
      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        text: "Data Scientist with MSc in Data Science (EURECOM) and 2+ years enterprise analytics experience. Expertise in Python, PyTorch, TensorFlow, NLP, deep learning, GenAI, and knowledge engineering. Seeking Data Scientist roles, open to Data Engineer/Analyst roles."
      }),

      // EXPERIENCE
      new Paragraph({
        style: "SectionHeader",
        text: "EXPERIENCE"
      }),
      
      // Experience 1 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Data Science Research Intern - AI Planning / NLP", bold: true })]
      }),
      // Company and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "ALTEN Labs", bold: true })],
            link: "https://www.alten.fr/"
          }),
          new TextRun({ children: [new Tab(), "March 2025 - August 2025, Valbonne, Alpes-Maritimes, France"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Built LLM pipeline generating formal PDDL tasks executed via Fast Downward planner for playable interactive narratives"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Improved reliability 60% through automated schema/consistency validation and state caching for auditability"
      }),

      // Experience 2 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Associate Consultant - SAP Analytics", bold: true })]
      }),
      // Company and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Blueprint Technologies Pvt Ltd", bold: true })],
            link: "https://bpterp.com"
          }),
          new TextRun({ children: [new Tab(), "December 2021 - August 2023, Bengaluru, Karnataka, India"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Delivered 20+ SAC dashboards with drill-downs and detailed statistical analyses for pharma and agrochem stakeholders"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Built ETL migrations between SAP ECC and BW/4HANA; designed KPI logic and led UAT across 5+ enterprise projects"
      }),

      // Experience 3 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Intern - SAP Analytics", bold: true })]
      }),
      // Company and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Blueprint Technologies Pvt Ltd", bold: true })],
            link: "https://bpterp.com"
          }),
          new TextRun({ children: [new Tab(), "July 2021 - December 2021, Bengaluru, Karnataka, India"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Completed 200+ hours across SAC, BW, HANA, Python, SQL; contributed prototypes and ETL/UAT documentation"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        text: "Automated data-quality checks using Python/Pandas and SQL extracts"
      }),

      // EDUCATION
      new Paragraph({
        style: "SectionHeader",
        text: "EDUCATION"
      }),

      // Education 1 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Master of Science in Computer Science, Data Science Specialization", bold: true })]
      }),
      // Institution and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "EURECOM" })],
            link: "https://www.eurecom.fr/en/teaching/master-computer-science/msc-computer-science-data-science-track"
          }),
          new TextRun({ children: [" • Biot, France", new Tab(), "2023 - 2025"] })
        ]
      }),
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 40 },
        text: "• Core subjects: Machine Learning, Reinforcement Learning, Deep Learning, Advanced Statistical Inference, DBMS"
      }),

      // Education 2 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Diploma in Data Science", bold: true })]
      }),
      // Institution and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 40 },
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Indian Institute of Technology, Madras" })],
            link: "https://study.iitm.ac.in/diploma"
          }),
          new TextRun({ children: [" • Chennai, Tamil Nadu, India", new Tab(), "2021 - 2024"] })
        ]
      }),

      // Education 3 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Bachelor of Technology in Electronics and Communication Engineering", bold: true })]
      }),
      // Institution and dates with tab stop at right margin
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        spacing: { after: 120 },
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "National Institute of Technology, Calicut" })],
            link: "https://nitc.ac.in/department/electronics-amp-communication-engineering/programmes/electronics-and-communication-engineering"
          }),
          new TextRun({ children: [" • Kozhikode, Kerala, India", new Tab(), "2016 - 2020"] })
        ]
      }),

      // PROJECTS
      new Paragraph({
        style: "SectionHeader",
        text: "PROJECTS"
      }),

      // Project 1
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Knowledge Engineering in the LLM Era", bold: true })],
            link: "https://github.com/naveenjohnsonv/Text2KGBench"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Reproduced and extended Text2KGBench (Text-to-Knowledge-Graph Benchmark) experiments comparing state-of-the-art LLM models for RDF triple extraction, evaluating precision, recall, and F1-score"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Built ontology-aware LLM pipeline: GPT-4o achieved AUC 0.89 vs Qwen2.5 32B; integrated DBpedia-WebNLG, Wikidata-TekGen, Odeuropa dataset with CIDOC-CRM ontologies to evaluate semantic accuracy/hallucination reduction"
      }),

      // Project 2
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Sentiment Analysis using BERT", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%203"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0, after: 120 },
        text: "BERT-based tweet classification achieving 78% F1-score; outperformed traditional NLP approaches (TextBlob, VADER) via comprehensive preprocessing"
      }),

      // SKILLS
      new Paragraph({
        style: "SectionHeader",
        text: "SKILLS"
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Technical: ", bold: true }),
          new TextRun("Python, SQL, R, PyTorch, TensorFlow, XGBoost, CNN, RNN, transformers, BERT, GPT-4o, HuggingFace, LangChain")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Data/Cloud: ", bold: true }),
          new TextRun("Spark, ETL, MongoDB, Elasticsearch, GCP (Vertex AI, BigQuery), AWS, Docker, Git, CI/CD, SAP SAC, Power BI")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "ML Techniques: ", bold: true }),
          new TextRun("Time series (ARIMAX, LASSO), computer vision, RL, optimization, feature engineering")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Specialized: ", bold: true }),
          new TextRun("NLP, GenAI (rompt engineering, RAG, fine-tuning), time series, computer vision, RL, knowledge graphs")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({ text: "Languages: ", bold: true }),
          new TextRun("English - Proficient (C2), French - Intermediate (B1)")
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outputPath = path.join(__dirname, "../docx/Naveen_Johnson_Resume_EN.docx");
  fs.writeFileSync(outputPath, buffer);
  console.log(`Final resume created successfully at: ${outputPath}`);
});

