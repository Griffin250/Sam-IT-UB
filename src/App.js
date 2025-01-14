import React from "react";
import './components/Layout/Languages/i18n'; // i18n initialized
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginSignup from "./components/Auth/LoginSignup";
import Chatbot from "./components/Layout/Chatbot/Chatbot";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import BlogPosts from "./pages/BlogPost";
import Services from "./pages/Services";
import Product from "./pages/Product";
import Support from "./pages/Support";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';         
import 'primeicons/primeicons.css';   


const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/loginSignup" || location.pathname === "/support" || location.pathname === "/notFound";
  const hideNavBar = location.pathname === "/loginSignup" || location.pathname === "/support";
 
  
  return (
    <div>
      {!hideNavBar && <Navbar />}
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound/>}/>
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/blogPost" element={<BlogPosts />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default App;
