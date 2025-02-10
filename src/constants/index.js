import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  rnw,
  carrent,
  jobit,
  tripguide,
  live,
  swarrnim,
  threejs,
  wisume,
  hms,
  gamelo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN stack Development Course",
    company_name: "Red and White MultiMedia",
    icon: rnw,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "BCA (Bachelor Of Computer Applications)",
    company_name: "Swarrnim Startup & Innovation University",
    icon: swarrnim,
    iconBg: "#E6DEDD",
    date: "June 2023 - Running",
    points: [
      "Database management using SQL and NoSQL databases such as MySQL and MongoDB.",
      "Developing and maintaining web applications using HTML, CSS, JavaScript, and modern frameworks like React.js and Angular.",
      "Understanding data structures and algorithms for efficient problem-solving and coding practices.",
      "Cloud computing basics and working with platforms like AWS, Azure, and Google Cloud.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Swiftrut Technology",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SchedulX",
    description:
      " Our intuitive interface allows you to seamlessly design, preview, and schedule content across LinkedIn, Instagram, Facebook, and more—all in one place.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://schedulex-frontend-dot-nuxhealth-449518.el.r.appspot.com/",
    type: "Live",
  },
  {
    name: "Air bnb Clone",
    description:
      "Web-based platform that allows users to search, book, and manage Hotel rentals from various providers, providing a convenient and efficient solution for staying needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MehulGS/AirClone",
    type: "Github",
  },
  {
    name: "Vorranty",
    description:
      "All inclusive. Manage expenses, book travel, reimburse employees, create expense reports, and send invoices with OCR Feature which scan bills",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: tripguide,
    source_code_link: "https://voranty.vercel.app/",
    type: "Live",
  },
  {
    name: "Wisume",
    description:
      "Services include resume review and feedback, interview preparation tips, and career growth strategies.Count your ATS score here",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: wisume,
    source_code_link: "https://project-wisume.web.app/",
    type: "Live",
  },
  {
    name: "NUXHealth",
    description:
      "Hospital Management System this webapplication helps patient to book there appointment.Doctor can also see how many appointent they have.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: hms,
    source_code_link: "https://nuxhealth-frontend-dot-nuxhealth-449518.el.r.appspot.com/",
    type: "Live",
  },
  {
    name: "Gamelo",
    description:
      "Gamezop, Quizzop, Newszop, and Astrozop. Our products entertain over 45 million users around the world every month!.This platform helps user to play many games online",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    image: gamelo,
    source_code_link: "https://gamelo-frontend.vercel.app/",
    type: "Live",
  },
];

export { services, technologies, experiences, testimonials, projects };
