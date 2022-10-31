import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/logo.png' 

function Navbar () {
 
    return(
      <nav class={styles.navbar}>
        <Container>
        <Link to="./">
            <img class={styles.logo} src={logo} alt="Gabst"/>
        </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
        <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
        <Link to="/projects">Projetos</Link>
        </li>
        <li className={styles.item}>
        <Link to="/sobre">Sobre</Link>
        </li>
        <li className={styles.item}>
        <Link to="/contato">Contato</Link>
        </li>
      </ul>
        </Container>
      </nav>
    )
}

export default Navbar