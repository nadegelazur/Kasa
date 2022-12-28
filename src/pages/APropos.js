import '../styles/APropos.css'
import Apropos from '../data/Apropos.json'
import Dropdown from '../components/Dropdown'

function APropos() {
    return (
        <div className='kasa-a-propos'>
        
                <section className='section-banner'></section>
                <div className='dropdowns-container'>
                    {Apropos.map((propos, index) => (
                        <Dropdown title={propos.title} key={propos.id}> 
                            {/* ici on passe des children au composant dropdown */}
                            {propos.description}
                        </Dropdown>
                    ))}
                </div>
        </div>
    )
}
export default APropos