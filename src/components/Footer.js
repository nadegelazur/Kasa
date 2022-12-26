import '../styles/Footer.css'
import logo_footer from '../assets/logo_footer.png'


function Footer() {
    return (
        <div className="casa-footer">
            <img src={logo_footer} alt='Logo du site de la location d’appartements' className='lmj-logo-footer'/>
            <p>&copy; 2022 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer