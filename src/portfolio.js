/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/hello.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "JKCG",
  title: "Hi all, I'm Jyothish",
  subTitle: [
    emoji(
      "A passionate AI Engineer 🤖 with expertise in developing innovative solutions using Python, PyTorch & Tensorflow, along with a deep understanding of libraries and frameworks."
    ),
    emoji(
      "Skilled in handling Computer Vision 📷, NLP 📝, LLM 🧠 projects, proficient in MLOps 🔧 and cloud technologies ☁️."
    )
  ],
  resumeLink:
    "https://drive.google.com/file/d/1RWj-WzH64BAY7WIY6atqdM_xz9KWPs56/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jkcg-learning",
  linkedin: "https://www.linkedin.com/in/jyothishchandrasenan/",
  gmail: "contact@jkcg.me",
  medium: "https://medium.com/@jyothish-tech",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY AI ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK RELATED TO AI",
  skills: [
    emoji("⚡ Analyze complex data & derive insights"),
    emoji("⚡ Clean & transform data"),
    emoji("⚡ Train, fine-tune, & optimize AI models"),
    emoji("⚡ Deploy AI models to cloud & edge"),
    emoji("⚡ Integrate AI into existing applications & services")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "EPITA - Paris, France",
      logo: require("./assets/images/Epita.png"),
      subHeader: "Master in Data Science",
      duration: "2019 - 2021"
    },
    {
      schoolName: "Mahatma Gandhi University - Kerala, India",
      logo: require("./assets/images/MGUniversity.png"),
      subHeader:
        "Bachelor of Technology in Electrical and Electronics Engineering",
      duration: "2009 - 2013"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "80%"
    },
    {
      Stack: "NLP / LLM",
      progressPercentage: "55%"
    },
    {
      Stack: "MLOps",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Deep Learning Engineer",
      company: "Ryte AI",
      companylogo: require("./assets/images/ryteLogo.png"),
      date: "09/2023 – 05/2024",
      desc: "Paris, France"
    },
    {
      role: "Deep Learning Engineer",
      company: "Automi AI",
      companylogo: require("./assets/images/automiLogo.png"),
      date: "09/2022 – 08/2023",
      desc: "Paris, France"
    },
    {
      role: "Research     Engineer",
      company: "MinesParisTech",
      companylogo: require("./assets/images/minesLogo.png"),
      date: "03/2022 – 08/2022",
      desc: "Paris, France"
    },
    {
      role: "Computer Vision - Intern",
      company: "TomTom",
      companylogo: require("./assets/images/tomtomLogo.png"),
      date: "05/2021 – 10/2021",
      desc: "Paris, France"
    },
    {
      role: "Analyst       ",
      company: "Verizon",
      companylogo: require("./assets/images/verizonLogo.png"),
      date: "06/2016 – 01/2019",
      desc: "Chennai, India"
    },
    {
      role: "Systems Engineer",
      company: "TCS",
      companylogo: require("./assets/images/tcsLogo.png"),
      date: "01/2014 – 05/2016",
      desc: "Chennai, India"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Langchain",
      subtitle: "Understanding of LLMs & RAG",
      image: require("./assets/images/LangchainLogo.png"),
      imageAlt: "Langchain",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.activeloop.ai/certificates/lurh0vg5km"
        }
      ]
    },

    {
      title: "Azure",
      subtitle: "Azure Fundamentals",
      image: require("./assets/images/AzureLogo.png"),
      imageAlt: "Azure",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/285eca7d-6a67-4a59-ae6d-156f767af169/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Talk 1",
      subtitle: "Cqsd",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+33-0000000000",
  email_address: "contact@jkcg.me"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
