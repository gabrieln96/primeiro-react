import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';
import Sobre from './components/pages/Sobre';

import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/novoprojeto">Novo Projeto</Link>
      </ul>
      <Container customClass="min-height">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/contato" element={<Contato/>}/>
        <Route path="/novoprojeto" element={<NovoProjeto/>}/>   
        </Routes>
        </Container>
      <p>Footer</p>
  
    </Router>
    
  )
}

export default App;
