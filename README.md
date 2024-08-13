# About Page

The study project [Social Network](https://social-network-52b53.web.app).

The Social Network is a dynamic online platform that builds a virtual world, allows people to create an account, to communicate and interact with other people.  
It provides essential social networking features such as profile management, searching for friends and subscribing to them, communicating with all users in a common chat.

The interface was developed on the React library using the Formik library for working with forms.  
The Redux library was used as a state manager and the Axios library was used to interact with the RestAPI.  
The WebSocket was used to create a common real-time chat.

---

### Technologies

This is a social network project built using:  
`React`, `Redux`, `TypeScript`, `SCSS`, `Axios`, `REST API`, `WebSocket`, `Formik`, `ESLint`, `Jest`.

---

### Design

- A registration and authorization flow;
- Viewing a user's profile, a form for editing your profile, an ability to change the profile photo;
- Viewing and searching for users, some sorting points, as well as subscribing to users;
- A small common real-time chat for all users.

---

### Developing

- Add following `.env.local` file to the root of the project (`git` ignored) :  
  `REACT_APP_KEY='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'`  
  You should take the KEY from the developer!

* To log in get registered on [social-network.samuraijs.com](https://social-network.samuraijs.com) or use common test account credentials:  
  Email: `free@samuraijs.com`;  
  Password: `free`.

- Project deployment ([firebase.google.com](https://firebase.google.com)) :
  - To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).  
    Run the following npm command to install the CLI or update to the latest CLI version.  
    `npm install -g firebase-tools`;
  - Sign in to Google.  
    For deploy new project you should create new firebase project.  
    For redeploy current project you must be added to members of current firebase project.  
    `firebase login`;
  - Build your web app.  
    `npm run build`;
  - Deploy or redeploy your web app.  
    Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public").  
    `firebase deploy`.

---

###### If you have some questions access, write me on [LinkedIn](www.linkedin.com/in/maksimkasota)
