import '../styles/AnnonceList.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const AnnoncesList = () => {

    const [logements, setLogements] = useState([])

    useEffect(() => {
        fetch('../data.json').then(
            response => response.json()
        ).then((data) => {
            // console.log(data)
            const allLogements = data.map((logement) => {
                return logement 
            });
            setLogements(allLogements)
            
            console.log(allLogements)
        })

    }, [])

    return(
        <ul className="section-annonce-list" key={id}>                    
            {logements && logements.map((annonce) =>
            

                <Link to={`/FicheLogement/${id}`}>
                    <li key={id} className="section-annonce-item">  
                        <img key={id} src={annonce.cover} alt={annonce.title} className='annonce_photo'/>
                        <div className='annonce_title'>
                            {annonce.title}
                        </div>     
                    </li>
                </Link>
               
            )}
        </ul>
    )
}

export default AnnoncesList