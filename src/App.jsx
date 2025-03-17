import React from 'react';
import './App.css';
import Marquee from './components/Marquee';
import Header from './components/Header';
import Poster from './components/Poster';
import HomePage from './pages/HomePage';
import AdmissionsPage from './pages/AdmissionsPage';
import AboutUsPage from './pages/AboutUsPage';
import CollegesPage from './pages/CollegesPage';
import GalleryPage from './pages/GalleryPage';
import Footer from "./components/Footer";
import OurTeamPage from "./pages/OurTeamPage";
import Registrationform from "./components/Registrationform";
import Contactusform from "./components/Contactusform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Marquee />
      <Poster />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admissionspage" element={<AdmissionsPage />} />
        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/ourteampage" element={<OurTeamPage />} />
        <Route path="/collegepage" element={<CollegesPage />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/registrationform" element={<Registrationform />} />
        <Route path="/contactusform" element={<Contactusform />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
