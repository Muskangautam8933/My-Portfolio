# Software Developer Folio ⚡️


## Table of Contents
- [Sections](#sections)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Linking portfolio to GitHub](#linking-portfolio-to-github)
- [Linking blogs section to Medium](#linking-blogs-section-to-medium)
- [Change and Customize](#change-and-customize-every-section-according-to-your-need)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Illustrations](#illustrations)
- [For the Future](#for-the-future)
- [Contributors](#project-maintainers)

## Portfolio Sections
✔️ Summary and About me\
✔️ Skills\
✔️ Education\
✔️ Work Experience\
✔️ Projects\
✔️ Contact me\
✔️ GitHub Profile



## How To Use 

From your command line, clone and run developerFolio:

```bash
# Clone this repository
git clone 

# Go into the repository
cd developerFolio

# Setup default environment variables

# For Linux
cp env.example .env
# For Windows
copy env.example .env

# Install dependencies
npm install

# Start a local dev server
npm start
```




const skillsSection = { .... }

const techStack = { .... }

const workExperience = { .... }

const openSource = { .... }

const bigProjects = { .... }

const achievementSection = { .... }

const blogSection = { .... }

const contactInfo = { .... }

const twitterDetails = { ... }

```

#### Using Emojis

For adding emoji 😃 into the texts in `Portfolio.js`, use the `emoji()` function and pass the text you need as an argument. This would help in keeping emojis compatible across different browsers and platforms.

#### Customize Lottie Animations

You can choose a Lottie and download it in json format from from sites like [this](https://lottiefiles.com/). In `src/assets/lottie`, replace the Lottie json file you want to alter with the same file name. If you want to change the Lottie options, go to `src/components/displayLottie/DisplayLottie.js` and change the `defaultOptions` object, you can refer [lottie-react docs](https://www.npmjs.com/package/lottie-react) for more info on the `defaultOptions` object.


Note: Don't use `@` symbol when adding username.

- Connect with LinkedIn to get Summary, Skills, Education and Experience
