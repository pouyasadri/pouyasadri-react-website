/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title:
    "Freelancer,Full Stack Developer,Software & Mobile App Developer & SEO Expert|PouyaSadri",
  description:
    "Are you ready to skyrocket your business to new heights of success? Look no further!As a professional web developer, full stack developer, mobile developer and SEO expert, I offer custom software solutions, optimized websites and SEO strategies to take your business to new heights of success.. My expertise in SEO guarantees your business will soar above the competition. Imagine achieving business greatness with ease, let's make it a reality.",
  og: {
    title:
      "Freelancer,Full Stack Developer,Software & Mobile App Developer & SEO Expert|PouyaSadri",
    type: "website",
    url: "https://www.pouyasadri.com/",
    image: "https://www.pouyasadri.com/icons/android-chrome-512x512.png",
    description:
      "Professional web developer, full stack developer, mobile developer and SEO expert based in Strasbourg, France. Custom software solutions, optimized websites and SEO strategies to take your business to new heights.",
    siteName: "Pouya Sadri - Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pouyasadri",
    creator: "@pouyasadri",
    title:
      "Freelancer,Full Stack Developer,Software & Mobile App Developer & SEO Expert|PouyaSadri",
    description:
      "Professional web developer, full stack developer, mobile developer and SEO expert based in Strasbourg, France.",
    image: "https://www.pouyasadri.com/icons/android-chrome-512x512.png",
    imageAlt: "Pouya Sadri - Full Stack Developer Portfolio",
  },
};

