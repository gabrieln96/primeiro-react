import style from './Project.module.css'

import {useFetcher, useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'


function Project (){

    const {id} = useParams()

    const [project, setProject] = useState ([])

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`,{
            methot: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log)
    }, [id])

    return <p>{project.name}</p>
    
}


export default Project