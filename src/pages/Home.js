import '../styles/Home.css'
import { useEffect, useState, Navigate } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [logements, setLogements] = useState(undefined);
    
    useEffect(() => {
        fetch(`../data.json`)
            .then((response) => {
                if(!response.ok) {
                    return <Navigate to="/NotFound" />;
                }
                return response.json();
            }) 
            .then((data) => {
                const totalLogements = data.map((logement) => {
                    return logement
                });
                setLogements(totalLogements)
                // console.log(totalLogements)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])
    
    return (
        <div className='kasa-home'> 
            <section className='section-banner-home'>
                <h1 className='banner-title'>{'Chez vous, partout et ailleurs'}</h1>
            </section>

            <section className='section-annonce'>
                <ul className="section-annonce-list"> 
                    {logements && logements.map((logement) =>
                        <Link to={`/FicheLogement/${logement.id}`} key={logement.id}>
                            <li className="section-annonce-item">  
                                <img src={logement.cover} alt={logement.title} className='annonce_photo'/>
                                <div className='annonce_title'>
                                    {logement.title}
                                </div>     
                            </li>
                        </Link>
                    )}
                </ul>
            </section>  ’
        </div>
    )
}

export default Home