// src/data/config.js
// Note: paths below assume your assets live at `src/assets/...`
// Example: src/assets/projects/multimodal.jpg, src/assets/projects/Profile.jpg, src/assets/certificates/tensorflow.png

export const CONFIG = {
  personal: {
    name: "Suryansh Tyagi",
    tagline: "AI/ML Engineer | Data Scientist | Generative AI & Deep Learning Practitioner",

    // Use Vite-resolved URLs for assets inside src/assets
    profileImage: new URL('../assets/projects/Profile.jpg', import.meta.url).href,

    bio:
      "AI/ML Engineer and Data Scientist with hands-on experience in Machine Learning, Deep Learning, NLP, and Generative AI. I build intelligent systems such as OCR models, RAG pipelines, LLM-powered applications, and data-driven analytical solutions. Skilled in transforming raw data into actionable insights and deploying scalable AI products.",

    goal:
      "To grow as a high-impact AI/ML and Data Science Engineer, building intelligent systems using Machine Learning, Deep Learning, and Generative AI while contributing to real-world AI innovation.",

    resumeLink:
      "https://drive.google.com/file/d/1b0Nk6eZrVpsY13DTyjM_qVj3oN_8-q8E/view?usp=sharing",
  },

  social: {
    github: "https://github.com/Suryanshtyagi12",
    email: "tyagisurya.04@gmail.com",
    linkedin: "https://www.linkedin.com/in/tyagi9/",
    twitter: "",
    instagram: "",
    portfolio: "",
  },

  education: {
    degree: "B.Tech in Computer Science",
    university: "Lovely Professional University",
    year: "2022 - 2026",
  },

  projects: [
    {
      id: 1,
      title: "Multi-Agent Multimodal AI Assistant",
      description:
        "A multimodal AI assistant capable of extracting information from PDFs and images, and interacting through a chatbot interface. Built using LLMs, document parsers, and Streamlit.",
      image: new URL('../assets/projects/multimodel.jpg', import.meta.url).href,
      github: "https://github.com/Suryanshtyagi12/multi-agent-multimodal-assistant",
      demo: "",
      tags: ["LLM", "LangChain", "Agents", "Streamlit", "OCR", "PDF Parsing"],
    },

    {
      id: 2,
      title: "Kasparro Agentic FB Analyst",
      description:
        "An agentic AI system that automates Facebook competitor analysis, content extraction, insights generation, and reporting for Kasparro. Uses LLM agents and automation pipelines.",
      image: new URL('../assets/projects/kasporo.jpg', import.meta.url).href,
      github: "https://github.com/Suryanshtyagi12/kasparro-agentic-fb-analyst-suryansh-tyagi",
      demo: "",
      tags: ["Agentic AI", "LLM", "Automation", "Data Extraction", "NLP"],
    },

    {
      id: 3,
      title: "Customer Churn Prediction Using Deep Learning",
      description:
        "An end-to-end deep learning pipeline using ANN for churn prediction. Includes preprocessing, EDA, feature engineering, hyperparameter tuning, TensorBoard monitoring, and Streamlit deployment.",
      image: new URL('../assets/projects/customer_churn.jpg', import.meta.url).href,
      github: "https://github.com/Suryanshtyagi12/customer-churn-prediction",
      demo: "",
      tags: ["Deep Learning", "TensorFlow", "EDA", "ANN", "Streamlit"],
    },

    {
      id: 4,
      title: "Heart Disease Prediction App",
      description:
        "A Machine Learning web-app that predicts heart disease risk using medical parameters. Includes preprocessing, model training, evaluation, and Streamlit deployment.",
      image: new URL('../assets/projects/heart_disease.png', import.meta.url).href,
      github: "https://github.com/Suryanshtyagi12/Heart-Disease-Prediction",
      demo: "https://huggingface.co/spaces/tyagisurya001/Heart_disease_preccdictor",
      tags: ["Machine Learning", "Streamlit", "HuggingFace", "Data Science"],
    },

    {
      id: 5,
      title: "Vision Transformer (ViT) Built From Scratch",
      description:
        "Implemented a Vision Transformer architecture from scratch using PyTorch, including patch embeddings, attention, positional encodings, and classification pipeline.",
      image: new URL('../assets/projects/VIT.jpg', import.meta.url).href,
      github: "https://github.com/Suryanshtyagi12/Coding-VIT-From-Scratch",
      demo: "",
      tags: ["Deep Learning", "PyTorch", "ViT", "Computer Vision"],
    },
  ],

  // Keep original groups but also add the keys your Skills.jsx expects.
  skills: {
    // original groups
    programming: ["Python", "C++", "SQL", "Java"],

    ml_frameworks: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "OpenCV",
    ],

    genai: [
      "HuggingFace Transformers",
      "LangChain",
      "Prompt Engineering",
      "RAG Pipelines",
      "Vector Databases (FAISS, ChromaDB)",
      "LLM Fine-tuning",
      "Multi-Agent Systems",
    ],

    data_science: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "SciPy",
      "EDA",
      "Feature Engineering",
    ],

    mlops: [
      "Docker",
      "FastAPI",
      "Streamlit",
      "HuggingFace Deployment",
      "Git & GitHub",
      "Linux / Bash",
      "Model Serving",
    ],

    cs_core: [
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "REST APIs",
      "Software Engineering Principles",
    ],

    // keys expected by Skills.jsx — map/merge from above groups
    languages: ["Python", "C++", "SQL", "Java"],

    frameworks: [
      // include common JS/ML frameworks and genai libs to show up in the "Frameworks & Libraries" card
      ...[
      
      ].filter(Boolean), // keep safe if you don't have these
      ...[
        "PyTorch",
        "TensorFlow",
        "Keras",
        "Scikit-learn",
      ],
      // include GenAI libs too (optional)
      ...[
        "HuggingFace Transformers",
        "LangChain",
      ],
    ],

    tools: [
      ...[
        "Docker",
        "Git",
        "Linux / Bash",
        "FastAPI",
        "Streamlit",
        "HuggingFace Deployment",
      ],
    ],

    concepts: [
      ...[
        "Data Structures & Algorithms",
        "OOP",
        "Operating Systems",
        "REST APIs",
        "RAG Pipelines",
        "Prompt Engineering",
      ],
    ],
  },

  certificates: [
    {
      id: 1,
      title: "TensorFlow for AI/ML/DL",
      issuer: "DeepLearning.ai / Coursera",
      date: "2025",
      image: new URL('../assets/certificates/tensorflow.png', import.meta.url).href,
      link: "https://drive.google.com/file/d/1ArqbzSfd3gn4Ii92XZkTv6pqEORKj9iP/view?usp=sharing",
    },
    {
      id: 2,
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "2025",
      image: new URL('../assets/certificates/cloud_nptel.png', import.meta.url).href,
      link: "https://drive.google.com/file/d/1DzAU09AmJSuOwR26gcQ-QvJCl1-3zfpB/view?usp=sharing",
    },
    {
      id: 3,
      title: "Tableau Data Visualization",
      issuer: "Salesforce / Coursera",
      date: "2024",
      image: new URL('../assets/certificates/tableau_cir.png', import.meta.url).href,
      link: "https://drive.google.com/file/d/1DzAU09AmJSuOwR26gcQ-QvJCl1-3zfpB/view?usp=sharing",
    },
  ],

  emailjs: {
    serviceId: "service_hg06vch",
    templateId: "template_bg3w8hs",
    publicKey: "louttENHUEfGnBowJ",
  },
};

export default CONFIG;
