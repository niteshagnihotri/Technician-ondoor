import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const ServicesPage = lazy(() => import('./ServicesPage'));
const ContactPage = lazy(() => import('./ContactPage'));

const Routing = () => {
  return (
    <>
    <Header/>
      <Suspense fallback={<div className="text-2xl flex items-center font-QuickSand font-bold text-center h-full ">Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
      <Footer/>
    </>
  )
}

export default Routing;