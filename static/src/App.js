import React, { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ComingSoon from './components/ComingSoon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecentSpeakers from './components/RecentSpeakers';
import Terms from './components/Terms';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SpeakerDetails from './components/SpeakerDetails';

// Lazy load components
const About = lazy(() => import('./components/Contact'));


// Loader component
const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const App = () => {
  // Initialize AOS (animations on scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main id="main">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<ComingSoon />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/speakers" element={<RecentSpeakers />} />
              <Route path='/terms' element={<Terms />} />
              <Route path='/speakers-details' element={<SpeakerDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;