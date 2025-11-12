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
          new TextRun({ text: "Nice, France • E-mail : ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "naveenjohnsonv@gmail.com", size: 18 })],
            link: "mailto:naveenjohnsonv@gmail.com"
          }),
          new TextRun({ text: " • Tél : ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "+33 6 02 56 18 12", size: 18 })],
            link: "tel:+33602561812"
          }),
          new TextRun({ text: " • LinkedIn : ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "in/naveenjv", size: 18 })],
            link: "https://www.linkedin.com/in/naveenjv"
          }),
          new TextRun({ text: " • Portfolio : ", size: 18 }),
          new ExternalHyperlink({
            children: [new TextRun({ text: "naveenjohnsonv.fr", size: 18 })],
            link: "https://naveenjohnsonv.fr"
          })
        ]
      }),

      // PROFIL
      new Paragraph({
        style: "SectionHeader",
        text: "PROFIL"
      }),
      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        text: "Data Scientist avec Master en Data Science (EURECOM) et 2+ ans d'expérience en analytics. Expertise en Python, PyTorch, TensorFlow, NLP, deep learning, GenAI et science des données. Recherche poste Data Scientist ; ouvert aux postes Data Engineer/Analyst."
      }),

      // EXPÉRIENCE PROFESSIONNELLE
      new Paragraph({
        style: "SectionHeader",
        text: "EXPÉRIENCE PROFESSIONNELLE"
      }),
      
      // Experience 1 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Stagiaire Recherche Data Science - Planification IA / NLP", bold: true })]
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
          new TextRun({ children: [new Tab(), "Mars 2025 - Août 2025, Valbonne, Alpes-Maritimes, France"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Développement de pipeline LLM générant spécifications PDDL formelles exécutées via planificateur Fast Downward pour récits interactifs jouables"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Amélioration de 60% de fiabilité via validation automatisée schéma/cohérence et mise en cache d'état pour auditabilité"
      }),

      // Experience 2 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Consultant Associate - SAP Analytics", bold: true })]
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
          new TextRun({ children: [new Tab(), "Décembre 2021 - Août 2023, Bengaluru, Karnataka, Inde"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Livraison de 20+ tableaux de bord SAC avec analyses statistiques détaillées pour parties prenantes pharma/agrochimie"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Construction de migrations ETL entre SAP ECC et BW/4HANA ; conception de logique KPI et pilotage UAT sur 5+ projets"
      }),

      // Experience 3 - Title
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Stagiaire - SAP Analytics", bold: true })]
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
          new TextRun({ children: [new Tab(), "Juillet 2021 - Décembre 2021, Bengaluru, Karnataka, Inde"], bold: true })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "200+ heures de formation sur SAC, BW, HANA, Python, SQL; contribution aux prototypes et à la documentation ETL/UAT"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        text: "Automatisation des contrôles de qualité des données en utilisant Python/Pandas et des extractions SQL"
      }),

      // FORMATION
      new Paragraph({
        style: "SectionHeader",
        text: "FORMATION"
      }),

      // Education 1 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Diplôme Master en Informatique, mention Data Science", bold: true })]
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
        text: "• Sujet principales : Machine Learning, Reinforcement/Deep Learning, Inférence Statistique Avancée, Implémentation SGBD"
      }),

      // Education 2 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Diplôme en Data Science", bold: true })]
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
          new TextRun({ children: [" • Chennai, Tamil Nadu, Inde", new Tab(), "2021 - 2024"] })
        ]
      }),

      // Education 3 - Degree
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        children: [new TextRun({ text: "Diplôme d'Ingénieur (B.Tech) en Électronique et Télécommunications", bold: true })]
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
          new TextRun({ children: [" • Kozhikode, Kerala, Inde", new Tab(), "2016 - 2020"] })
        ]
      }),

      // PROJETS
      new Paragraph({
        style: "SectionHeader",
        text: "PROJETS"
      }),

      // Project 1
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Ingénierie des Connaissances à l'Ère des LLM", bold: true })],
            link: "https://github.com/naveenjohnsonv/Text2KGBench"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Reproduction/extension d'expériences Text2KGBench comparant LLMs de pointe pour extraction triplets RDF avec évaluation précision/rappel/F1"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Développement de pipeline LLM conscient ontologies : GPT-4o atteignant AUC 0.89 vs Qwen2.5 32B ; intégration dataset DBpedia‑WebNLG, Wikidata‑TekGen, Odeuropa avec ontologies CIDOC-CRM"
      }),

      // Project 2
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Analyse de Sentiments avec BERT", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%203"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0, after: 120 },
        text: "Classification de tweets basée sur BERT atteignant 78% de F1-score ; surpassant approches NLP traditionnelles (TextBlob, VADER) via preprocessing complet"
      }),

      // COMPÉTENCES
      new Paragraph({
        style: "SectionHeader",
        text: "COMPÉTENCES"
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Technique : ", bold: true }),
          new TextRun("Python, SQL, R, PyTorch, TensorFlow, XGBoost, CNN, RNN, transformers, BERT, GPT-4o, HuggingFace, LangChain")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Data/Cloud : ", bold: true }),
          new TextRun("Spark, ETL, MongoDB, Elasticsearch, GCP (Vertex AI, BigQuery), AWS, Docker, Git, CI/CD, SAP SAC, Power BI")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Spécialisé : ", bold: true }),
          new TextRun("NLP, GenAI (prompt engineering, RAG, fine-tuning), séries temporelles, computer vision, graphes connaissances")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [
          new TextRun({ text: "Langues : ", bold: true }),
          new TextRun("Anglais - Courant (C2), Français - Intermédiaire (B1)")
        ]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const outputPath = path.join(__dirname, "Naveen_Johnson_Resume_FR.docx");
  fs.writeFileSync(outputPath, buffer);
  console.log(`Final resume created successfully at: ${outputPath}`);
});

