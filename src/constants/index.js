const navLinks = [
  { id: "work", name: "Work", link: "#work" },
  { id: "about", name: "About", link: "#About" },
  { id: "experience", name: "Experience", link: "#experience" },
  { id: "skills", name: "Skills", link: "#skills" },
  { id: "testimonials", name: "Testimonials", link: "#testimonials" },
  { id: "tech", name: "Tech", link: "#tech" },
];

const words = [
  { id: "ideas-1", text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: "concepts-1", text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: "designs-1", text: "Designs", imgPath: "/images/designs.svg" },
  { id: "code-1", text: "Code", imgPath: "/images/code.svg" },

  { id: "ideas-2", text: "Ideas", imgPath: "/images/ideas.svg" },
  { id: "concepts-2", text: "Concepts", imgPath: "/images/concepts.svg" },
  { id: "designs-2", text: "Designs", imgPath: "/images/designs.svg" },
  { id: "code-2", text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { id: "experience", value: 1, suffix: "+", label: "Years of Experience" },
  { id: "clients", value: 200, suffix: "+", label: "Satisfied Clients" },
  { id: "projects", value: 2, suffix: "+", label: "Completed Projects" },
  { id: "retention", value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { id: 1, imgPath: "/images/logos/company-logo-1.png" },
  { id: 2, imgPath: "/images/logos/company-logo-2.png" },
  { id: 3, imgPath: "/images/logos/company-logo-3.png" },
  { id: 4, imgPath: "/images/logos/company-logo-4.png" },
  { id: 5, imgPath: "/images/logos/company-logo-5.png" },
  { id: 6, imgPath: "/images/logos/company-logo-6.png" },
  { id: 7, imgPath: "/images/logos/company-logo-7.png" },
  { id: 8, imgPath: "/images/logos/company-logo-8.png" },
  { id: 9, imgPath: "/images/logos/company-logo-9.png" },
  { id: 10, imgPath: "/images/logos/company-logo-10.png" },
  { id: 11, imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    id: "quality",
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    id: "communication",
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    id: "delivery",
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  { id: "react", name: "React Developer", imgPath: "/images/logos/react.png" },
  { id: "python", name: "Python Developer", imgPath: "/images/logos/python.svg" },
  { id: "backend", name: "Backend Developer", imgPath: "/images/logos/node.png" },
  { id: "three", name: "Interactive Developer", imgPath: "/images/logos/three.png" },
  { id: "git", name: "Project Manager", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    id: "react-3d",
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    id: "python-3d",
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    id: "node-3d",
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    id: "three-3d",
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    id: "git-3d",
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: "frontend-training",
    review:
      "Completed a Frontend training at Academy Thebes from June to July 2021. Learned HTML, CSS, and JavaScript, and developed a practical project called 'Games Store', featuring a functional login page.",
    imgPath: "/images/Thebes-Academy-Egypt-30152-1515939121-og.png",
    logoPath: "/images/image22.png",
    title: "Frontend Training",
    date: "June 2021 - July 2021",
    responsibilities: [
      "Learned core frontend technologies including HTML, CSS, and JavaScript.",
      "Built a 'Games Store' project with a login form and interactive UI.",
      "Gained practical experience in structuring responsive pages.",
    ],
  },
  {
    id: "react-course",
    review:
      "Undertook an extensive React course on Udemy from October 2023 to January 2025. Built 'To-Do App' and 'XO Game' projects using modern tools.",
    imgPath: "/images/image14.png",
    logoPath: "/images/channels4_profile.png",
    title: "React ",
    date: "Oct 2023 - Jan 2025",
    responsibilities: [
      "Mastered React concepts and state management.",
      "Built interactive projects.",
      "Worked with APIs, Node.js, and TailwindCSS.",
    ],
  },
  {
    id: "mean-stack",
    review:
      "Completed a MEAN Stack and Soft Skills course at NTI from July to September 2025 and built a Social Media project.",
    imgPath: "/images/NTI Logo.png",
    logoPath: "/images/imagess.png",
    title: "MEAN Stack & Soft Skills",
    date: "July 2025 - Sept 2025",
    responsibilities: [
      "Built a social media platform with MEAN Stack.",
      "Implemented interactive features.",
      "Enhanced teamwork and communication skills.",
    ],
  },
];

const expLogos = [
  { id: "logo1", name: "logo1", imgPath: "/images/logo1.png" },
  { id: "logo2", name: "logo2", imgPath: "/images/logo2.png" },
  { id: "logo3", name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    id: "esther",
    name: "Esther Howard",
    mentions: "@estherhoward",
    review: "I can’t say enough good things about Adrian...",
    imgPath: "/images/client1.png",
  },
  {
    id: "wade",
    name: "Wade Warren",
    mentions: "@wadewarren",
    review: "Working with Adrian was a fantastic experience...",
    imgPath: "/images/client3.png",
  },
  {
    id: "guy",
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review: "Collaborating with Adrian was an absolute pleasure...",
    imgPath: "/images/client2.png",
  },
  {
    id: "marvin",
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review: "Adrian was a pleasure to work with...",
    imgPath: "/images/client5.png",
  },
  {
    id: "floyd",
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review: "Adrian’s expertise in web development is impressive...",
    imgPath: "/images/client4.png",
  },
  {
    id: "albert",
    name: "Albert Flores",
    mentions: "@albertflores",
    review: "Adrian delivered a website that exceeded expectations...",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  { id: "insta", name: "insta", imgPath: "/images/insta.png" },
  { id: "fb", name: "fb", imgPath: "/images/fb.png" },
  { id: "x", name: "x", imgPath: "/images/x.png" },
  { id: "linkedin", name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