//Home Page
const greeting = {
  title: "Elevate Your Online Presence",
  logo_name: "Pouya Sadri",
  nickname: "Pouya Sadri",
  subTitle:
    "Boost your business with expert web and mobile solutions. I specialize in creating powerful websites, mobile apps, and SEO strategies to help your brand stand out. Ready to achieve digital excellence?",
  resumeLink: "",
  portfolio_repository: "https://github.com/pouyasadri",
  githubProfile: "https://github.com/pouyasadri",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    id: "1s",
    name: "Github",
    link: "https://github.com/pouyasadri",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    id: "3s",
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCrfihekLrBk9k1cdQjgXGnQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=instagram
  },
  {
    id: "4s",
    name: "Instagram",
    link: "https://instagram.com/pouyasadri_dev",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#f09433", // Reference https://simpleicons.org/?q=instagram
  },

  {
    id: "5s",
    name: "What'sApp",
    link: "https://wa.me/+33744140840",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#25D366", // Reference https://simpleicons.org/?q=instagram
  },
  {
    id: "2s",
    name: "Email",
    link: "mailto:info@pouyasadri.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];
const aboutMePageData = {
  sections: [
    {
      id: "1A",
      title: "Introduction",
      description:
        "Welcome to my professional sphere! I am Seyedpouya SadriFard, a passionate Full Stack Web Developer with a rich background in software engineering and web development. Currently pursuing my computer science studies at the University of Strasbourg, I bring over three years of hands-on experience in crafting dynamic, user-friendly web solutions.",
    },
    {
      id: "2A",
      title: "My Journey",
      description:
        "Starting my career in the bustling tech landscape of Mashhad, Iran, I have had the opportunity to work across diverse roles—from a Software Engineer at Edalat.co, where I significantly improved production and efficiency through bespoke software solutions, to a pivotal role in modernizing IT infrastructure at Dr. Sadrifard Pharmaceutical Company, enhancing operational efficiency by 20%. My freelance endeavors across platforms like Freelancer.com, Upwork, and Fiverr have further broadened my expertise, allowing me to tackle unique challenges and deliver exceptional outcomes for a global clientele.",
    },
    {
      id: "3A",
      title: "Expertise and Skills",
      description:
        "My technical toolkit is extensive, encompassing languages and frameworks such as PHP, Laravel, MySQL, JavaScript, HTML & CSS, React.js, and Vue.js, among others. I am also proficient in cloud services like AWS, ensuring scalable and robust web applications. My commitment to continuous learning has led me to acquire certifications in web development, cloud computing, and front-end development, keeping me at the forefront of the latest technological advancements.",
    },
    {
      id: "4A",
      title: "Languages and Personal Interests",
      description:
        "Fluency in English, Persian, French, and basic Spanish allows me to engage with clients and communities worldwide. Outside of coding, my life vibrates to the rhythms of music and the challenges of video games, reflecting my multifaceted personality and creative spirit.",
    },
    {
      id: "5A",
      title: "Get in Touch",
      description:
        "Embark on a journey with me as we explore the possibilities of transforming your digital visions into reality. Visit www.pouyasadri.com to learn more about my projects, or connect with me on LinkedIn and GitHub for a deeper dive into my professional world.",
    },
  ],
};
const skills = {
  data: [
    {
      id: "1S",
      title: "Search Engine Optimization (SEO)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Struggling to get noticed online? As a freelance SEO expert, I help businesses like yours skyrocket traffic & sales with powerful strategies & data-driven results. Contact me today for a free consultation and let's dominate your competition!",
        "⚡ Frustrated by low website traffic? I'm a freelance SEO specialist who turns invisible websites into traffic magnets. Using cutting-edge tools & proven methods, I unlock your website's potential and bring you more leads & sales. Get a free consultation and see the difference!",
        "⚡ Dominate your online space! I'm a freelance SEO expert who helps businesses like yours achieve exceptional results through targeted strategies & data-driven insights. Get more traffic, leads, & sales with my personalized SEO approach. Schedule your free consultation today!",
      ],
      softwareSkills: [
        {
          id: "2",
          skillName: "Google Analytics",
          fontAwesomeClassname: "logos:google-analytics",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          id: "3",
          skillName: "Google Search Console",
          fontAwesomeClassname: "logos:google-search-console",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          id: "4",
          skillName: "Bing Webmaster Tools",
          fontAwesomeClassname: "logos:bing",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          id: "5",
          skillName: "Google Ads",
          fontAwesomeClassname: "logos:google-ads",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      id: "2S",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build stunning & powerful websites from scratch. As a freelance full-stack developer, I design captivating front-ends and secure back-ends for unbeatable user experiences and top search rankings. Let's create something magical!",
        "⚡ Craft websites that cast a spell! I'm a freelance full-stack developer who builds beautiful, responsive interfaces and smooth-running systems. My magic touch improves SEO and sets your business apart. Contact me to unlock your digital potential!",
        "⚡ Go beyond website design! I'm a freelance full-stack developer who builds more than websites, I build success. Expect exceptional front-end design, secure back-end functionality, and SEO expertise all in one. Let's make something amazing together!",
      ],
      softwareSkills: [
        {
          id: "6",
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          id: "7",
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          id: "8",
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        {
          id: "9",
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
        },
        {
          id: "10",
          skillName: "Tailwindcss",
          fontAwesomeClassname: "logos:tailwindcss-icon",
        },
        {
          id: "11",
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          id: "12",
          skillName: "Vue.js",
          fontAwesomeClassname: "logos:vue",
          style: {
            color: "#61DAFB",
          },
        },

        {
          id: "13",
          skillName: "PHP",
          fontAwesomeClassname: "vscode-icons:file-type-php2",
        },
        {
          id: "14",
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
        },
        {
          id: "15",
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#CB3837",
          },
        },
        {
          id: "16",
          skillName: "GoLang",
          fontAwesomeClassname: "fa6-brands:golang",
          style: {
            color: "#2C8EBB",
          },
        },

        {
          id: "17",
          skillName: "Git",
          fontAwesomeClassname: "mdi:git",
          style: {
            color: "#F1502F",
          },
        },
        {
          id: "18",
          skillName: "GraphQL",
          fontAwesomeClassname: "logos:graphql",
        },
        {
          id: "19",
          skillName: "RESTful API",
          fontAwesomeClassname: "tabler:api",
        },
      ],
    },
    {
      id: "3S",
      title: "Mobile App development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Unlock your business potential with a mobile app! As a freelance app developer, I build powerful apps that improve SEO, reach more users, and engage them on a deeper level. Let's unlock your digital future together!",
        "⚡ Go beyond websites: build a mobile app! I'm a freelance app developer who specializes in Flutter, Swift, and SwiftUI. I create cross-platform and native apps that are beautiful, functional, and reach the widest audience. Let's build something amazing!",
        "⚡ Turn your app idea into reality! I'm a freelance app developer with the skills to design, develop, and launch your app. I use cutting-edge technologies to build secure, efficient, and high-performing apps that get results. Let's innovate and excel together!",
      ],
      softwareSkills: [
        {
          id: "20",
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          id: "20",
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          id: "21",
          skillName: "Google Play Store",
          fontAwesomeClassname: "logos:google-play-icon",
          style: {
            color: "#0089D6",
          },
        },
        {
          id: "22",
          skillName: "Swift",
          fontAwesomeClassname: "logos:swift",
        },

        {
          id: "23",
          skillName: "App Store",
          fontAwesomeClassname: "simple-icons:appstore",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      id: "4S",
      title: "Maintenance & Support",
      fileName: "DesignImg",
      skills: [
        "⚡ Websites & apps need care! As your freelance maintenance expert, I keep your projects bug-free, secure, and performing at their best. Let your digital garden bloom with my help!",
        "⚡ Peace of mind for your projects! I offer exceptional maintenance & 24/7 support. Keep your website & apps running smoothly and stay ahead with my expert services. Contact me today!",
        "⚡ Success is a journey, not a destination! I'm your ongoing partner for thriving projects. My expert maintenance & top-notch support ensure your digital garden keeps growing and achieving new heights. Let's collaborate!",
      ],
      softwareSkills: [
        {
          id: "24",
          skillName: "Nginx",
          fontAwesomeClassname: "vscode-icons:file-type-nginx",
        },
        {
          id: "25",
          skillName: "Apache",
          fontAwesomeClassname: "logos:apache",
        },
        {
          id: "26",
          skillName: "Cpanel",
          fontAwesomeClassname: "logos:cpanel",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Coursera",
      iconifyClassname: "logos:coursera",
      profileLink: "https://www.coursera.com",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/pouyasadri",
    },
  ],
};
const servicesPageData = {
  services: [
    {
      title: "Full Stack Web Development",
      subtitle:
        "Embark on a journey with me where every line of code weaves together functionality and aesthetics, creating digital spaces where your business isn't just seen—it's felt. Together, we'll bring your vision to life with web solutions that resonate deeply with your audience, crafting a place where they truly belong.",
      imageUrl: "webdev.webp",
      altName: "Full Stack Web Development | Freelancer | Pouya Sadri",
    },
    {
      title: "E-commerce Solutions",
      subtitle:
        "Imagine an online store that does more than sell—it connects. With custom e-commerce solutions, we create shopping experiences that turn first-time visitors into loyal customers, fostering a sense of community and belonging with every purchase.",
      imageUrl: "ecommercedev.webp",
      altName: "E-commerce Solutions | Freelancer | Pouya Sadri",
    },
    {
      title: "Custom CRM Systems",
      subtitle:
        "In the heart of every business are the relationships it nurtures. Our tailored CRM systems are the bridges between you and your customers, designed to strengthen these connections, making every interaction feel personal and valued.",
      imageUrl: "crm.webp",
      altName: "Custom CRM Systems | Freelancer | Pouya Sadri",
    },
    {
      title: "Cloud Computing Services",
      subtitle:
        "Step into a future where your digital dreams are boundless. Our cloud computing services offer scalable, secure environments for your web applications, ensuring they soar high and reach far, bringing your business closer to where it belongs—in the hearts and minds of your audience.",
      imageUrl: "cloud.webp",
      altName: "Cloud Computing Services | Freelancer | Pouya Sadri",
    },
    {
      title: "Mobile App Development",
      subtitle:
        "Your digital presence is more than a website—it's a handshake, a greeting, and a smile that fits right into the pocket of your audience. With custom mobile app development, we create apps that not only function seamlessly across devices but also foster a sense of belonging, making every tap and swipe a step closer to you.",
      imageUrl: "mobiledev.webp",
      altName: "Mobile App Development | Freelancer | Pouya Sadri",
    },
    {
      title: "SEO Optimization",
      subtitle:
        "Be discovered where it matters most. Our SEO optimization strategies ensure your digital home stands out in the crowded online neighborhood, making it easy for your audience to find their way back to you, time and time again.",
      imageUrl: "seo.webp",
      altName: "SEO & Digital Marketing | Freelancer | Pouya Sadri",
    },
    {
      title: "Maintenance & Support",
      subtitle:
        "Ensuring Continuous Excellence in Your Digital Journey. I offer comprehensive maintenance and support services to keep your web and mobile applications updated, secure, and performing optimally. My focus on reliability, security, and continuous improvement offers you peace of mind and ensures that your digital assets remain in good hands.",
      imageUrl: "support.webp",
      altName: "Maintenance & Support | Freelancer | Pouya Sadri",
    },
  ],
};
const degrees = {
  degrees: [],
};

const certifications = {
  certifications: [
    {
      id: "1C",
      title: "Introduction to Cloud Computing",
      subtitle: "- IBM Skills Network",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/DD85MJZ8XQ26",
      alt_name: "Introduction to Cloud Computing IBM Skills Network",
      color_code: "#1F70C199",
    },
    {
      id: "2C",
      title: "Foundations of User Experience (UX) Design",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ECUL65NF36QH",
      alt_name: "Foundations of User Experience (UX) Design Google",
      color_code: "#00000099",
    },
    {
      id: "3C",
      title: "Foundations: Data, Data, Everywhere",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/CW5TXDPSU8MU",
      alt_name: "Foundations: Data, Data, Everywhere Google",
      color_code: "#0C9D5899",
    },
    {
      id: "4C",
      title: "Decentralized Finance (DeFi) Infrastructure",
      subtitle: "- Duke University",
      logo_path: "Duke_University_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KYPJKKNJVN58",
      alt_name: "Decentralized Finance (DeFi) Infrastructure Duke University",
      color_code: "#4285F499",
    },
    {
      id: "5C",
      title: "Introduction to Front-End Development",
      subtitle: "- Meta",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H2VYNQB5ANBL",
      alt_name: "Introduction to Front-End Development Meta",
      color_code: "#00000099",
    },
  ],
};
const FaqPageData = {
  title: "Frequently Asked Questions",
  subtitle:
    "Find answers to common queries about custom software solutions, project timelines, and pricing. Dive into our FAQ section to learn how we can elevate your digital presence.",

  faqData: [
    {
      id: "1F",
      question: "1. What are the services you offer?",
      answer:
        "I specialize in full-stack web development, mobile app development, and SEO optimization. My services include creating custom websites, developing mobile applications for both Android and iOS, and implementing SEO strategies to enhance your online presence.",
    },
    {
      id: "2F",
      question: "2. How do you charge for your services?",
      answer:
        "Pricing is project-based, considering the scope, complexity, and timeline. I offer a free initial consultation to understand your needs and provide a detailed quote. Contact me to discuss your project and get a personalized estimate.",
    },
    {
      id: "3F",
      question: "3. How long does it take to complete a project?",
      answer:
        "Project timelines vary based on the project's complexity and requirements. A standard web development project can take anywhere from 4 to 12 weeks, while mobile app development might range from 3 to 6 months. I prioritize clear communication and deadlines to ensure your project is delivered on time.",
    },
    {
      id: "4F",
      question: "4. Can you handle projects for clients outside of France?",
      answer:
        "Yes, I work with clients globally, offering my services to both local customers in France and international clients. My experience and proficiency in English, French, and other languages facilitate seamless communication across different regions.",
    },
    {
      id: "5F",
      question: "5. What makes your services unique?",
      answer:
        "With over 6 years of experience in full-stack development and a strong background in SEO, I offer comprehensive digital solutions tailored to your business needs. My approach combines technical expertise with creative strategies to enhance your digital footprint and drive success.",
    },
    {
      id: "6F",
      question: "6. Do you offer ongoing support and maintenance?",
      answer:
        "Yes, I provide ongoing support and maintenance services to ensure your website and mobile app perform optimally. This includes regular updates, security checks, and any necessary enhancements to improve functionality and user experience.",
    },
    {
      id: "7F",
      question: "7. How can we start a project together?",
      answer:
        "To initiate a project, simply contact me through my website's contact form or via email. We'll schedule a consultation to discuss your project in detail, define your goals, and outline the next steps.",
    },
  ],
};
// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Freelance Experience",
  description:
    "With a passion for crafting impactful solutions, I leverage my skills as a junior developer, designer, and software architect to help startups and companies worldwide achieve their goals. I'm always eager to take on new challenges to expand my expertise. As a skilled freelancer, I bring dedication, flexibility, and a love for innovation to every project.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Job Experiences",
      experiences: [
        {
          id: "1E",
          title: "Junior Software engineer",
          company: "Edalat",
          company_url: "",
          logo_path: "edalat_logo.jpg",
          duration: "2014 - 2015",
          location: "Mashhad, Iran",
          description:
            "As a software engineer at Edalat, a company with numerous factories, I worked on a team of 6 developers to create a CRM using the .NET framework to manage and streamline the work of factory employees.",
          color: "#0879bf",
        },
        {
          id: "2E",
          title: "Start to work as a Freelancer",
          company: "Independent Freelancer",
          company_url: "Freelancer.com",
          logo_path: "freelance_logo.webp",
          duration: "2015 - 2016",
          location: "Any Where around the World",
          description:
            "Experience the challenges and rewards of freelancing as a .NET developer, with over 15 completed projects in desktop application development.",
          color: "#9b1578",
        },
        {
          id: "3E",
          title: "IT Sepecialist",
          company: "dr.sadrifard Pharmaceutical company",
          company_url: "",
          logo_path: "freecopy_logo.png",
          duration: "2016 - 2019",
          location: "Mashhad, Iran",
          description:
            "As CTO of Dr.Sadrifard pharmaceutical company, I led the tech team in developing a comprehensive web-based application featuring an e-commerce system, CRM, and financial tools to streamline the company's operations.",
          color: "#fc1f20",
        },
        {
          id: "4E",
          title: "Freelancer",
          company: "Freelance Professional",
          company_url: "pouyasadri.com",
          logo_path: "freelance_logo.webp",
          duration: "2019 - 2023",
          location: "Any Where around the World",
          description:
            "As a full stack web developer with over 25 completed projects, I continue my freelance journey providing top-quality development services.",
          color: "#fc1f20",
        },
        {
          id: "4E",
          title: "Co-Founder & CTO",
          company: "ReboTurn",
          company_url: "https://reboturn.com",
          logo_path: "reboturn.webp",
          duration: "2023 - Now",
          location: "Any Where around the World",
          description:
            "As a full stack web developer with over 25 completed projects, I continue my freelance journey providing top-quality development services.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I build powerful web and mobile apps (Android & iOS) that bring your ideas to life. I use the latest technology tools to craft beautiful user interfaces and robust backends, ensuring a seamless experience across all devices. Whether you need a simple app or a complex solution, I have the skills and expertise to deliver exceptional results.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pouyasadri_image.png",
    description:
      "Connect with me on various social media platforms for quick replies and to learn about my services including website, app, and software development with 24/7 maintenance and support, SEO, full stack development for both front and back end, and native and hybrid Android and iOS apps.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "Stay up-to-date with new technologies and enhance your skills with my weekly blog featuring tutorials for beginners and professionals. Discover my wide range of services by following my blog and getting in touch.",
    link: "https://blog.pouyasadri.com",
    avatar_image_path: "blogs_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  aboutMePageData,
  servicesPageData,
  FaqPageData,
};
