import { CgBoy } from "react-icons/cg";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { IoLogoGithub, IoLogoWhatsapp, IoMdSettings } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { RiCodeSSlashLine } from "react-icons/ri";

export const title="Trilochan"
export const navItem = [
  { name: "About", link: "about", icon: <CgBoy /> },
  { name: "Skills", link: "skill", icon: <IoMdSettings /> },
  { name: "Experience", link: "experience", icon: <FaGraduationCap /> },
  { name: "Projects", link: "project", icon: <RiCodeSSlashLine /> },
  { name: "Certificates", link: "certificate", icon: <FaCertificate /> },
]

export const mernStack = [
  { name: "mongodb", link: "./Images/svg/mongodb.svg" },
  { name: "express", link: "./Images/svg/expressjs.svg" },
  { name: "react", link: "./Images/svg/react.svg" },
  { name: "react", link: "./Images/svg/node.svg" },
]

export const skills = [
  { 
    name: "javascript", 
    link: "./Images/svg/javascript.svg", 
    rating: 5,
    desc: [
      "Have 4 years of professional experience in web development.",
      "Developed in multiple work domains using JavaScript.",
      "Created numerous client projects using JavaScript and its frameworks.",
      "Consistently working to stay up-to-date and deepen understanding of the language.",
      "Expertise in asynchronous programming with Promises and async/await."
    ]
  },
  { 
    name: "TypeScript", 
    link: "./Images/svg/typescript.svg", 
    rating: 5, 
    desc: [
      "Proficient in using TypeScript to enhance JavaScript code with static types.",
      "Experienced in defining interfaces and types to improve code reliability and readability.",
      "Familiar with TypeScript features like generics and union types.",
      "Skilled in configuring TypeScript with various build tools and frameworks.",
      "Used TypeScript for building scalable and maintainable codebases in large projects."
    ]
  },
  { 
    name: "reactJS", 
    link: "./Images/svg/react.svg", 
    rating: 5, 
    desc: [
      "Extensive experience with React.js, including Hooks and Context API.",
      "Built scalable and maintainable single-page applications (SPAs).",
      "Proficient in state management using Redux and React Query.",
      "Skilled in optimizing React performance using memoization and code splitting.",
      "Experienced with React Router for managing navigation in complex applications."
    ]
  },
  { 
    name: "nextJS", 
    link: "./Images/svg/nextjs.svg", 
    rating: 4, 
    desc: [
      "Experienced in server-side rendering and static site generation using Next.js.",
      "Skilled in optimizing performance with Next.js features like Incremental Static Regeneration (ISR).",
      "Utilized API routes and built custom server logic in Next.js applications.",
      "Proficient in integrating Next.js with various backend services.",
      "Familiar with Next.js features like Image Optimization and Internationalized Routing."
    ]
  },
  { 
    name: "redux", 
    link: "./Images/svg/redux.svg", 
    rating: 4, 
    desc: [
      "Proficient in state management using Redux, including middleware like Thunk or Saga.",
      "Implemented complex state management solutions in large-scale applications.",
      "Familiar with Redux Toolkit for writing efficient and maintainable Redux logic.",
      "Skilled in debugging and optimizing Redux state flows.",
      "Experienced in integrating Redux with React components and managing asynchronous actions."
    ]
  },
  
  { 
    name: "nodeJs", 
    link: "./Images/svg/nodejs.svg", 
    rating: 4, 
    desc: [
      "Experienced in building scalable backend services and APIs using Node.js.",
      "Proficient in using Express.js for creating robust server-side applications.",
      "Skilled in integrating Node.js with databases like MongoDB and MySQL.",
      "Experienced in managing asynchronous operations and handling server-side logic.",
      "Familiar with deploying Node.js applications using various cloud services."
    ]
  },
  { 
    name: "expressJs", 
    link: "./Images/svg/express.svg", 
    rating: 4, 
    desc: [
      "Proficient in using Express.js to build RESTful APIs and web applications.",
      "Experienced in middleware development and routing with Express.js.",
      "Skilled in error handling and debugging in Express.js applications.",
      "Familiar with integrating Express.js with various authentication and authorization strategies.",
      "Experienced in optimizing Express.js performance and scalability."
    ]
  },
  { 
    name: "aws", 
    link: "./Images/svg/aws.svg", 
    rating: 3, 
    desc: [
      "Around 3 months experience with AWS services like S3, Cognito, DynamoDB and Lambda function.",
      "Familiar with deploying applications and managing infrastructure on AWS.",
      "Skilled in using AWS for scaling and monitoring applications.",
      "Experienced in setting up and managing AWS IAM roles and permissions.",
      "Knowledgeable in integrating AWS services with web applications."
    ]
  },
  { 
    name: "tailwind css", 
    link: "./Images/svg/tailwindcss.svg", 
    rating: 4, 
    desc: [
      "Experienced in creating custom designs using Tailwind CSS utilities.",
      "Skilled in building responsive and accessible user interfaces with Tailwind.",
      "Familiar with configuring and customizing Tailwind CSS themes.",
      "Proficient in optimizing Tailwind CSS for production environments.",
      "Integrated Tailwind CSS with various frontend frameworks and libraries."
    ]
  },
  { 
    name: "mongodb", 
    link: "./Images/svg/mongodb.svg", 
    rating: 4, 
    desc: [
      "Experience with MongoDB for building NoSQL databases.",
      "Skilled in performing CRUD operations and designing MongoDB schemas.",
      "Familiar with using Mongoose for data modeling and validation.",
      "Experienced in integrating MongoDB with Node.js applications.",
      "Knowledgeable in optimizing MongoDB performance and scalability."
    ]
  },
  { 
    name: "my sql", 
    link: "./Images/svg/mysql.svg", 
    rating: 4, 
    desc: [
      "Experienced in designing and managing relational databases using MySQL.",
      "Proficient in writing complex SQL queries and optimizing database performance.",
      "Skilled in integrating MySQL with server-side applications.",
      "Familiar with database normalization and schema design.",
      "Experienced in using MySQL for data migration and backup."
    ]
  },
  { 
    name: "graphql", 
    link: "./Images/svg/graphql.svg", 
    rating: 4, 
    desc: [
      "Experience with GraphQL for building flexible and efficient APIs.",
      "Familiar with writing and executing GraphQL queries and mutations.",
      "Skilled in integrating GraphQL with frontend frameworks like React.",
      "Experienced in setting up GraphQL servers using libraries like Apollo Server.",
      "Knowledgeable in optimizing GraphQL performance and schema design."
    ]
  },
  { 
    name: "React Native", 
    link: "./Images/svg/react.svg", 
    rating: 3, 
    desc: [
      "Experienced in building cross-platform mobile apps using React Native.",
      "Proficient in using React Native components, hooks, and state management with Redux.",
      "Familiar with React Navigation for handling screen transitions and deep linking.",
      "Hands-on experience integrating REST APIs and third-party libraries.",
      "Skilled in optimizing app performance and debugging using Flipper and React DevTools."
    ]
  },
  { 
    name: "python", 
    link: "./Images/svg/python.svg", 
    rating: 3, 
    desc: [
      "Basic experience with Python for scripting and automation tasks.",
      "Familiar with Python's standard libraries and common frameworks.",
      "Skilled in writing Python scripts for data manipulation and analysis.",
      "Experienced in integrating Python with web applications and APIs.",
      "Knowledgeable in using Python for building and managing data pipelines."
    ]
  },
  { 
    name: "Django", 
    link: "./Images/svg/django.svg", 
    rating: 3, 
    desc: [
      "Basic experience with Django for building web applications.",
      "Familiar with Django's MVC architecture and ORM.",
      "Skilled in creating and managing Django models, views, and templates.",
      "Experienced in integrating Django with various authentication systems.",
      "Knowledgeable in deploying Django applications to cloud platforms."
    ]
  },
  { 
    name: "git", 
    link: "./Images/svg/git.svg", 
    rating: 4, 
    desc: [
      "Proficient in using Git for version control and collaborative development.",
      "Experienced in managing repositories and branching strategies.",
      "Skilled in resolving merge conflicts and reviewing pull requests.",
      "Familiar with Git workflows like Gitflow and feature branching.",
      "Knowledgeable in integrating Git with CI/CD pipelines."
    ]
  },
  // { 
  //   name: "GoLang", 
  //   link: "./Images/svg/go.svg", 
  //   rating: 3, 
  //   desc: [
  //     "Basic experience with Go for building efficient and concurrent applications.",
  //     "Familiar with Go's standard library and its use in web development.",
  //     "Skilled in writing and managing Go routines for concurrent processing.",
  //     "Experienced in using Go for building and deploying microservices.",
  //     "Knowledgeable in Go's tooling and best practices for code quality."
  //   ]
  // },
    // { 
  //   name: "Html", 
  //   link: "./Images/svg/html.svg", 
  //   rating: 5,
  //   desc: [
  //     "Proficient in creating accessible and semantic HTML structures.",
  //     "Experienced in implementing responsive designs using HTML5.",
  //     "Strong understanding of HTML5 APIs and elements.",
  //     "Skilled in optimizing HTML for SEO best practices.",
  //     "Familiar with integrating HTML with various templating engines and CMS platforms."
  //   ]
  // },
  // { 
  //   name: "css", 
  //   link: "./Images/svg/css.svg", 
  //   rating: 5,
  //   desc: [
  //     "Skilled in crafting responsive layouts using CSS3 and Flexbox/Grid.",
  //     "Experienced in utilizing CSS preprocessors like SASS/LESS.",
  //     "Familiar with modern CSS features like custom properties and animations.",
  //     "Proficient in creating cross-browser compatible styles.",
  //     "Experienced in theming and styling complex user interfaces."
  //   ]
  // },
  // { 
  //   name: "docker", 
  //   link: "./Images/svg/docker.svg", 
  //   rating: 3, 
  //   desc: [
  //     "Basic experience with Docker for containerizing applications.",
  //     "Familiar with creating and managing Docker images and containers.",
  //     "Skilled in using Docker Compose for multi-container applications.",
  //     "Experienced in integrating Docker with development and deployment workflows.",
  //     "Knowledgeable in optimizing Docker images for performance and security."
  //   ]
  // },
  // { 
  //   name: "cypress", 
  //   link: "./Images/svg/cypress.svg", 
  //   rating: 4, 
  //   desc: [
  //     "Proficient in using Cypress for end-to-end testing of web applications.",
  //     "Experienced in writing and maintaining Cypress test cases.",
  //     "Skilled in setting up and configuring Cypress for various testing environments.",
  //     "Familiar with integrating Cypress with CI/CD pipelines for automated testing.",
  //     "Knowledgeable in debugging and troubleshooting Cypress tests."
  //   ]
  // },
  // { 
  //   name: "Laravel", 
  //   link: "./Images/svg/laravel.svg", 
  //   rating: 4, 
  //   desc: [
  //     "Proficient in using Laravel for building robust PHP web applications.",
  //     "Experienced in managing Laravel's MVC architecture and Eloquent ORM.",
  //     "Skilled in implementing authentication and authorization with Laravel.",
  //     "Familiar with Laravel's routing, middleware, and service containers.",
  //     "Knowledgeable in deploying and optimizing Laravel applications."
  //   ]
  // },
  // { 
  //   name: "elastic", 
  //   link: "./Images/svg/elasticsearch.svg", 
  //   rating: 3, 
  //   desc: [
  //     "Basic experience with Elasticsearch for search and analytics.",
  //     "Familiar with setting up and managing Elasticsearch clusters.",
  //     "Skilled in indexing and querying data with Elasticsearch.",
  //     "Experienced in integrating Elasticsearch with web applications.",
  //     "Knowledgeable in optimizing Elasticsearch performance and scalability."
  //   ]
  // },
  // { 
  //   name: "redis", 
  //   link: "./Images/svg/redis.svg", 
  //   rating: 3, 
  //   desc: [
  //     "Basic experience with Redis for in-memory data storage and caching.",
  //     "Familiar with Redis data structures and commands.",
  //     "Skilled in configuring and managing Redis instances.",
  //     "Experienced in integrating Redis with backend applications for caching and session management.",
  //     "Knowledgeable in optimizing Redis performance and persistence settings."
  //   ]
  // },
  // { 
  //   name: "Linux", 
  //   link: "./Images/svg/linux.svg", 
  //   rating: 3, 
  //   desc: [
  //     "Basic experience with Linux for server management and development tasks.",
  //     "Familiar with common Linux commands and shell scripting.",
  //     "Skilled in managing file systems, permissions, and processes in Linux.",
  //     "Experienced in using Linux for deploying and running applications.",
  //     "Knowledgeable in basic Linux system administration and troubleshooting."
  //   ]
  // }
];

