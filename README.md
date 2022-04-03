# MERN_SocialMediaApp

A full stack application using `MongoDB`, `ExpressJS`, `ReactJS` and `NodeJS`. 

For the backend I used a database hosted on `cloud.mongodb.com`, `mongoose` for creating my models and connecting to the database, `jsonwebtoken` for the authentication, with that I created my own authentication system and I also implemented `Google OAuth`, to ensure the safety of the users accounts I applied `bcryptjs` for encrypting their passwords.

For the frontend I used `axios` and `redux` for creating api calls and handling the returned data, and I worked with `materialui` to create the design.

In order to make the webpage work you have to:

1. download the repository
2. run `npm i` in both the client and the server folder
3. create a database with the use of `cloud.mongodb.com` (or make one locally)
4. create a `.env` file in the server folder
5. in the `.env` file create two constants, `PORT` on which you will run your backend, and `CONNECTION_URL` for connecting your backend to your database
6. create a google development api on `console.cloud.google.com`
7. create a `.env` file in the client folder
8. in the `.env` file create a constant called `REACT_APP_GOOGLE_AUTH_CLIENT_ID` to enable the use of `Google OAuth`
9. run `npm start` in both of the folders
