import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container customClass='min_height'>
          <Routes>
            <Route exect path='/' element={<Home />}></Route>
            <Route exect path='/project' element={<Projects />}></Route>
            <Route exect path='/company' element={<Company />}></Route>
            <Route exect path='/contact' element={<Contact />}></Route>
            <Route exect path='/newproject' element={<NewProject />}></Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
