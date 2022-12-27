import '../styles/FicheLogement.css'
import { useParams, Navigate } from 'react-router-dom';
import annonces from '../data/data.json';
import notFound from '../pages/NotFound'
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown'
import Carousel  from '../components/Carousel';
import { useEffect } from 'react';
import { useState } from 'react';

function FicheLogement() {
   
    const [detailsLogement, setdetailsLogement] = useState(undefined)
    const { id } = useParams();

    useEffect(() => {
        fetch('../data.json').then(
            response => response.json()
        ).then((data) => {
            // console.log(data)
            const currentLogement = data.find((annonce) => { 
                return annonce.id === id;   
            });
            setdetailsLogement(currentLogement)
            // console.log(currentLogement)
        })
    }, [])
    
    const currentLogement = annonces.find((annonce) => { 
        return annonce.id === id;   
    });
    if(!currentLogement) {
        console.log('erreur')
        return <Navigate to="./NotFound.js" />;
        
        
    }
    
    return (
        <div className='casa-fiche-logement'>
            <Carousel slides={detailsLogement && detailsLogement.pictures} />

            <section className='global-top-section'>
                <section className='left-section'>
                    <div className='fiche-logement_name'>
                        <h2 className='fiche-logement_title'>{detailsLogement && detailsLogement.title}</h2>
                        <p className='fiche-logement_subtitle'>{detailsLogement && detailsLogement.location}</p>    
                    </div>
                    <Tags currentLogement={detailsLogement && detailsLogement.tags} /> 
                </section>
                <section className='right-section'>
                    <Rating 
                        name={detailsLogement && detailsLogement.host.name}
                        picture={detailsLogement && detailsLogement.host.picture}
                        rating={detailsLogement && detailsLogement.rating}/>
                </section>
            </section>

            <div className='dropdowns-container'>
                <Dropdown title={'Description'}>
                    {detailsLogement && detailsLogement.description}
                </Dropdown>
                <Dropdown title={'Equipements'}>
                    {detailsLogement && detailsLogement.equipments.map((equipement, index) => {
                        return(
                            <li key={index}>{equipement}</li>
                        )
                    })}
                </Dropdown>
            </div>
        </div>
    )
}

export default FicheLogement