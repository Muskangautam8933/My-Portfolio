/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Muskan Gautam",
  title: "Hi all, I'm Muskan Gautam",
  subTitle: emoji(
    "A passionate Full Stack Software Developer🚀 "
  ),
  resumeLink:
    "https://drive.google.com/file/d/18-hwIKtWPk_x4Q-bOX15wcg10QLpAws_/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Muskangautam8933",
  linkedin: "https://www.linkedin.com/in/muskan893/",
  gmail: "muskangautam7064@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front end / User Interfaces for your web  applications"
    ),
    emoji("⚡ Designing, developing, webpages for improved site performance and increased customer retention."),
    
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
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      name: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Allenhouse Institute Of Technology",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2022 - April 2026",
    },
    {
      schoolName: "Subhash Smarak Inter College",
      logo: require("./assets/images/images.jpeg"),
      subHeader: "Science",
      duration: "September 2020 - 2022",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "React js Intern",
      company: "Celebal Technology",
      companylogo: require("./assets/images/ct-logo.webp"),
      date: "2-Jun-2025 to 2-Aug-2025",
      desc: "Developed and implemented React components and features according to provided translations and requirements ",
      descBullets: [
       "Actively resolved bug and regression issues in the file transfer module, improving the reliability and responsiveness of the Angular front-end.",
        " Actively participated in code reviews, ensuring adherence to coding standards and best practices."
      ]
    },
    {
      role: "Trainee",
      company: "Infosys Sprinboard",
      companylogo: require("./assets/images/springboard-logo.avif"),
      date: "May-2025 – August 2025",
      desc: "Completed foundational Data Science training under Infosys's Pragati Path to Future – Cohort 5, covering key concepts like data analysis, Python, and machine learning basics.",
      descBullets: [  
        "Contributed to continuous improvement and deployment processes, ensuring smooth project execution and effective team communication."
      ]
    },
   
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false// Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Som Websites That I have develop ",
  projects: [
    {
      image: require("./assets/images/file.png"),
      projectName: "File Sharing Application",
      projectDesc: "Develop a website in which you can share your files from one device to another",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://file-sharing-app-celebal.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dashboard.png"),
      projectName: "Admin Dashboard",
      projectDesc: "Developed a Admin Dashboard.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://react-dashborad-celebal.vercel.app/ecommerce"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Developer Associate",
      subtitle:
        "AWS Certified Developer Associate ",
      image: require("./assets/images/AWS.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b9baaaa8-68ae-4175-96bc-171c534e968b/public_url"
        }
       
      ]
    },
    {
      title: "Google Cloud Platform",
      subtitle:
        "Google Cloud Certified Associate Cloud Engineer",
      image: require("./assets/images/google.png"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://google.accredible.com/e85e1d67-3757-48ba-bfc6-30e6e8eaae37"
        }
       
      ]
    },
    {
      title: "Microsoft Certified:AI900",
      subtitle:
        "Microsoft Certified: Azure AI Fundamentals includes Gen AI.",
      image: require("./assets/images/badge.png"),
      imageAlt: "Azure AI Fundamentals Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/DixitVaishnavi-0727/A1EA681E35C63097?sharingId=71E1DEE95FE3DDFA"
        }
      ]
    },

    {
      title: "Udemy Web Dev course",
      subtitle: "Build Responsive Real-World Websites with HTML and CSS",
      image: require("./assets/images/U.png"),
      imageAlt: "udemy Logo",
      footerLink: [
        {name: "Certification", url: "https://www.udemy.com/certificate/UC-b3debe34-1883-4fdc-aabc-3b1dff54d6b8/"}
        
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://shivi765201.medium.com/unleash-your-creativity-the-most-important-skill-to-learn-in-2024-generative-ai-7e0a7655ff8b",
      title: "Unleash Your Creativity: The Most Important Skill to Learn in 2024 – Generative AI",
      description:
        "In this blog post, we’ll explore why Generative AI is the must-have skill of the year, its incredible benefits, and guess what? I’ve got an exciting announcement for you at the end!"
    },
    {
      url: "https://shivi765201.medium.com/react-v-s-angular-which-way-%EF%B8%8F-to-go-27cc4060336b",
      title: "REACT V/s ANGULAR WHICH WAY🛣️ TO GO ?",
      description:
        "In this blog post, we’ll compare React and Angular from the perspective of beginners to help you make an informed decision."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Code to Career Placement Talks",
      subtitle: "Please find attached PDF about my Web Dev session",
      slides_url: "https://drive.google.com/file/d/1kfAebmT8I8Xv_I-N2iJ5VWAkfCPAnv2o/view?usp=sharing",
      event_url: "https://www.linkedin.com/posts/oscode-x-kcc_webandaiconnect-oscodeabrkcc-techagenda-activity-7275358631984803842-HZZA?utm_source=share&utm_medium=member_desktop"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://open.spotify.com/embed/episode/2UGxOPBSHtLEBCRoufAo7Y?utm_source=generator"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Reach Out To Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  
     //number: "+91-7652018226",
    email_address: "muskangautam7064@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "VaishnaviD64822", //Replace "twitter" with your twitter username without @
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
  isHireable
};
