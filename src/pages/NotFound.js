import '../styles/NotFound.css'
import { Link } from 'react-router-dom'



function NotFound(id) {
    return (
        <div className='kasa-not-found'>
            
            <h1 className='kasa-not-found_title'>404</h1>
            <h2 className='kasa-not-found_sub-title'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='link_notFound' to='/'>
                <li key={id}>Retourner sur la page d'accueil</li>
            </Link>
       
        </div>
    )
}

export default NotFound