# Graduation Project: Dirty Paws 🐾

Dirty Paws is a cartoon pet-themed dating app built with Node, React, Express, and PostgreSQL.

## Contributors:

- 👩🏻‍🎨 [Ann Bui](https://github.com/thaian161): the master of frontend, an amateur UX/UI designer and dogs lover
- 👨🏼‍💻 [Dan Lindeblom](https://github.com/DLindeblom): the master of backend, data and a sports fanatic
- 👨‍🏭 [Declan Davis](https://github.com/DexTheFish): the master of functionality, cats and origami

## Main Features:

- Users can create/update profiles
- Users can view other profiles and send 'a love paws' to form matches.
- Only after two users have both liked each others, they can view messages and chat with their matches in real-time.
- Users can earn treats to upgrade their badges to show off.

## Features we wish to accomplish:

- Users can register using their Google account/ Google authentication
- Users can enable Location Services and set a maximum search radius for other profiles
- Users can connect to Spotify and share music with their matches
- Users can video chat with their matches
- Users can unmatch
- Matching uses a weighted algorithm to favour users with more treats/badges

## Credits

We would like to express our appreciation and gratitude for the knowledge and unending support of our instructors, mentors, and staff at Lighthouse Labs.
As well, we want to acknowledge and shout out to all the online resources we consulted during the development of this project.
<br>
**_It is truly by standing on the shoulders of giants that we have made it to where we are today!_**

## Final Product

### [👋 Watch Demo Presentation Here 👋](https://youtu.be/vDzoe_sz0AQ)

#### _Landing Page_
https://user-images.githubusercontent.com/76141297/186611684-c9c734c6-35f8-478b-8464-cd4a7004d821.mp4

#### _Update Your Profile_
https://user-images.githubusercontent.com/76141297/186612700-af0be638-c743-457c-8ca7-86bea0b02fc6.mp4

#### _Paws: searching for your perfect match_
https://user-images.githubusercontent.com/76141297/186613925-20dfcb4f-7f05-4e8c-9787-3648710069e3.mp4

#### _Messages: live chat with your matches_
https://user-images.githubusercontent.com/76141297/186616211-1bdc6b59-7148-490f-9445-28941b9c65e4.mp4

#### _About Page_
https://user-images.githubusercontent.com/76141297/186616746-aa20c033-afe2-4a49-9905-561e13eac5f9.mp4

## Entity Relationship Diagram (ERD)

!["ERD"](https://github.com/thaian161/Dirty-Paws/blob/master/front-end/public/docs/FinalERD.png?raw=true)

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
- react-spring: ^9.5.2
- styled-components: ^5.3.5

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
   - database: `final`

The root project directory contains two directories: **Front-end and Back-end**
<br>
From here, we recommend you have **two separate terminal window** opens

#### On your Backend terminal

4. Navigate to the back-end folder. Install dependencies `npm i`

5. Reset database: `npm run db:reset`

   - Check the db folder to see what gets created and seeded in the SDB

6. Run the server (back-end): `npm start`

   - Note: nodemon is used, so you should not have to restart your server

#### On your Frontend terminal

7. Navigate to the front-end folder. Install dependencies `npm i --force`

8. Run the client (front-end): `npm start`

9. React will kick in and auto serve the app in your browser at `http://localhost:3000`

10. Start to build your profile, treats, and paws. LET'S GET DIRTY!!!

<br>

> **Hope you enjoy the app and have a nice day :D**
