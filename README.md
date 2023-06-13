[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/w5ovOekq)

## 🌇 NOVO - "meet your new adventure"

## What is NOVO?

NOVO is a dating web application that is inspired by the mission to take on “new things” and embark on “new” adventures with people across the globe. With NOVO, users are able to connect with strangers based on similar yearnings to experience new things. Share what you’ve been wanting to experience and connect with others who want to do the same. Love, camaraderie, and friendship are at the cusp of NOVO.

## Tools & Technologies Used

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

## Features

**Sign Up / Log-In:**

-   Users can login to their respective accounts. Once logged in, the user is prompted to answer a couple of security questions to verify their identity. 

**Create and Update Profile:**

-   When clicking on "SIGN UP HERE" on the home page, users will be prompted to fill out the following information such as: name, email, password, age, how they identify, preferred pronouns, location, who they want to see (men, women, both), interests, photo, bio, and activites they're interested in.
-   Users will also be prompted to fill out their answers to a handful of security questions. These questions will be used to verify their identity when they logged in.
-   Users can also update their profile information accordingly on the site.

**Home Feed:**

-   Includes a feed of people users can choose to connect with.
-   Feed shows a person's name, age, preferred pronouns, location, interests, and bio.
-   Users can pick an activity that they want to do with this person. If interested, they can click on the check-mark to begin chatting with this user.

**Chat Catalog:**

-   Features chat rooms a user can participate in based on the activity they want to do.

<b>Activities & Ratings / Comments on Activities:</b>

-   Users can rate and comment on activities they have participated in.
-   The display of this information is very similar to a Yelp review page.

**Database:**

-   Used MongoDB.
-   Contains user information such as: name, email, password, age, how they identify, preferred pronouns, location, who they want to see (men, women, both), interests, photo, bio, and activites they're interested in.
-   Contains information of chats, ratings / comments, etc.

## Final Mockup

### Landing Page

<img width="1714" alt="homePage" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/1710b6aa-0338-439e-8ce2-598c2b060609">

### Sign-Up

<img width="1772" alt="signUp" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/bb377851-89ce-4374-8ed8-10cfdb59864a">

### Edit Profile

<img width="1784" alt="editProfile" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/b0aab7ba-15c8-46c3-b9b2-894612a9408a">

### Feed

<img width="1781" alt="feed" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/dec5c17f-6ce0-4b8e-bac8-d729722efd33">

### Chat Rooms

<img width="1781" alt="chat" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/9dabd1ce-9322-4e67-850b-21ad10c998c1">

### Activities

<img width="1779" alt="activitesPage" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/708349a0-64cc-4b79-bc56-df9c6e37f124">

### Ratings & Comments On Activities

<img width="1780" alt="review1" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/0710f086-f4c8-46ef-a8e5-fc884954545e">

<img width="1779" alt="review2" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/85981e2f-bae0-44b0-adb1-236ea16cea71">

## Getting Started With Our Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

-   Learn More

    -   To learn more about Next.js, take a look at the following resources:

        -   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
        -   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

    -   You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

-   Deploy on Vercel

    -   The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

    -   Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
