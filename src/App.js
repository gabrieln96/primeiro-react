import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Sobre from './components/pages/Sobre';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Project from './components/pages/Project';



function App() {
  return (
    <Router>
     <Navbar/>
      <Container customClass="min-height">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/projects" element={<Projects/>}/>  
        <Route path="/novoprojeto" element={<NovoProjeto/>}/>  
        <Route path="/project/:id" element={<Project/>}/>   
        </Routes>
        </Container>
        <Footer/>
    </Router>
    
  )
}

export default App;
