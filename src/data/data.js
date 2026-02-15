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
    title: "AI-ML Intern",
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
];