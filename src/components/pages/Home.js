import styles from './Home.module.css'
import savings from '../../img/saving.svg'
import LinkButton from '../layout/LinkButton'

function Home (){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>GabsT</span></h1>
            <p>Gerencie seus projetos agora mesmo!</p>
            <LinkButton to="/novoprojeto" text="Criar Projeto"/>
            <img src={savings} alt="GabsT"/>
        </section>
    )
}

export default Home