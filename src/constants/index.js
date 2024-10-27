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
  starbucks,
  hpe,
  verzeo,
  gyandata,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  deepfake,
  foodrunner,
  covid19,
  instagram,
  facebook,
  linkedIn,
  twitter,
  github,
  spotify,
  cpp,
  java,
  python,
  aws,
  email,
  asu,
  abr,
  ecommerce,
  portfolio,
  game,
  lung,
  animal,
  hotel,
  owting,
  betterdirect

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "socials",
    title: "Socials",
  },
  {
    id: "resume",
    title: "Resume",
    resumeLink: "https://drive.google.com/file/d/1mwaN1DzgzRNfpmBQLsCywY2nE1PLTbaA/view?usp=sharing"
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native/Android Developer",
    icon: mobile,
  },
  {
    title: "Data Science/Machine Learning",
    icon: backend,
  },
  {
    title: "Game Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Cpp",
    icon: cpp,
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
  {
    name: "Python",
    icon: python,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Machine Learning Intern",
    company_name: "Verzeo, IIT Kharagpur E-cell, India",
    icon: verzeo,
    iconBg: "#383E56",
    date: "Jun 2020 - Aug 2020",
    points: [
      "Leveraged fundamental machine learning skills to develop a COVID-19 case predictor tool.",
      "Conceived and engineered a predictive model based on real-time data analysis from John Hopkins University and cutting-edge machine learning algorithms like Linear, Polynomial and Support Vector Regression Models accuracy ranging around 96.44%(PolyReg) – 97.38 % (SVR).",
      "Conducted extensive Exploratory Data Analysis (EDA) using Python to understand trends and intricacies of the data.",
      "Channeled comprehensive domain knowledge to develop a movie review predictor, tapping into sentiment analysis and natural language processing techniques. ",
    ],
    company_link: "https://learn.verzeo.in/"
  },
  {
    title: "Applied Deep Learning Intern",
    company_name: "Hewlett Packard Enterprises, Singapore",
    icon: hpe,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Sep 2021",
    points: [
      "Operated as a high-performing team member with four other members to lead, monitor, and execute a full-scale production project",
      "Played a vital role in the end-to-end development of a critical project through cloud deployment in Azure to classify animals and detect wild animal intrusion",
      "Utilized Flask API expertise to craft an intuitive user interface, ensuring easy and effective system interaction.",
      "Seamlessly orchestrated a Docker network to bolster a robust production environment, ensuring scalability and facilitating seamless integration through cloud deployment in Microsoft Azure.",
      "Advocated and utilized agile practices, utilizing project management software and Kanban boards to keep a tab on the project's trajectory and ensuring timely deliverables.",
    ],
    company_link: "https://www.hpe.com/sg/en/home.html"
  },
  {
    title: "Data Science/Machine Learning Intern",
    company_name: "GyanData Pvt. Ltd, Chennai, India",
    icon: gyandata,
    iconBg: "#383E56",
    date: "Aug 2021 - Feb 2022",
    points: [
      "Performed predictive maintenance across a key project encompassing the collection of data patterns for predicting machine failures by FFT analysis and developed a web Dashboard for simulation using panel library in python.",
      "Devised and developed an Image Classification system for retail items through AWS",
      "Utilized fast.ai to create 4 models namely ResNet34, VGG30, EfficientNet and IncepetionNet and compared differences in performance with peak accuracy at 95.5%.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    company_link: "https://gyandata.com/"
  },
  {
    title: "Graduate Service Assistant",
    company_name: "Arizona State University, USA",
    icon: asu,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - May 2024",
    points: [
      "Served in a key administrative role under the guidance of faculty supervisors, contributing to the academic success of students in designated courses.",
      "Assisted in the development and implementation of grading schemes for over 100 students, including the coordination of grading efforts and the resolution of routine grading inquiries.",
      "Enhanced student learning by providing targeted instructional support for 60 students and facilitating meaningful interactions.",
      "Executed additional responsibilities as delegated by faculty supervisors, including but not limited to, academic support and operational tasks for 1.5 years.",
      "Utilized Microsoft VB Scripts within Excel to streamline data management and automate routine tasks, improving operational efficiency.",
      "Developed and implemented solutions using Prolog, C++, and Racket to address specific academic and administrative challenges, demonstrating a strong proficiency in programming."
    ],
    company_link: "https://www.asu.edu/"
  },
  {
    title: "Web Application Developer",
    company_name: "Auto BIM Route AI",
    icon: abr,
    iconBg: "#000000",
    date: "Jan 2024 - May 2024",
    points: [
      "Designed comprehensive Figma wireframes for web app mockups, meticulously planning the user interface and user experience to ensure intuitive navigation and accessibility, resulting in a 25% reduction in user navigation time and increased user satisfaction.",
      "Transformed the legacy ABR AI Windows BIM software into a modern, web-based platform using Next.js, enhancing functionality and user accessibility.",
      "Witnessed to a 30% increase in user engagement among approximately 100 users by providing a more seamless and efficient user experience.",
      "Utilized advanced graphical rendering techniques with WebGL, Three.js, and React Three Fiber to parse JSON data containing over 10,000 coordinate entries.",
      "Conducted extensive user testing and gathered feedback to iterate on design improvements, ensuring the final product met user needs and expectations.",
      "Integrated real-time data updates to keep the 3D viewer information current, enhancing the accuracy and reliability of the visualized circuits.",
      "Optimized data handling and visualization by improving how materials were applied to each item, reducing response times by over 30 seconds (40% improvement).",
      "Employed Agile methodologies, including regular sprint reviews and retrospectives, to manage the project efficiently and ensure timely delivery of features.",
    ],
    company_link: "https://autobimroute.com/"
  },
  {
    title: "Full Stack Developer",
    company_name: "Owting",
    icon: owting,
    iconBg: "#6FC9E8",
    date: "Jun 2024 - Sep 2024",
    points: [
      "Developing a GCP Cloud Function using Python, triggering the Vision API for explicit image detection, automating the assessment and categorization of uploaded images with a 95% detection accuracy.",
      "Building an API with NestJs and Typescript that communicates with the Cloud Function, processes Vision API results, and returns the outcome to the user within 5s, significantly enhancing platform response time.",
      "Configuring Cloud Function to securely transfer non-explicit images to a dedicated bucket, ensuring 100% compliance with content safety regulations and seamless downstream processing.",
      "Implementing backend logic in NestJs to flag explicit images, with the data logged in BigQuery for future analysis and review, contributing to a 20% improvement in content monitoring efficiency."
    ],
    company_link: "https://owting.com/"
  },
  {
    title: "Software Developer",
    company_name: "Better Direct",
    icon: betterdirect,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Present",
    points: [
      "Leading the development of an in-house CRM platform to improve uptime, security, and control, while automating data integration from federal agencies and centralizing sales, opportunities, and account management.",
      "Implementing core sales lifecycle features, including quote generation, purchase orders, and invoices, along with opportunity forecasting and comprehensive reporting tools to empower the sales team with data-driven decisions.",
      "Enhancing system security using role-based access control (RBAC), multi-factor authentication, and document version control ensuring compliance with security standards and improving collaboration through real-time notifications and task tracking."
    ],
    company_link: "https://betterdirect.com/"
  }

];

const testimonials = [
  {
    testimonial:
      "We found Arshak to be committed, hard working and capable of independently completing tasks assigned to him.",
    name: "Arjun",
    designation: "Tech Lead",
    company: "GyanData Pvt. Ltd",
    link: "https://www.linkedin.com/in/arjunravichandran/"
  },
  {
    testimonial:
      "Arshak's performance in GAIP was found to be VERY GOOD.",
    name: "Clarence Lai Country",
    designation: "Manager",
    company: "Hewlett Packard Enterprises",
    link: "https://www.linkedin.com/in/clarence-lai-094080162"
  },
  {
    testimonial:
      "A consistent performer in my course, Arshak was keenly interested in the field of Big Data Analytics.",
    name: "Dr. S. Chitrakala",
    designation: "Professor",
    company: "Anna University",
    link: "https://www.linkedin.com/in/chitrakala-gopalan-77640747/",
  },
];

const projects = [
  {
    id: 1,
    name: "E-Commerce Website.",
    description: "Devised a Next.js React server components-powered e-commerce full stack website with Stripe for secure payment processing, efficient product exploration, and user-focused features, including a cart system and secure authentication.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/arshakshan/ecommerce",
  },
  {
    id: 2,
    name: "DeepFake Detection.",
    description:
      "Analyzed and classified input videos as DeepFake or Real by deploying a Two-Stream architecture of SRM and RGB streams in Python. Identified key features and interfaces responsible for the feature classification through Interpretable Deep Learning.",
    tags: [
      {
        name: "openCV",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "neuralNet",
        color: "pink-text-gradient",
      },
    ],
    image: deepfake,
    source_code_link: "https://github.com/arshakshan/Deepfake-Detection",
  },
  {
    id: 3,
    name: "Food Runner.",
    description:
      "Designed and launched a food ordering application utilizing Kotlin, allowing users to interact with their favorite food places, order/cancel food, and provide reviews. Thoroughly analyzed the contents from the server in JSON format.",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "android",
        color: "green-text-gradient",
      },
      {
        name: "roomDB",
        color: "pink-text-gradient",
      },
    ],
    image: foodrunner,
    source_code_link: "https://github.com/arshakshan/FoodRunner",
  },
  {
    id: 4,
    name: "Lung Cancer Detection & Segmentation.",
    description: "MATLAB implementation for lung cancer segmentation and classification using Swarm Intelligence techniques and Convolutional Neural Networks (CNN).",
    tags: [
      {
        name: "matlab",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "swarm",
        color: "pink-text-gradient",
      },
    ],
    image: lung,
    source_code_link: "https://github.com/arshakshan/Lung-Cancer-Segmentation"
  },
  {
    id: 5,
    name: "COVID-19 Case Predictor.",
    description:
      "Facilitated prediction of COVID-19 cases across the globe for 20 days by utilizing polynomial regression and support vector regression techniques. Performed extensive EDA of various countries using matplotlib and seaborn.",
    tags: [
      {
        name: "time-series",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "neuralNet",
        color: "pink-text-gradient",
      },
    ],
    image: covid19,
    source_code_link: "https://github.com/arshakshan/covid-19-case-prediction",
  },
  {
    id: 6,
    name: "Lights Out Game.",
    description: "Lights Out: Forgotten Room is a survival horror game that plunges players into a world of darkness and fear. Master the essence of light to navigate through a series of eerie environments, solve intricate puzzles, and survive the night.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "3D",
        color: "pink-text-gradient",
      },
    ],
    image: game,
    source_code_link: "https://github.com/arshakshan/Lights-Out-Game"
  },
  {
    id: 7,
    name: "Animal Intrusion Detection.",
    description: "Detect wildlife intrusions using machine learning models with multiple architectures such as AlexNet and VGGNet and developed a front-end interface using Flask API.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask API",
        color: "green-text-gradient",
      },
      {
        name: "CNN",
        color: "pink-text-gradient",
      },
    ],
    image: animal,
    source_code_link: "https://github.com/arshakshan/Animal-Detection"
  },
  {
    id: 8,
    name: "Hotel Reservation System.",
    description: "A hotel reservation system that allows users to book rooms, view room availability, and manage reservations. Developed using HTML, CSS, Javascript and MySQL.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/arshakshan/Baywatch-Hotel-Reservation"
  },
  {
    id: 9,
    name: "Portfolio Website.",
    description: "Developed a responsive portfolio website using Next.js, React, and Tailwind CSS, showcasing projects, skills, and contact information. Implemented a dark mode feature and optimized for performance.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/arshakshan/Portfolio",
  },
];

const socials = [
  {
    title: "Email",
    icon: email,
    link: "mailto:ashajaha@asu.edu"
  },
  {
    title: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/arshak_shan1",
  },
  {
    title: "LinkedIn",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/arshak-shan-shajahan/",
  },
  {
    title: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/arshak.shan1",
  },
  {
    title: "X",
    icon: twitter,
    link: "https://twitter.com/arshak_shan"
  },
  {
    title: "Github",
    icon: github,
    link: "https://github.com/arshakshan"
  }, {
    title: "Spotify",
    icon: spotify,
    link: "https://open.spotify.com/user/s0t5w0o5mjb6r6wdpog1k22k2"
  }
];

export { services, technologies, experiences, testimonials, projects, socials };