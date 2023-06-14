import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import { Routes, Route, Navigate, BrowserRouter as Router } from "react-router-dom";
import Projects from './projects/Projects';
import About from './About';
import { ThemeProvider} from '@mui/material/styles';
import theme from "./theme";
import { CssBaseline } from '@mui/material';
import Mastercard from './pages/Mastercard';
import Fiserv from "./pages/Fiserv";
import Insomniac from "./pages/Insomniac";
import PECSS from "./pages/PECSS";
import Aquarium from "./pages/Aquarium";
import ScrollToTop from "./ScrollToTop";
import Footer from './components/Footer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/projects/Aquarium" element={<Aquarium/>} />
          <Route exact path="/projects/Mastercard" element={<Mastercard/>} />
          <Route exact path="/projects/Fiserv" element={<Fiserv/>} />
          <Route exact path="/projects/Insomniac" element={<Insomniac/>} />
          <Route exact path="/projects/PECSS" element={<PECSS/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route exact path="/" element={<Navigate to="/projects" replace />} />
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>

  );
}

export default App;
