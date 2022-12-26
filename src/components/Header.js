import '../styles/Header.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className='kasa-header'>
            <div className='kasa-logo'>
                <img src={logo} alt='Logo du site de la location d’appartements' className='lmj-logo'/>
            </div>
            <div className='kasa-menu'>
                <ul className='kasa-list-menu'>
                    <NavLink to='/'>
                        <li>Accueil</li>
                    </NavLink>
                    <NavLink to='/aPropos'>
                        <li>A Propos</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header