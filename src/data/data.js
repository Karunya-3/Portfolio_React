export const projects = [
  {
    id: 1,
    title: "IV&V Automation Tool",
    description: "A tool that compares templates with project documents to generate observation reports.",
    technologies: ["React", "Javascript", "HTML5", "CSS3", "Bootstrap"],
    image: "/images/nstl.png",
    details:
      "Developed a web-based IV&V automation tool to streamline document comparison and automated observation report generation.",
    github_link: "https://github.com/Karunya-3/Automation",
    live_demo: "https://automation-umber.vercel.app/"
  },
  {
    id: 2,
    title: "Role Radar",
    description: "A tool to identify industry veterans based on minimal inputs like domain and keywords.",
    technologies: ["Flask", "NLP", "API Integration", "HTML5", "CSS3"],
    image: "/images/roleradar.png",
    details:
      "Built a smart tool to identify industry veterans with 10+ years experience using minimal inputs.",
    github_link: "https://github.com/Karunya-3/RoleRadar",
    live_demo: "https://roleradar-01.onrender.com/"
  },
  {
    id: 3,
    title: "Menstrual Cycle Predictor",
    description: "AI-powered tool to predict menstrual cycles using ML.",
    technologies: ["Streamlit", "Python", "ML", "Scikit-learn"],
    image: "/images/cycle.png",
    details:
      "Developed a predictive analytics tool to forecast menstrual cycles using ML.",
    github_link: "https://github.com/Karunya-3/AI_Predict_Cycles",
    live_demo: "https://karunya-3-ai-predict-cycles-page-l2hz0z.streamlit.app/"
  },
  {
    id: 4,
    title: "Real Time Chat Application",
    description: "Enables real-time chatting.",
    technologies: ["React", "Socket.io", "Node"],
    image: "/images/chat.png",
    details:
      "Built a real-time chat application using React and Socket.io.",
    github_link: "https://github.com/Karunya-3/Chat-Application",
    live_demo: "https://chat-application-lemon-chi.vercel.app/"
  }
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Flask"],
  Languages: ["Python", "C", "C++", "Java"],
  Libraries: ["NumPy", "Pandas", "Scikit-learn"],
  Tools: ["Git", "Canva"],
  Database: ["MySQL"],
  "Soft Skills": ["Problem Solving", "Teamwork", "Communication", "Adaptability"]
};
export const experiences = [
  {
    id: 1,
    title: "Intern",
    company: "NSTL (DRDO)",
    period: "May 2024 - July 2024",
    image: "/images/nstl-logo.png", // Add your logo image
    responsibilities: [
      "Developed IV&V automation tool for document comparison and observation report generation",
      "Worked with React and JavaScript to build responsive web interfaces",
      "Collaborated with team members to streamline testing processes"
    ],
    achievements: [
      { icon: "🏆", text: "Successfully delivered automation tool ahead of schedule" },
      { icon: "⭐", text: "Received appreciation from project guide for efficient work" },
      { icon: "📊", text: "Reduced manual document comparison time by 60%" }
    ]
  },
  {
    id: 2,
    title: "Intern",
    company: "Infosys Springboard",
    period: "October 2025 - December 2025",
    image: "/images/infosys-logo.png", // Add your logo image
    responsibilities: [
      "Built semantic search engine for YouTube content using YouTube Data API v3 and vector database",
      "Implemented data cleaning and embedding generation for efficient semantic video search",
      "Developed FAST API backend and integrated Gemini API for intelligent video summarization",
      "Created responsive React frontend for seamless user interaction with search results"
    ],
    achievements: [
      { icon: "🔍", text: "Engineered semantic search system using vector embeddings for intelligent YouTube content discovery" },
      { icon: "⚡", text: "Built high-performance FAST API backend with integrated Gemini API for real-time video summarization" },
      { icon: "📊", text: "Successfully processed and vectorized YouTube video data enabling context-aware semantic searches" }
    ]
  },
  {
    id: 3,
    title: "Open Source Contributor",
    company: "Code Social",
    period: "November 2025 - January 2026",
    image: "/images/codesocial-logo.png", // Add your logo image
    responsibilities: [
      "Merged 10+ pull requests in active open source project development",
      "Collaborated with global developers to improve code quality and feature implementation",
      "Participated in code reviews and issue triage for project maintenance"
    ],
    achievements: [
      { icon: "🔄", text: "Successfully merged 10+ pull requests into production codebase" },
      { icon: "🤝", text: "Collaborated with maintainers to enhance project functionality and documentation" },
      { icon: "🌍", text: "Contributed to global open source community with consistent, quality contributions" }
    ]
  },
  {
    id: 4,
    title: "AI Intern",
    company: "EduLinkUp",
    period: "Dec 2025 - Feb 2026",
    image: "/images/edulinkup-logo.png", 
    responsibilities: [
      "Developed an AI Interview Coach capstone project leveraging LLMs and Generative AI to deliver real-time, personalized interview feedback",
      "Worked with LLM APIs, Vector Databases, and RAG pipelines to build end-to-end production AI workflows",
      "Designed intelligent features to improve user readiness and streamline the mock interview process"
    ],
    achievements: [
      { icon: "🤖", text: "Successfully built and deployed an AI Interview Coach using cutting-edge Generative AI" },
      { icon: "⚡", text: "Implemented RAG pipelines and Vector Databases for highly accurate, real-time feedback" },
      { icon: "🚀", text: "Gained comprehensive, hands-end exposure to production-grade AI system architecture" }
    ]
},

];



export const codingProfilesCommunity = [
  {
    id: 1,
    category: "Coding Profiles",
    items: [
      {
        title: "LeetCode ",
        platform: "LeetCode",
        description: "Solved various problems across multiple difficulty levels",
        icon: "⚔️",
        profileUrl: "https://leetcode.com/u/karunya_3/",
        stats: "200+ problems solved",
        badge: "/images/200.gif" 
      },
      {
        title: "HackerRank",
        platform: "HackerRank",
        description: "5⭐ in Python | Certified in SQL, Python",
        icon: "🏆",
        profileUrl: "https://www.hackerrank.com/profile/karunyaaravapal1",
        stats: "200+ points in Python"
      },
      {
        title: "GeeksforGeeks",
        platform: "GFG",
        description: "Institute Rank #59 | Coding Score 500+",
        icon: "💻",
        profileUrl: "#",
        stats: "100+ problems solved"
      }
    ]
  },

  {
    id: 2,
    category: "Community Involvement",
    items: [
      {
        title: "Edumoon Student Clubs",
        role: "Core Team Member",
        description: "EdTech startup focused on student engagement and skill development",
        icon: "👨‍💻",
        achievements: [
          "Conducted coding and general quiz sessions",
          "Coordinated with culturals"
        ],
        period: "2023 - Present"
      },
      {
        title: "Codeiam Chapter",
        role: "Women Techies Lead",
        description: "Student led chapter of Codeiam, a global coding community for students",
        icon: "💡",
        achievements: [
          "Conducted coding sessions on DSA",
          "Managed technical events"
        ],
        period: "2023 - 2025"
      },
      {
        title: "Open Source Contributor",
        role: "Contributor",
        description: "Active contributor to open source projects",
        icon: "🌐",
        achievements: [
          "Contributed to 3+ repositories",
          "Submitted 10+ pull requests"
        ],
        profileUrl: "https://github.com/Karunya-3"
      }
    ]
  }
];
