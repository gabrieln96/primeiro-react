function ProjectForm (){
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o orlamento total"/>
            </div>
            <div>
                <select name="category_id"> 
                    <option isabled> Seleciona a Categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
        )
}

export default ProjectForm