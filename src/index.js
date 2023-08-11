import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// Redux
import { Provider } from "react-redux";
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

        // {
        //   "time": "MARCH - MAY 2022",
        //   "position": "Frontend Developer",
        //   "company": "EDSoft",
        //   "description": "Front-End Developer on an exciting student app project, where we use React to create a dynamic and friendly user experience. The idea of ​​this page is to offer students a modern platform to access educational resources and enhance their academic experience.",
        //   "tecnologies": ["React", "JavaScript", "HTML", "CSS", "GraphQL"]
        // },