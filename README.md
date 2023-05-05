# mern-next-auth-googlebook

### Description

### Installation

- Clone this repository to your local computer.
- Open the folder in your IDE.
- `npm install`
- create .env.local file in the root folder then fill out the following env variables.
  1. MONGODB_URI=mongodb+srv://username:password@cluster0.ry98yaj.mongodb.net/?retryWrites=true&w=majority
  2. NEXTAUTH_SECRET= use ```openssl rand -base64 32``` in your terminal to create one.
  3. NEXT_PUBLIC_GOOGLE_API_KEY=your key
- `npm run dev ` or `npm build` and then `npm start`
- The app should be running on http://localhost:3000

### Technology used

- React
- Next.js
- MongoDB
- Google API
- MUI
- bcrypt for hashing
- validator for checking validility for email and password `validator.isEmail, validator.isStrongPassword`
- next-auth for `signin, useSession, getSessuon, getToken, sessionProvider` methods.

- _package.json_
  ```
    "@emotion/react": "^11.10.6",
    "@emotion/server": "^11.10.0",
    "@emotion/styled": "^11.10.6",
    "@mui/icons-material": "^5.11.16",
    "@mui/material": "^5.12.0",
    "axios": "^1.3.5",
    "bcrypt": "^5.1.0",
    "dotenv": "^16.0.3",
    "mongoose": "^7.0.3",
    "next": "13.3.0",
    "next-auth": "^4.22.0",
    "next-connect": "^0.13.0",
    "prop-types": "^15.8.1",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "validator": "^13.9.0"
  ```

### Demo
<a href="https://watch.screencastify.com/v/1dSyaJ7pKGLxgy5Omv5Q">Video Link</a>
- tester account:
  - email: tester@email.com
  - password: Password1234!

### Deployed URL

- Click the following link to try now
  - #### [LINK](https://mern-next-auth-googlebook.vercel.app/)
