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
        children: [new TextRun({ text: "PROFIL" })]
      }),
      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        text: "Data Scientist titulaire d'un Master en Data Science (EURECOM) avec 2+ ans d'expérience en tant qu'un Business Analyst. Maîtrise de Python, PyTorch, TensorFlow, NLP, deep learning, GenAI et science des données. Recherche poste Junior Data Scientist ; ouvert aux postes Data Engineer/Analyst."
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
        text: "Développement d'un pipeline LLM utilisant OpenAI GPT-4o pour génération de spécifications de tâches formelles PDDL, exécutées avec le planificateur open-source Fast Downward pour créer des récits interactifs jouables"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        text: "Réduction de 60% des échecs d'exécution via contrôles de schéma/cohérence avec corrections automatisées"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Implémentation de hachage d'état et mise en cache pour traçabilité et rejouabilité des plans"
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
        text: "Livraison de 20+ tableaux de bord SAC avec analyses détaillées statistiques pour les parties prenantes pharma et agrochimie"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        text: "Construction de migrations ETL entre SAP ECC et BW/4HANA (ADSOs, CompositeProviders, transformations)"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Conception de logique KPI et pilotage de réconciliation de données et UAT sur 5+ projets d'entreprise"
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
        text: "Réalisation de 200+ heures de formation sur SAC, BW, HANA, Python, SQL ; contribution aux prototypes et à la documentation ETL/UAT"
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
        text: "• Sujet principales : Machine Learning, Reinforcement Learning, Inférence Statistique Avancée, Deep Learning, Systèmes Distribués et Cloud Computing, Implémentation de Systèmes de Gestion de Base de Données (SGBD), Traitement d'Images Numériques & Compression Vidéo, Web Sémantique et Conception d'Interaction Web, Sécurité des Systèmes et des Réseaux, Communications Sécurisées, Gestion de Projet et Méthodologie de Recherche"
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
        text: "Reproduction et extension des expériences Text2KGBench (Text-to-Knowledge-Graph Benchmark) comparant les performances des modèles LLM de pointe pour l'extraction de triplets RDF, avec évaluation de la précision, du rappel et du F1-score"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        text: "Développement d'un pipeline LLM conscient des ontologies atteignant performance supérieure avec GPT-4o (AUC 0.89) par rapport à Qwen2.5 32B"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Intégration du dataset DBpedia‑WebNLG, Wikidata‑TekGen, Odeuropa avec ontologies alignées CIDOC-CRM pour évaluation de la précision sémantique et réduction des hallucinations"
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
        spacing: { before: 0 },
        text: "Implémentation d'un modèle basé sur BERT pour classification de sentiments de tweets atteignant 78% de F1-Score"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Comparaison de performance avec approches NLP traditionnelles (TextBlob, VADER), démontrant résultats supérieurs avec modèles transformers via pipeline de prétraitement complet"
      }),

      // Project 3
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Détection d'Anomalies Audio dans les Machines Industrielles", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%202"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Implémentation d'autoencodeurs convolutionnels et variationnels pour détecter anomalies dans sons de machines industrielles"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Obtention d'un score AUC de 88,8% avec VAE surpassant AE classique (76,6%), permettant applications de maintenance prédictive pour machines à rails coulissants"
      }),

      // Project 4
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Identification de Cactus par Imagerie Aérienne", bold: true })],
            link: "https://github.com/naveenjohnsonv/AML/tree/main/Challenge%201"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Développement d'une architecture CNN personnalisée pour identification de cactus columnaires à partir d'imagerie aérienne utilisant blocs convolutionnels empilés avec normalisation par batch et dropout"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 40 },
        text: "Obtention d'une précision de 99% et score ROC/AUC de 1,0 sur dataset du projet VIGIA"
      }),

      // Project 5
      new Paragraph({
        alignment: AlignmentType.JUSTIFIED,
        tabStops: [{ type: TabStopType.RIGHT, position: 10466 }],
        children: [
          new ExternalHyperlink({
            children: [new TextRun({ text: "Prévision de Production d'Énergie Solaire", bold: true })],
            link: "https://github.com/naveenjohnsonv/ResearchProject"
          }),
          new TextRun({ children: [new Tab(), "EURECOM • 2024"] })
        ]
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { before: 0 },
        text: "Analyse comparative de modèles de régression LASSO et k plus proches voisins pour prédiction jour suivant de puissance DC d'installation solaire"
      }),
      new Paragraph({
        numbering: { reference: "bullet-list", level: 0 },
        spacing: { after: 120 },
        text: "LassoCV a atteint RMSE de 0,538 utilisant puissance DC retardée et caractéristiques de température ambiante sur données horaires"
      }),

      // COMPÉTENCES
      new Paragraph({
        style: "SectionHeader",
        children: [new TextRun({ text: "COMPÉTENCES" })]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Programmation/ML: ", bold: true }),
          new TextRun("Python, SQL, R, scikit-learn, PyTorch, TensorFlow, XGBoost, PySpark, Pandas, NumPy")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Deep Learning/NLP/GenAI: ", bold: true }),
          new TextRun("CNN, RNN, Autoencodeurs, Transformers, BERT, GPT-4o, HuggingFace, LangChain, Prompt Engineering, Détection Hallucinations, RAG")
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.LEFT,
        spacing: { after: 40 },
        children: [
          new TextRun({ text: "Techniques ML: ", bold: true }),
          new TextRun("Séries temporelles (ARIMAX, LASSO), computer vision, RL, optimisation, feature engineering")
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
          new TextRun("Docker, Git, CI/CD, SAP SAC, dashboards, conception KPI, SCRUM, Agile")
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
  const outputPath = path.join(__dirname, "../docx/Naveen_Johnson_Resume_FR_Detailed.docx");
  fs.writeFileSync(outputPath, buffer);
  console.log(`Final resume created successfully at: ${outputPath}`);
});

