import imagesMy from "../src/assets/images/Snapseed.jpg"
import webApp from "../src/assets/images/webApp.png"
const logotext = "{Skorohod Taras}";

const meta = {
    title: "{Taras Skorohod}",
    description: "I'm {Taras Skorohod}, a technologist and cybersecurity enthuist.",
};

const introdata = {
    title: "Hi, I'm Taras Skorohod",
    animated: {
        first: "Developer",
        second: "Full Stack ",
        third: "JavaScript",
        fourth: "Java",
        fifth: "Java Spring",
        sixth: "Analyst",
    },
    description: "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
    your_img_url: imagesMy,
};

const dataabout = {
    title: "Who am I?",
    aboutme: " My specialty is the development of full-stack applications, where I use the most modern tools to achieve maximum product optimization and user comfort." +
        " During this time, working in different companies, I realized that my real goal is to work with my own clients and provide them with the highest level of service." +
        "For me, high-class service and quality product are the most important, so I can say with confidence that you can trust me with your future project.",
};
const worktimeline = [
    {
        jobtitle: "Example 1",
        where: "Freelance",
        date: "2022",
    },
    {
        jobtitle: "Example 2",
        where: "Outsource Self-Employed",
        date: "2023-2024",
    },

];

const skills = [{
        name: "Java",
    },

    {
        name: "JavaScript",
    },

    {
        name: "TypeScript",
    },

    {
        name: "Next.js",
    },

    {
        name: "React",
    },

    {
        name: "React Native",
    },

    {
        name: "Redux Toolkit",
    },

    {
        name: "Bootstrap",
    },

    {
        name: "Node.js",
    },
    {
        name: "RESTful API",
    },
    {
        name: "MySQL",
    },
    {
        name: "PostgreSQL",
    },
];

const dataportfolio = [{
        img: webApp,
        description: "Web application ",
        link: "https://auto-app-orpin.vercel.app/",
    },
];

// https://dashboard.emailjs.com/admin
//If you need a form, follow this link to create an account and set it up
const contactConfig = {
    YOUR_EMAIL: "skorohodit12@gmail.com",
    description: "Looking forward to hearing from you!",
    YOUR_SERVICE_ID: "service_i7l3p0z",
    YOUR_TEMPLATE_ID:"template_4tsd7hl",
    YOUR_USER_ID: "SFL2hvEdoXWdVbjy_",
};

const socialprofils = {
    github: "https://github.com/TarasSkorohod",
    linkedin: "https://www.linkedin.com/in/taras-skorohod-7a0219245/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
