import '../styles/APropos.css'
import Apropos from '../data/Apropos.json'
import Dropdown from '../components/Dropdown'

function APropos() {
    return (
        <div className='kasa-a-propos kasa-a-propos'>
        
                <section className='section-banner'></section>
                <div className='dropdowns-container'>
                    {Apropos.map((propos, index) => (
                        <Dropdown title={propos.title} key={propos.id}> 
                            {/* ici on passe des children au composant dropdown */}
                            {/* c'est pour ca que le composant s'ouvre et se ferme en deux balises l21 à l24*/}
                            {propos.description}
                        </Dropdown>
                    ))}
                </div>
        </div>
    )
}
// const APropos = () => {
//     const accorionData = [
//         {
//             "id": 1,
//             "title": "Fiabilité",
//             "description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
//         },
//         {
//             "id": 2,
//             "title": "Respect",
//             "description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
//         },
//         {
//             "id": 3,
//             "title": "Service",
//             "description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
//         },
//         {
//             "id": 4,
//             "title": "Sécurité",
//             "description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
//         }
//     ]
//     return (
//         <div>
//             <div className='accordion'>
//                 {accorionData.map(({ title, description}) => (
//                     <Accordion title={title} content={description} />
//                 ))}
//             </div>
//         </div>
//     )
// }

export default APropos