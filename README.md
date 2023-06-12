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
  - Users can login to their respective accounts.

**Create and Update Profile:**
  - When clicking on "SIGN UP HERE" on the home page, users will be prompted to fill out the following information such as: name, email, password, age, how they identify, preferred pronouns, location, who they want to see (men, women, both), interests, photo, bio, and activites they're interested in.
  - Users can also update their profile information accordingly on the site.

**Home Feed:**
  - Includes a feed of people users can choose to connect with. 
  - Feed shows a person's name, age, preferred pronouns, location, interests, and bio. 
  - Users can pick an activity that they want to do with this person. If interested, they can click on the check-mark to begin chatting with this user.

**Chat Catalog:**
  - Features chats a user can participate in.

<b>Activities & Ratings / Comments on Activities:</b>
  - Users can rate and comment on activities they have participated in. 
  - The display of this information is very similar to a Yelp review page.

**Database:**
  - Used MongoDB.
  - Contains user information such as: name, email, password, age, how they identify, preferred pronouns, location, who they want to see (men, women, both), interests, photo, bio, and activites they're interested in.
  - Contains information of chats, ratings / comments, etc.

## Final Mockup
### Landing Page
<img width="1714" alt="homePage" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/1710b6aa-0338-439e-8ce2-598c2b060609">

### Sign-Up
<img width="1772" alt="signUp" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/bb377851-89ce-4374-8ed8-10cfdb59864a">

### Edit Profile 
<img width="1784" alt="editProfile" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/b0aab7ba-15c8-46c3-b9b2-894612a9408a">

### Feed
<img width="1781" alt="feed" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/dec5c17f-6ce0-4b8e-bac8-d729722efd33">

### Chat
<img width="1791" alt="chat" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/33f88188-9c0c-4a80-a006-46a2880ed2cc">

### Activities 
<img width="1779" alt="activitesPage" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/708349a0-64cc-4b79-bc56-df9c6e37f124">

### Ratings & Comments On Activities
<img width="1782" alt="ratingsAndComments" src="https://github.com/UCR-CS110-S23/project-novo/assets/43308867/35ec16c4-ea1a-4ba7-9acf-0560b8363183">

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

- Learn More

  - To learn more about Next.js, take a look at the following resources:

    -   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
    -   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  - You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

- Deploy on Vercel

  - The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  - Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
