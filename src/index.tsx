import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/collection.style.css";
import App from "./App";

// Create a root element to render the React app
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Get the root element from the HTML
);

// Render the React app within the root element
root.render(
  <React.StrictMode>
    <App /> {/* Render the App component */}
  </React.StrictMode>
);
