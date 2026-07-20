import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/common-components/Navbar";
import ScrollToTop from "@/components/common-components/ScrollToTop";
import Footer from "@/components/common-components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;