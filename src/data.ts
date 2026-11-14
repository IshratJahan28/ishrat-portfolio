export const links = {
  email: "ishratj2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/ishrat-jahan-125b55259",
  github: "https://github.com/IshratJahan28",
};

export const research = [
  {
    title: "Modality Asymmetry and Durability of Unlearning in Continual Multimodal Learning",
    tag: "Undergraduate thesis · LLaVA-1.5-7B",
    body: "How does unlearning differ between the image and text sides of a multimodal language model, and does forgotten information stay forgotten as the model keeps learning new tasks?",
  },
];

export const categories = ["Web", "AI & ML", "Networking & Systems", "Hardware"];

// href = GitHub link (leave out if none). details = optional feature lists shown on the card.
export const projects: {
  category: string; name: string; subtitle?: string; stack: string; body: string;
  details?: [string, string[]][]; href?: string;
}[] = [
  {
    category: "Web",
    name: "ClinicEase",
    subtitle: "AI-Powered Healthcare Management System",
    stack: "React.js, Node.js, Express.js, MongoDB, JWT, REST API",
    body: "A web platform that brings patients, doctors and administrators onto one system, designed for healthcare in Bangladesh. It supports English and Bengali and local payment methods such as bKash, Nagad and Rocket.\n\nThe hardest parts were role-based access control for three user types, AI symptom checking with medical disclaimers and integrating local payment gateways.",
    details: [
      ["For patients", [
        "AI symptom checker that suggests possible conditions and specialists",
        "Doctor search, appointment booking, teleconsultation and home visit requests",
        "Medical records, prescriptions, lab test tracking and medicine reminders",
      ]],
      ["For doctors and admins", [
        "Prescription and medical record creation, with medicine autocomplete from a Bangladesh medicine database",
        "Invoices with PDF download and payments through bKash, Nagad, Rocket, Visa and MasterCard",
        "Secure messaging, real-time notifications, a community health forum and an admin analytics dashboard",
      ]],
    ],
    href: "https://github.com/sowmiknoor/ClinicEase",
  },
  {
    category: "Web",
    name: "CyberGuard",
    subtitle: "Anonymous Incident Intake & Reporting System",
    stack: "Laravel, MySQL, Figma",
    body: "A reporting and action platform for victims of digital harassment. It helps people collect evidence safely, find coping resources and protect themselves right away.\n\nMy part: I designed the Figma UI/UX and built the Anonymous Incident Intake Form Wizard in our team Laravel project. Earlier, I built five REST API endpoints for incident reporting and ticket tracking.",
    details: [
      ["Key features", [
        "Anonymous incident reporting through a step-by-step intake wizard",
        "Ticket tracking so a reporter can follow the status of a case",
        "Tools to strip sensitive personal details from screenshots",
        "Official proof documents generated from the evidence",
        "Coping resources for victims",
      ]],
    ],
    href: "https://github.com/ridawarida/CyberGuard",
  },
  {
    category: "Web",
    name: "Personal Finance Management System",
    stack: "PHP, HTML, CSS, PostgreSQL",
    body: "A web application for managing personal finances.",
  },
  {
    category: "AI & ML",
    name: "Explainable Hybrid ML for Phishing Website Detection",
    subtitle: "Co-authored research paper",
    stack: "Python, scikit-learn, XGBoost, SHAP",
    body: "With three collaborators, I compared five classifiers (Logistic Regression, Random Forest, XGBoost, a Voting Hybrid and a Stacking Hybrid) on two datasets: PhiUSIIL (235,795 websites) and UCI Phishing Websites (11,055 websites).",
    details: [
      ["Results", [
        "UCI: the Stacking Hybrid did best, with 97.65% accuracy and a 97.33% F1-score",
        "PhiUSIIL: Random Forest was near-perfect, with a ROC-AUC of 1.0000",
        "SHAP explained which features influence each prediction the most",
      ]],
    ],
    href: "https://github.com/IshratJahan28/Phishing-Website-Detection",
  },
  {
    category: "AI & ML",
    name: "Customer Category Classification",
    stack: "Machine learning, Jupyter",
    body: "CSE422 course project: a notebook that classifies customers into categories.",
    href: "https://github.com/IshratJahan28/Customer_Category_Classification",
  },
  {
    category: "Networking & Systems",
    name: "CoastNet: Cyclone Warning Network",
    stack: "Cisco Packet Tracer",
    body: "A network for seven cyclone early-warning and relief units in Bangladesh, using VLSM addressing, DHCP, DNS, RIPv2 and static routing.",
    href: "https://github.com/IshratJahan28/CoastNet-Cyclone-Warning-Network",
  },
  {
    category: "Networking & Systems",
    name: "Semantic Analyzer & Three-Address Code Generator",
    stack: "C++, Bison, Flex",
    body: "A compiler stage that checks semantics and generates three-address code, verified with AddressSanitizer.",
  },
  {
    category: "Networking & Systems",
    name: "ATM Simulator",
    stack: "Assembly language",
    body: "An ATM simulator covering user interaction and transaction operations.",
    href: "https://github.com/IshratJahan28/ATM-Simulator",
  },
  {
    category: "Networking & Systems",
    name: "Zombie Survival Game 3D",
    stack: "Python, PyOpenGL, GLUT",
    body: "A 3D survival game built with Python, PyOpenGL and GLUT.",
    href: "https://github.com/IshratJahan28/ZombieSurvivalGame3D",
  },
  {
    category: "Hardware",
    name: "Temperature-Controlled Fan with Flash ADC",
    stack: "LM35, LM324, IC 74148, IC 7485",
    body: "A temperature controller with no ready-made ADC chip. LM324 comparators on a resistor ladder form a flash ADC, and a 74148 priority encoder turns the result into a 3-bit code. 7485 comparators then switch an LED above 30°C, a 5V fan above 40°C and a buzzer above 50°C, while a 16x2 LCD shows the temperature.",
  },
  {
    category: "Hardware",
    name: "Comparator Circuit",
    stack: "Logic gate ICs, MUX",
    body: "A digital comparator built from XNOR, NOT, OR and AND gate ICs and a multiplexer.",
  },
];

