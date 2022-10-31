import ProjectForm from "../projtect/ProjtectForm"
import styles from "./NewProject.module.css"


function NovoProjeto (){
    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NovoProjeto