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
    },
    {
      id: "socials",
      title: "Socials",
    },
    {
      id: "resume",
      title: "Resume",
      resumeLink: "https://drive.google.com/file/d/1Dv7vQ9DHA94dahfzFIJUfgNM38sidpno/view?usp=drive_link&export=download"
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
    },
    {
      title: "Data Science/Machine Learning Intern",
      company_name: "GyanData Pvt. Ltd, Chennai, India",
      icon: gyandata,
      iconBg: "#383E56",
      date: "August 2021 - February 2022",
      points: [
        "Performed predictive maintenance across a key project encompassing the collection of data patterns for predicting machine failures by FFT analysis and developed a web Dashboard for simulation using panel library in python.",
        "Devised and developed an Image Classification system for retail items through AWS",
        "Utilized fast.ai to create 4 models namely ResNet34, VGG30, EfficientNet and IncepetionNet and compared differences in performance with peak accuracy at 95.5%.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We found Arshak to be committed, hard working and capable of independently completing tasks assigned to him.",
      name: "Arjun",
      designation: "Tech Lead",
      company: "GyanData Pvt. Ltd",
      image: "https://media.licdn.com/dms/image/C5603AQEhijwPc5XvIg/profile-displayphoto-shrink_800_800/0/1659286933648?e=1707350400&v=beta&t=36Vy3RF5IlStp4dhTkrPdcxZJmT-gsm0plkNj64utK0",
    },
    {
      testimonial:
        "Arshak's performance in GAIP was found to be VERY GOOD.",
      name: "Clarence Lai Country",
      designation: "Manager",
      company: "Hewlett Packard Enterprises",
      image: "https://media.licdn.com/dms/image/D5603AQGvyJJ-2YMwLQ/profile-displayphoto-shrink_800_800/0/1698134640203?e=1707350400&v=beta&t=sULFzkAH65Gg7gescb-BEwGJ0huWV56gadgUauTCO40",
    },
    {
      testimonial:
        "A consistent performer in my course, Arshak was keenly interested in the field of Big Data Analytics.",
      name: "Dr. S. Chitrakala",
      designation: "Professor",
      company: "Anna University",
      image: "https://media.licdn.com/dms/image/C5603AQER_0JiZjjzIg/profile-displayphoto-shrink_800_800/0/1517455713056?e=1707350400&v=beta&t=IdnD-10awXLGtliKvZ886FB7EIL9ZKiipVyB2uQXcgs",
    },
  ];
  
  const projects = [
    {
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
      source_code_link: "https://github.com/arshakshan",
    },
    {
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
      source_code_link: "https://github.com/arshakshan",
    },
    {
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
    },{
      title: "Spotify",
      icon: spotify,
      link: "https://open.spotify.com/user/s0t5w0o5mjb6r6wdpog1k22k2"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects, socials };