export const socialIcon=[
  {name:"gmail", link:"mailto:trilochanbeherak@gmail.com", icon:<MdOutgoingMail/>, color:"text-orange-600", clr:"#FF5733"},
  {name:"linkedin", link:"https://www.linkedin.com/in/trilochanbehera/", icon:<GrLinkedinOption/>, color:"text-blue-700", clr:"#0a66c2"},
  {name:"github", link:"https://github.com/Trilochan-Behera", icon:<IoLogoGithub/>, color:"text-gray-900", clr:"#1b1e21"}
]

export const projects = [
  {
    title: "Fintrack",
    gitLink: "https://github.com/Trilochan-Behera/FinTrack",
    webLink: "https://fintracks.vercel.app/",
    tech: ["Next.js", "Express.js", "MongoDB"],
    image: "./Images/project/fintrack.png",
    desc: "Empower your financial journey with our intuitive finance tracking website. Seamlessly manage expenses, track income, and gain valuable insights into your financial health for a more secure and informed future.",
  },
  {
    title: "Portfolio",
    gitLink: "https://github.com/Trilochan-Behera/Portfolio",
    webLink: "https://trilochan-behera.vercel.app/",
    tech: ["React.js", "Taiwlind CSS", "Farmer motion"],
    image: "./Images/project/portfolio.png",
    desc: "Welcome to my personal portfolio website, where creativity meets functionality. Explore my diverse projects, delve into my skills and experiences, and discover how I bring innovation and passion to every endeavor.",
  },
  {
    title: "Self Serve Appiontment tool",
    gitLink: "",
    webLink: "",
    tech: ["React.js", "Laravel", "AWS"],
    image: "",
    desc: "A self-serve appointment tool is a digital solution that allows users to book, manage, and cancel appointments independently without the need for direct interaction with staff or customer service representatives.",
  },
  {
    title: "Fertility Management System",
    gitLink: "",
    webLink: "",
    tech: ["Next.js", "Laravel", "GraphQL"],
    image: "",
    desc: "A Cloud EMR project for a USA client where all the healthcare reports are manage and reviewed by practitioner. It also Store all the information about the clinics and their staff according to the locations.",
  },
  {
    title: "Public forum platform",
    gitLink: "",
    webLink: "",
    tech: ["Go Lang", "JavaScript", "My SQL"],
    image: "",
    desc: "A public forum platform where user can share their thoughts and comment in discussions. It also has feature to like, share and comment in the meaningful and useful contents.",
  },
  {
    title: "Sexual Ecommerce platform",
    gitLink: "",
    webLink: "",
    tech: ["Next Commerce", "Spree", "Postgress SQL"],
    image: "",
    desc: "A Ecommerce web applications where all the men, women and trans person health products are listed when user have to answer some questions about their health and as per the report the app suggests the product to purchase.",
  },
  {
    title: "TimeWise",
    gitLink: "https://github.com/Trilochan-Behera/Time-Wise",
    webLink: "https://timewise.vercel.app/",
    tech: ["React.js", "Express.js", "Tailwind CSS"],
    image: "./Images/project/calendar.jpg",
    desc: "This project aims to create a calendar design where users can create, update, and delete events seamlessly. The system will also enable users to set reminders and send notifications for upcoming events at chosen times.",
  },
  {
    title: "Book Slot Now",
    gitLink: "https://github.com/Trilochan-Behera/BookYourSlot",
    webLink: "",
    tech: ["React.js", "Express.js", "MongoDB"],
    image: "./Images/project/vaccine.jpg",
    desc: "The project aims to develop a slot booking portal that streamlines the process of scheduling appointments, eliminating the need for manual coordination and allowing users to book slots at their convenience.",
  },
  {
    title: "E-learning",
    gitLink: "https://github.com/Trilochan-Behera/E-Learning",
    webLink: "",
    tech: ["Python", "Django", "My SQL"],
    image: "./Images/project/elearning.jpg",
    desc: "This project aims to develop an eLearning course provider portal, a comprehensive online platform offering a variety of courses. The portal will provide a user-friendly interface for learners enroll in, and access courses.",
  },
  {
    title: "Alumni Feedback System",
    gitLink: "https://github.com/Trilochan-Behera/Alumni_feeback_system",
    webLink: "",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    image: "./Images/project/alumni.jpg",
    desc: "This project aims to gather comprehensive feedback from alumni and using this information the institution will able to identify the areas for improvement and make enhancements to better support current and future students.",
  },
];

