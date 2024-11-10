import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import News from './components/News';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';

function App() {
  return (
      <Router>
      {/* NavBar will be rendered on all pages */}
      <Nav />

      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <Landing />
            </>
          } 
        />

        {/* OurServices Page Route */}
        <Route 
          path="/News"
          element={
            <>
              <News />
            </>
        } 
        />

        {/* Contact Page Route */}
        <Route 
          path="/Contact"
          element={
          <>
            <Contact />
          </>
        } 
        />

        {/* Project Page Route */}
        <Route 
          path="/CaseStudies"
          element={
          <>
            <CaseStudies />
          </>
        } 
        />

        {/* About Page Route */}
        <Route 
          path="/About"
          element={
          <>
            <About />
          </>
        } 
        />

        {/* Add other routes here */}
      </Routes>
      <Footer />
      </Router>
  )
}

export default App;