export const skills: [string, string][] = [
  ["Programming", "Python, C, C++, Java, Assembly"],
  ["Data science & ML", "Pandas, NumPy, scikit-learn, XGBoost, SHAP, Google Colab"],
  ["Web & database", "PHP, Laravel, React, Node.js, Express, HTML, CSS, SQL, MySQL, PostgreSQL, MongoDB, Database management"],
  ["Networking", "Cisco Packet Tracer, Python sockets, TCP/IP, VLSM subnetting, DNS, Routing, DHCP"],
  ["Hardware", "Digital logic ICs, Comparators, Flash ADC design"],
  ["Tools & design", "Git/GitHub, Vercel, Figma, LaTeX, Microsoft Excel, Word, PowerPoint"],
];

export const honors = [
  ["Highest Distinction Award", "Graduated with the Highest Distinction."],
  ["Vice Chancellor's and Dean's Honor Lists", "Recognized on both lists."],
  ["Merit-based scholarships", "Received several during my degree."],
];

export const certificates = [
  { title: "Data Manipulation with pandas", issued: "March 2026", id: "#46,760,832", file: "data-manipulation-with-pandas.pdf" },
  { title: "Reshaping Data with pandas", issued: "March 2026", id: "#46,946,334", file: "reshaping-data-with-pandas.pdf" },
  { title: "Joining Data with pandas", issued: "March 2026", id: "#46,950,290", file: "joining-data-with-pandas.pdf" },
  { title: "Introduction to NumPy", issued: "March 2026", id: "#46,955,108", file: "introduction-to-numpy.pdf" },
  { title: "Cleaning Data in Python", issued: "April 2026", id: "#47,255,832", file: "cleaning-data-in-python.pdf" },
  { title: "Understanding Machine Learning", issued: "May 2026", id: "#47,638,215", file: "understanding-machine-learning.pdf" },
  { title: "AI Ethics", issued: "May 2026", id: "#47,639,364", file: "ai-ethics.pdf" },
];

// [title, place, year]
export const education: [string, string, string][] = [
  ["BSc in Computer Science and Engineering", "BRAC University", "2026"],
  ["Higher Secondary Certificate, Science", "Ideal School and College · GPA 5.00", "2021"],
  ["Secondary School Certificate, Science", "Ideal School and College · GPA 5.00", "2019"],
];
