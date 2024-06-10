import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/collection.style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root element to render the React app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement, // Get the root element from the HTML
);

// Render the React app within the root element
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>,
);

// Measure performance in your app, optionally logging or sending results to an analytics endpoint
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
