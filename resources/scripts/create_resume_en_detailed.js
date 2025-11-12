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
          text: "•", // Standard bullet character (U+2022) - default Word bullet
          alignment: AlignmentType.LEFT,
          style: { 
            paragraph: { 
              indent: { 
                left: convertInchesToTwip(0.125), // 0.125 inches = 180 twips
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
        text: "Data Scientist with MSc in Data Science (EURECOM) and 2+ years enterprise analytics experience. Proficient in Python, PyTorch, TensorFlow, NLP, deep learning, Generative AI, and knowledge engineering. Seeking Junior Data Scientist roles; open to Junior Data Engineer/Analyst positions."
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
        text: "Built a template-driven LLM model pipeline, using OpenAI's GPT-4o, that generates formal PDDL task specifications, which are then executed with Fast Downward open-source planner to create playable interactive narratives"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        text: "Added schema/consistency checks with automated fixes, cutting execution failures and improving reliability by ~60%"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Implemented state hashing and content-addressed caching; built utilities for plan replay and auditability"
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
        text: "Built ETL migrations between SAP ECC and BW/4HANA (ADSOs, CompositeProviders, transformations)"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Designed KPI logic and led data reconciliation, and UAT for production reports; delivery across 5+ enterprise projects"
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
        text: "• Core subjects: Machine Learning, Reinforcement Learning, Advanced Statistical Inference, Deep Learning, Distributed Systems and Cloud Computing, Database Management System Implementation (DBSys), Digital Image Processing & Video Compression, Semantic Web and Web Interaction Design, System and Network Security, Secure Communications, Project Management and Research Methodology"
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
        text: "Built ontology-aware LLM pipeline achieving superior performance with GPT-4o (AUC 0.89) over Qwen2.5 32B"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Integrated DBpedia‑WebNLG, Wikidata‑TekGen, Odeuropa datasets with CIDOC-CRM-aligned ontologies to evaluate semantic accuracy and hallucination reduction"
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
        spacing: { before: 0 },
        text: "Implemented a BERT-based model for tweet sentiment classification achieving 78% F1-score"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Compared performance with traditional NLP approaches (TextBlob, VADER), demonstrating superior results with transformer models through comprehensive preprocessing pipeline"
      }),

      // Project 3
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Audio Anomaly Detection in Industrial Machinery", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%202"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Implemented Convolutional and Variational Autoencoders for detecting anomalies in industrial machine sounds"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Achieved 88.8% AUC score with VAE outperforming classical AE (76.6%), enabling predictive maintenance applications for slide rail machinery"
      }),

      // Project 4
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Aerial Cactus Identification", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%201"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Developed custom CNN architecture for columnar cactus identification from aerial imagery using stacked convolutional blocks with batch normalization and dropout"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Achieved 99% accuracy and ROC/AUC score of 1.0 on VIGIA project dataset"
      }),

      // Project 5
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Solar Power Generation Forecasting", bold: true })],
            link: "https://github.com/naveenjohnsonv/ResearchProject"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Comparative analysis of LASSO regression and k-Nearest Neighbors models for day-ahead DC power prediction from solar plant"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        text: "LassoCV achieved RMSE of 0.538 using lagged DC power and ambient temperature features on hourly data"
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
          new TextRun({ text: "Programming/ML: ", bold: true }),
          new TextRun("Python, SQL, R, scikit-learn, PyTorch, TensorFlow, XGBoost, PySpark, Pandas, NumPy")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Deep Learning/NLP/GenAI: ", bold: true }),
          new TextRun("CNN, RNN, autoencoders, transformers, BERT, GPT-4o, HuggingFace, LangChain, prompt engineering, hallucination detection, RAG")
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
          new TextRun({ text: "Data/Cloud: ", bold: true }),
          new TextRun("ETL pipelines, Spark, Airflow, SQL, MongoDB, GCP (Vertex AI, BigQuery), AWS, Azure")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "DevOps/BI: ", bold: true }),
          new TextRun("Docker, Git, CI/CD, SAP SAC, dashboards, KPI design, SCRUM, Agile")
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
  const outputPath = path.join(__dirname, "Naveen_Johnson_Resume_EN_Detailed.docx");
  fs.writeFileSync(outputPath, buffer);
  console.log(`Final resume created successfully at: ${outputPath}`);
});
