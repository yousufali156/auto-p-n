import React from 'react';

// Lucide React Icons (https://lucide.dev/icons/)
// এই আইকনগুলো ব্যবহার করা হয়েছে পোর্টফোলিওতে ভিজ্যুয়াল এলিমেন্ট যোগ করার জন্য।
import { Linkedin, Github, Mail, Phone, MapPin, Download, Code, Layers, Database, Lightbulb, GraduationCap, Briefcase, ExternalLink, GitBranch, Server, Globe, Wrench, User, Quote } from 'lucide-react';

// আপনার পোর্টফোলিওর ডেটা
const portfolioData = {
  name: "Md. Yousuf Ali",
  title: "Full Stack Developer | Proficient in React, Node.js, and MongoDB Rest API",
  location: "Bogura, Bangladesh",
  phone: "+8801754954385",
  email: "mdyousufali.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/md-yousuf-ali-dev/", // আপনার LinkedIn প্রোফাইল লিঙ্ক যোগ করুন
  github: "https://github.com/mdyousufali-dev", // আপনার GitHub প্রোফাইল লিঙ্ক যোগ করুন
  portfolioLink: "https://yousufali-portfolio.vercel.app/#home", // আপনার বর্তমান পোর্টফোলিও লিঙ্ক
  resumeLink: "#", // আপনার CV ডাউনলোড লিঙ্ক (যদি থাকে)

  careerObjective: "Passionate Full Stack Developer (MERN) with a strong focus on building high-performance, scalable, and user-centric web applications that address real-world challenges. Eager to join a forward-thinking team that values innovation, mentorship, and meaningful impact through technology.",

  skills: {
    frontend: [
      { name: "React.js", icon: <Code className="w-5 h-5 text-blue-400" /> },
      { name: "Next.js", icon: <Code className="w-5 h-5 text-gray-400" /> },
      { name: "JavaScript (ES6+)", icon: <Code className="w-5 h-5 text-yellow-400" /> },
      { name: "TypeScript", icon: <Code className="w-5 h-5 text-blue-500" /> },
      { name: "HTML5", icon: <Code className="w-5 h-5 text-orange-500" /> },
      { name: "Tailwind CSS", icon: <Code className="w-5 h-5 text-cyan-400" /> },
      { name: "Framer Motion", icon: <Code className="w-5 h-5 text-purple-400" /> },
    ],
    backend: [
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
      { name: "Express.js", icon: <Server className="w-5 h-5 text-gray-400" /> },
      { name: "RESTful APIs", icon: <Layers className="w-5 h-5 text-orange-400" /> },
      { name: "JWT Authentication", icon: <Layers className="w-5 h-5 text-red-400" /> },
    ],
    database: [
      { name: "MongoDB", icon: <Database className="w-5 h-5 text-green-500" /> },
      { name: "Firebase Firestore", icon: <Database className="w-5 h-5 text-yellow-500" /> },
    ],
    toolsDevOps: [
      { name: "Git", icon: <GitBranch className="w-5 h-5 text-orange-500" /> },
      { name: "GitHub", icon: <Github className="w-5 h-5 text-gray-400" /> },
      { name: "Firebase Authentication", icon: <Wrench className="w-5 h-5 text-yellow-500" /> },
      { name: "Stripe Integration", icon: <Wrench className="w-5 h-5 text-purple-500" /> },
      { name: "Vercel", icon: <Wrench className="w-5 h-5 text-gray-400" /> },
      { name: "Netlify", icon: <Wrench className="w-5 h-5 text-teal-400" /> },
      { name: "Canva", icon: <Wrench className="w-5 h-5 text-blue-400" /> },
    ],
    uiUx: [
      { name: "Component-Based Architecture", icon: <Lightbulb className="w-5 h-5 text-indigo-400" /> },
      { name: "Responsive Design", icon: <Lightbulb className="w-5 h-5 text-emerald-400" /> },
      { name: "Performance Optimization", icon: <Lightbulb className="w-5 h-5 text-rose-400" /> },
    ],
    softSkills: [
      { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5 text-yellow-400" /> },
      { name: "Communication", icon: <Lightbulb className="w-5 h-5 text-blue-400" /> },
      { name: "Collaboration", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "Mentorship", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "Time Management", icon: <Lightbulb className="w-5 h-5" /> },
    ],
    aiSkills: [
      { name: "ChatGPT", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "Gemini", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "GitHub Copilot", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "Prompt Engineering", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "OpenAI API", icon: <Lightbulb className="w-5 h-5" /> },
      { name: "AI Tools Integration", icon: <Lightbulb className="w-5 h-5" /> },
    ],
  },

  projects: [
    {
      name: "CourseHub - Comprehensive Course Management Platform with Secure Enrollment",
      features: [
        "User registration and secure login with Firebase Auth.",
        "Browse, enroll, and manage courses with enrollment limits.",
        "Secure enrollment management using MongoDB aggregation and responsive React UI.",
      ],
      technologies: ["React.js", "Firebase Auth", "Node.js", "Express.js", "MongoDB", "JWT", "Vercel"],
      liveLink: "#", // প্রোজেক্টের লাইভ লিঙ্ক যোগ করুন
      clientLink: "#", // ক্লায়েন্ট-সাইড রিপো লিঙ্ক যোগ করুন
      serverLink: "#", // সার্ভার-সাইড রিপো লিঙ্ক যোগ করুন
      image: "https://placehold.co/400x250/36454F/ffffff?text=CourseHub" // প্রোজেক্টের ইমেজ প্লেসহোল্ডার
    },
    {
      name: "Task Match - Fast & Easy Freelance Task Marketplace with Real-Time Bidding",
      features: [
        "Post and manage tasks with details like title, category, deadline, and budget; browse available tasks.",
        "Secure login using Firebase Authentication; user dashboard to view, update & delete own posted tasks.",
        "Protected routes restrict access to authenticated users only, Real-time bid count & task status updates.",
      ],
      technologies: ["React.js", "Tailwind", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "JWT", "Vercel"],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "https://placehold.co/400x250/36454F/ffffff?text=Task+Match" // প্রোজেক্টের ইমেজ প্লেসহোল্ডার
    },
    {
      name: "PortfoGen - Modern Portfolio Generator with Live Preview & Multiple Themes",
      features: [
        "5+ modern, responsive portfolio templates with light/dark mode toggle.",
        "Real-time preview of user content including About, Skills, Projects, and Experience.",
        "Mobile-friendly UI with smooth SPA performance and static deployability.",
      ],
      technologies: ["React.js (Vite)", "Tailwind CSS", "DaisyUI", "react-icons", "Netlify", "Framer Motion"],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "https://placehold.co/400x250/36454F/ffffff?text=PortfoGen" // প্রোজেক্টের ইমেজ প্লেসহোল্ডার
    },
    {
      name: "DevTalks - Feature-rich MERN Stack Forum Platform",
      features: [
        "Designed for meaningful, real-time conversations.",
        "Includes secure authentication, role-based memberships, Stripe payments.",
        "Powerful admin dashboard optimized for performance and user experience.",
        "Showcases full-stack expertise with clean, responsive UI.",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "https://placehold.co/400x250/36454F/ffffff?text=DevTalks" // প্রোজেক্টের ইমেজ প্লেসহোল্ডার
    },
  ],

  testimonials: [
    {
      quote: "I thought it was impossible to make a website as beautiful as our product, but Yousuf proved me wrong.",
      author: "Sara Lee",
      title: "CTO of Acme Co",
      avatar: "https://placehold.co/80x80/2d3748/ffffff?text=SL" // অ্যাভাটার প্লেসহোল্ডার
    },
    {
      quote: "I've never met a web developer who truly cares about their clients' success like Yousuf does.",
      author: "Chris Brown",
      title: "COO of DEF Corp",
      avatar: "https://placehold.co/80x80/2d3748/ffffff?text=CB" // অ্যাভাটার প্লেসহোল্ডার
    },
    {
      quote: "After Yousuf optimized our website, our traffic increased by 50%. We can't thank them enough!",
      author: "Lisa Wang",
      title: "CTO of 456 Enterprises",
      avatar: "https://placehold.co/80x80/2d3748/ffffff?text=LW" // অ্যাভাটার প্লেসহোল্ডার
    },
  ],

  education: [
    {
      degree: "Master of Social Science (MSS) in Economics",
      session: "2020 – 2021",
      institution: "Govt. Azizul Haque College, Bogura (Affiliated with National University, Bangladesh)",
    },
  ],

  languages: [
    { name: "Bangla", proficiency: "Native" },
    { name: "English", proficiency: "Intermediate" },
  ],
};

// Navbar Component (নেভবার কম্পোনেন্ট)
const Navbar = () => {
  return (
    <nav className="fixed w-full bg-gray-900 bg-opacity-90 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-cyan-400 hover:text-purple-400 transition duration-300 rounded-md p-2">
          Yousuf Ali
        </a>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink> {/* Testimonials যোগ করা হয়েছে */}
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        {/* Mobile menu button (মোবাইল মেনু বাটন) - এই উদাহরণে ফাংশনালিটি যোগ করা হয়নি */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

// NavLink Component (নেভলিঙ্ক কম্পোনেন্ট)
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-cyan-400 transition duration-300 text-lg font-medium rounded-md px-3 py-2"
  >
    {children}
  </a>
);

// Section Wrapper (সেকশন র‍্যাপার)
const Section = ({ id, title, children }) => (
  <section id={id} className="py-20 px-4 min-h-screen flex items-center justify-center">
    <div className="container mx-auto max-w-4xl text-center">
      <h2 className="text-5xl font-extrabold text-white mb-12 relative inline-block">
        {title}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-cyan-500 rounded-full"></span>
      </h2>
      {children}
    </div>
  </section>
);

// Hero Section (হিরো সেকশন)
const Hero = () => {
  return (
    <Section id="home">
      <div className="flex flex-col items-center justify-center text-white">
        {/* প্রোফাইল ছবি (jaser-portfolio এর মতো একটি গোলাকার ছবি) */}
        <div className="w-40 h-40 rounded-full bg-gray-700 flex items-center justify-center mb-6 overflow-hidden border-4 border-cyan-500 shadow-lg">
          {/* আপনার প্রোফাইল ছবির URL এখানে দিন, অথবা Lucide User আইকন ব্যবহার করুন */}
          {/* <img src="https://placehold.co/160x160/2d3748/ffffff?text=Yousuf" alt="Md. Yousuf Ali" className="w-full h-full object-cover" /> */}
          <User className="w-24 h-24 text-gray-400" /> {/* যদি ছবি না থাকে, একটি ডিফল্ট আইকন */}
        </div>
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse">
          Hi, I'm {portfolioData.name.split(' ')[1]} {/* জেসারের মতো "Hi, I'm Jaser" */}
        </h1>
        <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
          I develop 3D visuals, user interfaces and web applications {/* জেসারের মতো স্লোগান */}
        </p>
        <div className="flex space-x-6 mb-10">
          <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-110">
            <Linkedin size={32} />
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-110">
            <Github size={32} />
          </a>
          {/* জেসারের মতো X (Twitter) আইকন যোগ করতে পারেন */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition duration-300 transform hover:scale-110">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.814L4.99 21.75H1.68l7.73-8.825L1.254 2.25H8.08l4.714 6.23L18.244 2.25zM17.292 19.45H15.06L7.723 4.25H9.953l7.339 15.2z"/></svg>
          </a> */}
        </div>
        <a
          href={portfolioData.resumeLink}
          download="Md_Yousuf_Ali_Resume.pdf"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <Download size={20} />
          <span>Download Resume</span> {/* জেসারের মতো "Download Resume" */}
        </a>
      </div>
    </Section>
  );
};

// About Section (অ্যাবাউট সেকশন)
const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="text-gray-300 text-lg leading-relaxed mb-8">
        <p className="mb-4">
          I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Next.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life! {/* জেসারের মতো টেক্সট */}
        </p>
        {/* জেসারের মতো 4টি কার্ড যোগ করা হয়েছে */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:scale-105 flex flex-col items-center">
            <img src="https://placehold.co/80x80/2d3748/ffffff?text=Web" alt="Web Developer" className="mb-4 rounded-full" />
            <h3 className="text-xl font-semibold text-cyan-400">Web Developer</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:scale-105 flex flex-col items-center">
            <img src="https://placehold.co/80x80/2d3748/ffffff?text=React" alt="React Native Developer" className="mb-4 rounded-full" />
            <h3 className="text-xl font-semibold text-cyan-400">React Native Developer</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:scale-105 flex flex-col items-center">
            <img src="https://placehold.co/80x80/2d3748/ffffff?text=Backend" alt="Backend Developer" className="mb-4 rounded-full" />
            <h3 className="text-xl font-semibold text-cyan-400">Backend Developer</h3>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:scale-105 flex flex-col items-center">
            <img src="https://placehold.co/80x80/2d3748/ffffff?text=Content" alt="Content Creator" className="mb-4 rounded-full" />
            <h3 className="text-xl font-semibold text-cyan-400">Content Creator</h3>
          </div>
        </div>
      </div>
    </Section>
  );
};

// Skills Section (স্কিলস সেকশন)
const Skills = () => {
  // জেসারের মতো আইকন গ্রিড
  const jaserSkillsIcons = [
    { name: "HTML5", icon: "https://placehold.co/60x60/2d3748/ffffff?text=HTML5" },
    { name: "CSS3", icon: "https://placehold.co/60x60/2d3748/ffffff?text=CSS3" },
    { name: "JavaScript", icon: "https://placehold.co/60x60/2d3748/ffffff?text=JS" },
    { name: "TypeScript", icon: "https://placehold.co/60x60/2d3748/ffffff?text=TS" },
    { name: "React", icon: "https://placehold.co/60x60/2d3748/ffffff?text=React" },
    { name: "Next.js", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Next" },
    { name: "Node.js", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Node" },
    { name: "MongoDB", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Mongo" },
    { name: "Tailwind CSS", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Tailwind" },
    { name: "Framer Motion", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Framer" },
    { name: "Git", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Git" },
    { name: "Docker", icon: "https://placehold.co/60x60/2d3748/ffffff?text=Docker" },
  ];

  return (
    <Section id="skills" title="My Skills">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mb-16">
        {jaserSkillsIcons.map((skill, index) => (
          <div key={index} className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700 shadow-lg hover:border-cyan-500 transition duration-300 transform hover:scale-110">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
          </div>
        ))}
      </div>
      {/* আপনার বিস্তারিত স্কিলস ডেটা */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {Object.entries(portfolioData.skills).map(([category, skills]) => (
          <div key={category} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-purple-500 transition duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-purple-400 mb-4 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <ul className="space-y-3">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 text-lg">
                  {skill.icon}
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Projects Section (প্রোজেক্টস সেকশন)
const Projects = () => {
  return (
    <Section id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* 3 কলাম লেআউট জেসারের মতো */}
        {portfolioData.projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col h-full hover:border-purple-500 transition duration-300 transform hover:scale-105">
            {/* প্রোজেক্ট ইমেজ (jaser-portfolio এর মতো) */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-md mb-6 border border-gray-700"
              />
            )}
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.name}</h3>
            <ul className="list-disc list-inside text-gray-300 text-base mb-6 flex-grow space-y-2">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-start space-x-4 mt-auto">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition duration-300 font-medium"
                >
                  <Globe size={20} />
                  <span>Live</span>
                </a>
              )}
              {project.clientLink && (
                <a
                  href={project.clientLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition duration-300 font-medium"
                >
                  <GitBranch size={20} />
                  <span>Client</span>
                </a>
              )}
              {project.serverLink && (
                <a
                  href={project.serverLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition duration-300 font-medium"
                >
                  <Server size={20} />
                  <span>Server</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Testimonials Section (টেস্টিমোনিয়ালস সেকশন)
const Testimonials = () => {
  return (
    <Section id="testimonials" title="What Others Say">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioData.testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center hover:border-cyan-500 transition duration-300 transform hover:scale-105">
            <Quote size={48} className="text-purple-400 mb-4" />
            <p className="text-gray-300 text-lg mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center mt-auto">
              <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4 border border-gray-600" />
              <div>
                <p className="font-semibold text-cyan-400">{testimonial.author}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

// Education Section (শিক্ষা সেকশন)
const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-left">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center space-x-3">
              <GraduationCap size={24} className="text-purple-400" />
              <span>{edu.degree}</span>
            </h3>
            <p className="text-gray-300 text-lg mb-1">{edu.institution}</p>
            <p className="text-gray-400 text-md">Session: {edu.session}</p>
          </div>
        ))}
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-cyan-400 mb-2 flex items-center space-x-3">
            <Briefcase size={24} className="text-purple-400" />
            <span>Languages</span>
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            {portfolioData.languages.map((lang, index) => (
              <li key={index}>{lang.name} - {lang.proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

// Contact Section (কন্টাক্ট সেকশন)
const Contact = () => {
  return (
    <Section id="contact" title="Contact Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"> {/* জেসারের মতো গ্রিд লেআউট */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 text-left">
          <p className="text-gray-300 text-lg mb-6">
            Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow appearance-none border border-gray-700 rounded-md w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700"
                placeholder="What's your good name?" // জেসারের মতো প্লেসহোল্ডার
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border border-gray-700 rounded-md w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700"
                placeholder="What's your web address?" // জেসারের মতো প্লেসহোল্ডার
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="shadow appearance-none border border-gray-700 rounded-md w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-700"
                placeholder="What you want to say?" // জেসারের মতো প্লেসহোল্ডার
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Send {/* জেসারের মতো শুধু "Send" */}
            </button>
          </form>
          {/* জেসারের 3D গ্লোবের জন্য প্লেসহোল্ডার ইমেজ */}
          <div className="hidden md:flex justify-center items-center h-full">
            <img
              src="https://placehold.co/300x300/20202a/ffffff?text=3D+Globe+Placeholder" // ডার্ক ব্যাকগ্রাউন্ডের সাথে মানানসই প্লেসহোল্ডার
              alt="3D Globe"
              className="w-full max-w-xs rounded-full shadow-lg border border-gray-700 animate-spin-slow" // হালকা অ্যানিমেশন যোগ করা হয়েছে
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

// Footer Component (ফুটার কম্পোনেন্ট)
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        &copy; {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
      </div>
    </footer>
  );
};

// Main App Component (প্রধান অ্যাপ কম্পোনেন্ট)
function App() {
  return (
    <div className="font-inter bg-gray-950 text-gray-100 min-h-screen">
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
          body {
            font-family: 'Inter', sans-serif;
          }
          /* Custom 3D-like background for the body, similar to Jaser's subtle patterns */
          body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              radial-gradient(circle at 10% 20%, rgba(6,182,212,0.08) 0%, transparent 30%),
              radial-gradient(circle at 90% 80%, rgba(168,85,247,0.08) 0%, transparent 30%),
              linear-gradient(to bottom right, rgba(20, 20, 30, 0.8), rgba(10, 10, 20, 0.8));
            z-index: -1;
          }
          /* Custom animation for the 3D globe placeholder */
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
        `}
      </style>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials /> {/* Testimonials সেকশন যোগ করা হয়েছে */}
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