export const certificates = [
  { name: "Frontend Developer", link: "./Images/certificate/react_dev_hackerrank.png" },
  { name: "JavaScript", link: "./Images/certificate/js_hackerrank.png" },
  { name: "JavaScript", link: "./Images/certificate/js_udemy.png" },
  { name: "JavaScript", link: "./Images/certificate/javaScript.jpg" },
  // { name: "React Js", link: "./Images/certificate/react_hackerrank.png" },
  { name: "React Js", link: "./Images/certificate/react.jpg" },
  { name: "Node Js", link: "./Images/certificate/node.png" },
  { name: "Python", link: "./Images/certificate/python.jpg" },
  { name: "MySQL", link: "./Images/certificate/mySql.jpg" },
  { name: "Google", link: "./Images/certificate/google.png" },
  { name: "Microsoft", link: "./Images/certificate/microsoft.jpg" },
  { name: "Intel", link: "./Images/certificate/intel.png" },
  { name: "IBM", link: "./Images/certificate/ibm.png" },
]

export const calculateExperience = (startDate) => {
  // Ensure startDate is in a valid format, e.g., 'YYYY-MM-DD'
  const start = new Date(startDate);

  // Check if the startDate is valid
  if (isNaN(start.getTime())) {
    return "3.5 yr";  // Default experience if the date is invalid
  }

  const today = new Date();

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  // If days are 10 or more, add one month to the month count
  if (days >= 10) {
    months += 1;
  }

  // If months exceed 12, convert to years
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  // Format the output to show years, months, and round appropriately
  const totalExperience = years + (months / 12) + (days / 365);
  return `${totalExperience.toFixed(1)} yrs`;
}


export const about = [
  {
    name: "Experience",
    number: calculateExperience('2021-11-08'),
    icon:<FaGraduationCap />,
  },
  {
    name: "Skills",
    number: skills?.length,
    icon:<IoMdSettings/>,
  },
  {
    name: "Projects",
    number: projects?.length,
    icon: <RiCodeSSlashLine/>,
  },
  {
    name: "Certificates",
    number: projects?.length,
    icon: <FaCertificate />,
  },
]

export const slideImages = [
  "Images/certificate/microsoft.jpg",
  "Images/certificate/intel.png",
  "Images/certificate/ibm.png",
  "Images/certificate/google.png",
  "Images/certificate/python.jpg",
  "Images/certificate/mySql.jpg"
];