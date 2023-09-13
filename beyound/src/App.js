import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';



function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/company'>Company</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/newproject'>New Project</Link>
        </ul>
        <Container customClass="minHeight">
        <Routes>
          <Route exect path='/' element={<Home/>}></Route>
          <Route exect path ='/company' element={<Company/>}></Route>
          <Route exect path ='/contact' element={<Contact/>}></Route>
          <Route exect path ='/newproject' element={<NewProject/>}></Route>
        </Routes>
        </Container>
        <p>Footer</p>
        
      </Router>
    </div>
  );
}

export default App;
