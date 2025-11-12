import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Framework from './pages/Framework';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Stakeholders from './pages/Stakeholders';
import Impact from './pages/Impact';
import DigitalSkills from './pages/DigitalSkills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/framework" element={<Framework />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stakeholders" element={<Stakeholders />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/digital-skills" element={<DigitalSkills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
