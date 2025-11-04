/**
 * Translations for English and French
 */
const translations = {
    en: {
        // Header
        'header.tagline': 'Data Scientist | MSc in Data Science @ <a href="https://www.eurecom.fr" target="_blank">EURECOM</a><br />AI Planning • NLP • Knowledge Engineering<br />Former Research Intern @ <a href="https://www.alten.com" target="_blank">ALTEN Labs</a>',
        
        // Navigation
        'nav.about': 'About',
        'nav.background': 'Background',
        'nav.contact': 'Contact',
        
        // About Section
        'about.title': 'About Me',
        'about.intro1': 'Data Scientist with MSc in Data Science (EURECOM) and 2+ years enterprise analytics experience. Proficient in Python, PyTorch, TensorFlow, NLP, deep learning, Generative AI, and knowledge engineering. Seeking Junior Data Scientist roles; open to Junior Data Engineer/Analyst positions.',
        'about.skills.title': 'Technical Skills',
        'about.competencies.title': 'Key Competencies',
        
        // Background Section
        'background.title': 'Professional Background',
        'background.resume.button': 'Download Full Resume',
        'background.nav.experience': 'Experience',
        'background.nav.projects': 'Projects',
        'background.nav.education': 'Education',
        'background.nav.certifications': 'Certifications',
        
        // Experience
        'experience.title': 'Professional Experience',
        'experience.alten.title': 'Data Science Research Intern - AI Planning / NLP',
        'experience.alten.company': 'ALTEN Labs',
        'experience.alten.date': 'March 2025 - August 2025 | Valbonne, Alpes-Maritimes, France',
        'experience.alten.desc1': 'Built a template-driven LLM model pipeline, using OpenAI\'s GPT-4o, that generates formal PDDL task specifications, which are then executed with Fast Downward open-source planner to create playable interactive narratives',
        'experience.alten.desc2': 'Added schema/consistency checks with automated fixes, cutting execution failures and improving reliability by ~60%',
        'experience.alten.desc3': 'Implemented state hashing and content-addressed caching; built utilities for plan replay and auditability',
        
        'experience.blueprint1.title': 'Associate Consultant - SAP Analytics',
        'experience.blueprint1.company': 'Blueprint Technologies Pvt Ltd',
        'experience.blueprint1.date': 'December 2021 - August 2023 | Bengaluru, Karnataka, India',
        'experience.blueprint1.desc1': 'Delivered 20+ SAC dashboards with drill-downs and detailed statistical analyses for pharma and agrochem stakeholders',
        'experience.blueprint1.desc2': 'Built ETL migrations between SAP ECC and BW/4HANA (ADSOs, CompositeProviders, transformations)',
        'experience.blueprint1.desc3': 'Designed KPI logic and led data reconciliation, and UAT for production reports; delivery across 5+ enterprise projects',
        
        'experience.blueprint2.title': 'Intern - SAP Analytics',
        'experience.blueprint2.company': 'Blueprint Technologies Pvt Ltd',
        'experience.blueprint2.date': 'July 2021 - December 2021 | Bengaluru, Karnataka, India',
        'experience.blueprint2.desc1': 'Completed 200+ hours across SAC, BW, HANA, Python, SQL; contributed prototypes and ETL/UAT documentation',
        'experience.blueprint2.desc2': 'Automated data-quality checks using Python/Pandas and SQL extracts',
        
        // Projects
        'projects.title': 'Research Projects',
        'projects.llm.title': 'LLMs for Automated Generation of Interactive Scenarios',
        'projects.llm.meta': 'AI Planning | NLP | PDDL | LLM',
        'projects.llm.desc': 'Developed a neuro-symbolic pipeline combining LLMs with classical planners to generate playable interactive narrative scenarios. Implemented planner-validated pipeline with ~60% reliability improvement through automated schema/consistency checking and state caching for auditability.',
        
        'projects.ke.title': 'Knowledge Engineering in the LLM Era',
        'projects.ke.meta': 'Knowledge Graphs | NLP | RDF | Ontologies',
        'projects.ke.desc': 'Reproduced and extended Text2KGBench (Text-to-Knowledge-Graph Benchmark) experiments comparing state-of-the-art LLM models for RDF triple extraction, evaluating precision, recall, and F1-score. Built ontology-aware LLM pipeline achieving superior performance with GPT-4o (AUC 0.89) over Qwen2.5 32B. Integrated DBpedia-WebNLG, Wikidata-TekGen, Odeuropa datasets with CIDOC-CRM-aligned ontologies to evaluate semantic accuracy and hallucination reduction.',
        
        'projects.sentiment.title': 'Sentiment Analysis using BERT',
        'projects.sentiment.meta': 'NLP | BERT | Transformers',
        'projects.sentiment.desc': 'Implemented BERT-based model for tweet sentiment classification achieving 78% F1-score. Compared performance with traditional NLP approaches (TextBlob, VADER), demonstrating superior results with transformer models through comprehensive preprocessing pipeline.',
        
        'projects.audio.title': 'Audio Anomaly Detection in Industrial Machinery',
        'projects.audio.meta': 'Deep Learning | Autoencoders | PyTorch',
        'projects.audio.desc': 'Implemented Convolutional and Variational Autoencoders for detecting anomalies in industrial machine sounds. Achieved 88.8% AUC score with VAE outperforming classical AE (76.6%), enabling predictive maintenance applications for slide rail machinery.',
        
        'projects.cactus.title': 'Aerial Cactus Identification',
        'projects.cactus.meta': 'Deep Learning | Computer Vision | CNN',
        'projects.cactus.desc': 'Developed custom CNN architecture for columnar cactus identification from aerial imagery using stacked convolutional blocks with batch normalization and dropout. Achieved 99% accuracy and ROC/AUC score of 1.0 on VIGIA project dataset.',
        
        'projects.solar.title': 'Solar Power Generation Forecasting',
        'projects.solar.meta': 'Machine Learning | Time Series | Regression',
        'projects.solar.desc': 'Comparative analysis of LASSO regression and k-Nearest Neighbors models for day-ahead DC power prediction from solar plant. LassoCV achieved RMSE of 0.538 using lagged DC power and ambient temperature features on hourly data.',
        
        // Education
        'education.title': 'Education',
        'education.eurecom.degree': 'Master of Science in Computer Science, Data Science Specialization',
        'education.eurecom.school': 'EURECOM, Biot, France',
        'education.eurecom.date': '2023 - 2025',
        'education.eurecom.courses': 'Core Subjects:',
        'education.eurecom.course1': 'Machine Learning',
        'education.eurecom.course2': 'Reinforcement Learning',
        'education.eurecom.course3': 'Advanced Statistical Inference',
        'education.eurecom.course4': 'Deep Learning',
        'education.eurecom.course5': 'Distributed Systems and Cloud Computing',
        'education.eurecom.course6': 'Database Management System Implementation (DBSys)',
        'education.eurecom.course7': 'Digital Image Processing & Video Compression',
        'education.eurecom.course8': 'Semantic Web and Web Interaction Design',
        'education.eurecom.course9': 'System and Network Security',
        'education.eurecom.course10': 'Secure Communications',
        'education.eurecom.course11': 'Project Management and Research Methodology',
        
        'education.iitm.degree': 'Diploma in Data Science',
        'education.iitm.school': 'Indian Institute of Technology, Madras, Chennai, India',
        'education.iitm.date': '2021 - 2024',
        'education.iitm.desc': 'Comprehensive program covering statistics, mathematics, data science fundamentals, Python programming, and SQL.',
        
        'education.nit.degree': 'Bachelor of Technology in Electronics and Communication Engineering',
        'education.nit.school': 'National Institute of Technology, Calicut, Kozhikode, Kerala, India',
        'education.nit.date': '2016 - 2020',
        'education.nit.desc': 'Strong foundation in engineering fundamentals with focus on signal processing and communication systems.',
        
        // Certifications
        'certifications.title': 'Certifications & Test Scores',
        'certifications.scores.title': 'Test Scores',
        'certifications.professional.title': 'Professional Certifications',
        
        // Test Scores
        'cert.tfi.title': 'TFI (Test de français international)',
        'cert.tfi.issuer': 'French Language Test',
        'cert.tfi.date': 'January 2025',
        'cert.tfi.score': '<strong>Score: 385</strong> - Demonstrates B1 level proficiency',
        
        'cert.toefl.title': 'TOEFL',
        'cert.toefl.issuer': 'English Language Proficiency Test',
        'cert.toefl.date': 'November 2022',
        'cert.toefl.score': '<strong>Score: 110</strong> - Demonstrates C2 level proficiency',
        
        // Contact
        'contact.title': 'Get In Touch',
        'contact.intro': 'Are you looking for a data-driven professional to help solve complex problems or drive insights from your data? Or just want to say "Hi 👋"? Feel free to reach out!',
        'contact.name': 'Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Send Message',
        'contact.reset': 'Reset',
        
        // Button
        'button.close': 'Close'
    },
    
    fr: {
        // Header
        'header.tagline': 'Data Scientist | MSc en Data Science @ <a href="https://www.eurecom.fr" target="_blank">EURECOM</a><br />Planification IA • NLP • Ingénierie des Connaissances<br />Ancien Stagiaire Recherche @ <a href="https://www.alten.com" target="_blank">ALTEN Labs</a>',
        
        // Navigation
        'nav.about': 'À Propos',
        'nav.background': 'Parcours',
        'nav.contact': 'Contact',
        
        // About Section
        'about.title': 'À Propos de Moi',
        'about.intro1': 'Data Scientist titulaire d\'un Master en Data Science (EURECOM) avec 2+ ans d\'expérience en tant qu\'un Business Analyst. Maîtrise de Python, PyTorch, TensorFlow, NLP, deep learning, GenAI et science des données. Recherche poste Junior Data Scientist ; ouvert aux postes Data Engineer/Analyst.',
        'about.skills.title': 'Compétences Techniques',
        'about.competencies.title': 'Compétences Clés',
        
        // Background Section
        'background.title': 'Parcours Professionnel',
        'background.resume.button': 'Télécharger le CV Complet',
        'background.nav.experience': 'Expérience',
        'background.nav.projects': 'Projets',
        'background.nav.education': 'Formation',
        'background.nav.certifications': 'Certifications',
        
        // Experience
        'experience.title': 'Expérience Professionnelle',
        'experience.alten.title': 'Stagiaire Recherche Data Science - Planification IA / NLP',
        'experience.alten.company': 'ALTEN Labs',
        'experience.alten.date': 'Mars 2025 - Août 2025 | Valbonne, Alpes-Maritimes, France',
        'experience.alten.desc1': 'Développement d\'un pipeline LLM utilisant OpenAI GPT-4o pour génération de spécifications de tâches formelles PDDL, exécutées avec le planificateur open-source Fast Downward pour créer des récits interactifs jouables',
        'experience.alten.desc2': 'Réduction de 60% des échecs d\'exécution via contrôles de schéma/cohérence avec corrections automatisées',
        'experience.alten.desc3': 'Implémentation de hachage d\'état et mise en cache pour traçabilité et rejouabilité des plans',
        
        'experience.blueprint1.title': 'Consultant Associate - SAP Analytics',
        'experience.blueprint1.company': 'Blueprint Technologies Pvt Ltd',
        'experience.blueprint1.date': 'Décembre 2021 - Août 2023 | Bengaluru, Karnataka, Inde',
        'experience.blueprint1.desc1': 'Livraison de 20+ tableaux de bord SAC avec analyses détaillées statistiques pour les parties prenantes pharma et agrochimie',
        'experience.blueprint1.desc2': 'Construction de migrations ETL entre SAP ECC et BW/4HANA (ADSOs, CompositeProviders, transformations)',
        'experience.blueprint1.desc3': 'Conception de logique KPI et pilotage de réconciliation de données et UAT sur 5+ projets d\'entreprise',
        
        'experience.blueprint2.title': 'Stagiaire - SAP Analytics',
        'experience.blueprint2.company': 'Blueprint Technologies Pvt Ltd',
        'experience.blueprint2.date': 'Juillet 2021 - Décembre 2021 | Bengaluru, Karnataka, Inde',
        'experience.blueprint2.desc1': '200+ heures de formation sur SAC, BW, HANA, Python, SQL; contribué aux prototypes et à la documentation ETL/UAT',
        'experience.blueprint2.desc2': 'Automatisé les contrôles de qualité des données en utilisant Python/Pandas et des extractions SQL',
        
        // Projects
        'projects.title': 'Projets de Recherche',
        'projects.llm.title': 'LLMs pour la Génération Automatisée de Scénarios Interactifs',
        'projects.llm.meta': 'Planification IA | NLP | PDDL | LLM',
        'projects.llm.desc': 'Développé un pipeline neuro-symbolique combinant LLMs avec planificateurs classiques pour générer des scénarios narratifs interactifs jouables. Implémenté un pipeline validé par planificateur avec amélioration de fiabilité de ~60% via vérification automatisée de schéma/cohérence et mise en cache d\'état pour l\'auditabilité.',
        
        'projects.ke.title': 'Ingénierie des Connaissances à l\'Ère des LLM',
        'projects.ke.meta': 'Graphes de Connaissances | NLP | RDF | Ontologies',
        'projects.ke.desc': 'Reproduction et extension des expériences Text2KGBench (Text-to-Knowledge-Graph Benchmark) comparant les performances des modèles LLM de pointe pour l\'extraction de triplets RDF, avec évaluation de la précision, du rappel et du F1-score. Développement d\'un pipeline LLM conscient des ontologies atteignant performance supérieure avec GPT-4o (AUC 0.89) par rapport à Qwen2.5 32B. Intégration des datasets DBpedia-WebNLG, Wikidata-TekGen, Odeuropa avec ontologies alignées CIDOC-CRM pour évaluation de la précision sémantique et réduction des hallucinations.',
        
        'projects.sentiment.title': 'Analyse de Sentiments avec BERT',
        'projects.sentiment.meta': 'NLP | BERT | Transformers',
        'projects.sentiment.desc': 'Implémentation d\'un modèle basé sur BERT pour classification de sentiments de tweets atteignant 78% de F1-score. Comparaison de performance avec approches NLP traditionnelles (TextBlob, VADER), démontrant résultats supérieurs avec modèles transformers via pipeline de prétraitement complet.',
        
        'projects.audio.title': 'Détection d\'Anomalies Audio dans les Machines Industrielles',
        'projects.audio.meta': 'Deep Learning | Autoencodeurs | PyTorch',
        'projects.audio.desc': 'Implémentation d\'autoencodeurs convolutionnels et variationnels pour détecter anomalies dans sons de machines industrielles. Obtention d\'un score AUC de 88,8% avec VAE surpassant AE classique (76,6%), permettant applications de maintenance prédictive pour machines à rails coulissants.',
        
        'projects.cactus.title': 'Identification de Cactus par Imagerie Aérienne',
        'projects.cactus.meta': 'Deep Learning | Vision par Ordinateur | CNN',
        'projects.cactus.desc': 'Développement d\'une architecture CNN personnalisée pour identification de cactus columnaires à partir d\'imagerie aérienne utilisant blocs convolutionnels empilés avec normalisation par batch et dropout. Obtention d\'une précision de 99% et score ROC/AUC de 1,0 sur dataset du projet VIGIA.',
        
        'projects.solar.title': 'Prévision de Production d\'Énergie Solaire',
        'projects.solar.meta': 'Machine Learning | Séries Temporelles | Régression',
        'projects.solar.desc': 'Analyse comparative de modèles de régression LASSO et k plus proches voisins pour prédiction jour suivant de puissance DC d\'installation solaire. LassoCV a atteint RMSE de 0,538 utilisant puissance DC retardée et caractéristiques de température ambiante sur données horaires.',
        
        // Education
        'education.title': 'Formation',
        'education.eurecom.degree': 'Diplôme Master en Informatique, mention Data Science',
        'education.eurecom.school': 'EURECOM, Biot, France',
        'education.eurecom.date': '2023 - 2025',
        'education.eurecom.courses': 'Sujets Principales :',
        'education.eurecom.course1': 'Machine Learning',
        'education.eurecom.course2': 'Reinforcement Learning',
        'education.eurecom.course3': 'Inférence Statistique Avancée',
        'education.eurecom.course4': 'Deep Learning',
        'education.eurecom.course5': 'Systèmes Distribués et Cloud Computing',
        'education.eurecom.course6': 'Implémentation de Systèmes de Gestion de Base de Données (SGBD)',
        'education.eurecom.course7': 'Traitement d\'Images Numériques & Compression Vidéo',
        'education.eurecom.course8': 'Web Sémantique et Conception d\'Interaction Web',
        'education.eurecom.course9': 'Sécurité des Systèmes et des Réseaux',
        'education.eurecom.course10': 'Communications Sécurisées',
        'education.eurecom.course11': 'Gestion de Projet et Méthodologie de Recherche',
        
        'education.iitm.degree': 'Diplôme en Data Science',
        'education.iitm.school': 'Indian Institute of Technology, Madras, Chennai, Tamil Nadu, Inde',
        'education.iitm.date': '2021 - 2024',
        'education.iitm.desc': 'Programme complet couvrant statistiques, mathématiques, fondamentaux data science, programmation Python et SQL.',
        
        'education.nit.degree': 'Diplôme d\'Ingénieur (B.Tech) en Électronique et Télécommunications',
        'education.nit.school': 'National Institute of Technology, Calicut, Kozhikode, Kerala, Inde',
        'education.nit.date': '2016 - 2020',
        'education.nit.desc': 'Base solide en fondamentaux de l\'ingénierie avec focus sur le traitement du signal et les systèmes de communication.',
        
        // Certifications
        'certifications.title': 'Certifications et Scores de Tests',
        'certifications.scores.title': 'Scores de Tests',
        'certifications.professional.title': 'Certifications Professionnelles',
        
        // Test Scores
        'cert.tfi.title': 'TFI (Test de français international)',
        'cert.tfi.issuer': 'Test de langue française',
        'cert.tfi.date': 'Janvier 2025',
        'cert.tfi.score': '<strong>Score : 385</strong> - Démontre un niveau de compétence B1',
        
        'cert.toefl.title': 'TOEFL',
        'cert.toefl.issuer': 'Test de compétence en langue anglaise',
        'cert.toefl.date': 'Novembre 2022',
        'cert.toefl.score': '<strong>Score : 110</strong> - Démontre un niveau de compétence C2',
        
        // Contact
        'contact.title': 'Contactez-Moi',
        'contact.intro': 'Vous cherchez un professionnel orienté données pour résoudre des problèmes complexes ou obtenir des insights de vos données ? Ou juste envie de dire "Salut 👋" ? N\'hésitez pas à me contacter !',
        'contact.name': 'Prénom et Nom',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.send': 'Envoyer',
        'contact.reset': 'Réinitialiser',
        
        // Button
        'button.close': 'Fermer'
    }
};
