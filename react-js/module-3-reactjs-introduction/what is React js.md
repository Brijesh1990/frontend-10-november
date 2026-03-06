# what is React js ?
  1. react js is library of javascript
  2. react js is used to create a single page application(SPA)
  3. react js is used to create any application UI 
  4. react js is best library of javascript for create UI of any applications 
  5. react js is follow the life cycle of

      1. initialization
      2. mounting 
      3. updating 
      4. unmounting

  6. react js is seo friendly web apps create 
  7. react js fast load content 10x fast on web broswers
  8. react js used re-usables components
  9. react js provides some packages and libraries
     examples: react-router-dom | bootstrap | sass | sweetalert2 | axios | mui | mdb | tailwinds etc 
  10. react js provides some modules i.e called node_modules

  11. react js is used some hooks for calling api 
  12. react js is used jsx(javascript xml) to access  html elements 
  13. react js access multiple html elements via fragments 
      examples : <></> | <div></div> | <React.Fragments></React.Fragments>

  14. react js follow the xhtml tags rules 
      examples : <br/> | <hr />  | <input /> | <img />


# advantage of react js 

  1. react js is seo friendly 
  2. react js are used re-usables components
  3. react js access html via jsx 
  4. react js create  large web apps
  5. react js called apis 
  6. react js used many packages 
  7. react js create crud app using localStorage 
  8. react js is case Senstive
  9. react js used state and props for re-used data one components to another components 
  10. react js create components via .js or .jsx 
  11. react js is a library of javascript 
  12. react js create a SPA apps 

# How  create our first app in react js 

  1. create via create-react-app 

     1. download node js in your systems 
     2. check the version of node js 
        cmd : node -v
    E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>node -v
    v24.14.0

    3. check the npm or npx version 

       E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>npm -v
       10.9.0

       E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>npx -v
       10.9.0

    4. NPM :stands for node package manager its used to install any package and app inside of react js.

    5. NPX : node package executables its is also used to install any package and app inside of react js but its create an executables files also of app.   


    ```
    npx create-react-app helloworld-app 
    how to run app...
    cd helloworld-app
    npm start

    http://localhost:3000/


    ````
    


# How  create our first app in react js using vite package

  1. create via vite package 

     1. download node js in your systems 
     2. check the version of node js 
        cmd : node -v
    E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>node -v
    v24.14.0

    3. check the npm or npx version 

       E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>npm -v
       10.9.0

       E:\frontend-7pm-MWF\react-js\module-3-reactjs-introduction>npx -v
       10.9.0

    4. NPM :stands for node package manager its used to install any package and app inside of react js.

    5. NPX : node package executables its is also used to install any package and app inside of react js but its create an executables files also of app.   


    ```
     npm create vite@latest

       Project name:
       vite-project
       select framework language
       select language 

       run app...
       cd appname
       npm run dev

       http://localhost:5173/

    ````

# react js folder structures 

  # React.js Basic Folder Structure (Vite)

This is the **default and basic folder structure** when creating a React project using **Vite**.

## 1. Create React App with Vite

```bash
npm create vite@latest my-react-app
cd my-react-app
npm install
npm run dev
```

---

# Project Folder Structure

```
plaintext
my-react-app/
│
├── node_modules/            # Installed dependencies
│
├── public/                  # Static public files
│   └── vite.svg
│
├── src/                     # Main source code
│   │
│   ├── assets/              # Images, icons, fonts
│   │   └── react.svg
│   │
│   ├── App.css              # Styles for App component
│   ├── App.jsx              # Main React component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point of React app
│
├── .gitignore               # Files ignored by Git
├── index.html               # Main HTML template
├── package.json             # Project dependencies & scripts
├── package-lock.json        # Dependency lock file
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation

```
