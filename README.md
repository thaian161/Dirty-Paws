# Final Project: Dirty Paws 🐾

Dirty Paws is a pet-themed dating app built with Node, React, Express, and PostgreSQL.

## Contributors:

- 👩🏻‍🎨 [Ann Bui](https://github.com/thaian161): the frontend lover and amateur UX/UI designer
- 👨🏼‍💻 [Dan Lindeblom](https://github.com/DLindeblom): the master of backend and data manipulater
- 👨‍🏭 [Declan Davis](https://github.com/DexTheFish): the master of cats and origami

## Main Features:

- Users can create profiles, view other profiles, and send 'likes' to form matches.
- Users can view messages and chat with their matches in real-time.
- Users can earn treats and badges to show off.

## Features we wish to accomplish:

- Users can enable Location Services and set a maximum search radius for other profiles
- Users can connect to Spotify and share music with their matches
- Users can register using their Google account
- Matching uses a weighted algorithm to favour users with more treats/badges
- Users can video chat with their matches
- Users can unmatch

## Final Product

### [👋 Watch Live Demo Here 👋](https://youtu.be/0k2WaGUxCJ0)

#### _Landing Page_

!["Landing Page"]()

#### _Update Your Profile_

!["Edit Profile"]()

#### _Paws: searching for your perfect match_

!["Paws"]()

#### _Messages: live chat with your matches_

!["Messages"]()

## Entity Relationship Diagram (ERD)

!["ERD"]()

## Dependencies

#### Front End

- axios: ^0.27.2
- bootstrap: ^5.2.0
- classnames: ^2.3.1
- react: ^18.2.0
- react-bootstrap: ^2.5.0
- react-dom: ^18.2.0
- react-lottie: ^1.2.3
- react-router-dom: ^6.3.0
- react-scripts: 5.0.

#### Back End

- cookie-parser: ~1.4.4
- debug: ~2.6.9
- dotenv: ^16.0.1
- express: ~4.16.1
- morgan: ~1.9.1
- pg: ^8.7.3

## Dev-Dependencies

- nodemon: ^2.0.19

## Getting Started

1. Clone this repos.
2. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
3. Update the .env file with your correct local information

   - username: `labber`
   - password: `labber`
   - database: `midterm`

4. Install dependencies (front-end): `npm i --force`
5. Install dependencies (back-end): `npm i`
6. Reset database (back-end): `npm run db:reset`

   - Check the db folder to see what gets created and seeded in the SDB

7. Run the server (back-end): `npm start`

   - Note: nodemon is used, so you should not have to restart your server

8. Run the client (front-end): `npm start`
9. Visit `http://localhost:3000/`
10. Start to build your profile, treats, and paws. LET'S GET DIRTY!!!

<br>

> **Hope you enjoy the app and have a nice day :D**
