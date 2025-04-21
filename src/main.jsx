import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ErrorBoundary fallback={<div>Щось пішло не так...</div>}>
          <App />
        </ErrorBoundary>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
);
