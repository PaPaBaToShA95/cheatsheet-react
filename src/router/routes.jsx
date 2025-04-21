import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import HtmlCheats from "../pages/HtmlCheats";
import CssCheats from "../pages/CssCheats";
import JsCheats from "../pages/JsCheats";
import ReactCheats from "../pages/ReactCheats";
import TailwindCheats from "../pages/TailwindCheats";
import VSCodeCheats from "../pages/VSCodeCheats";
import GitCheats from "../pages/GitCheats";
import GulpCheats from "../pages/GulpCheats";
import WebpackCheats from "../pages/WebpackCheats";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Project from "../pages/Project";
import NotFound from "../pages/NotFound";
import BuggyComponent from "../components/BuggyComponent";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

export default function Router({ searchTerm }) {
  return (
  
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/html" element={<HtmlCheats searchTerm={searchTerm} />} />
      <Route path="/css" element={<CssCheats searchTerm={searchTerm} />} />
      <Route path="/js" element={<JsCheats searchTerm={searchTerm} />} />
      <Route path="/react" element={<ReactCheats searchTerm={searchTerm} />} />
      <Route
        path="/tailwind"
        element={<TailwindCheats searchTerm={searchTerm} />}
      />
      <Route
        path="/vscode"
        element={<VSCodeCheats searchTerm={searchTerm} />}
      />
      <Route path="/git" element={<GitCheats searchTerm={searchTerm} />} />
      <Route path="/gulp" element={<GulpCheats searchTerm={searchTerm} />} />
      <Route
        path="/webpack"
        element={<WebpackCheats searchTerm={searchTerm} />}
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/test_error" element={<BuggyComponent />} />
    </Routes>
  
  );
}
