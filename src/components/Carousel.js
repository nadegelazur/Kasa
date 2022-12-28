import { useState } from 'react'
import '../styles/Carousel.css'

function Carousel(props) {
    const [current, setCurrent] = useState(0);
    // utilisation d'un ternaire
    const nextSlide = () => {
        setCurrent(current === props.slides.length - 1 ? 0 : current + 1); 
    };
    // console.log(current);
    const prevSlide = () => {
        setCurrent(current === 0 ? props.slides.length - 1 : current -1);
    }
    // console.log(props.slides)
    // verification de si l'array est vide
    if(!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }
    if(props.slides.length === 1) {
        console.log(props.slides.length)
        return (
            <img className='image' src={props.slides} alt="" />
        ) 
    }
    
    return (
        <div className='carousel'>
            {props.slides.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <div className='toto'>     
                                <button className='arrow_prev' 
                                        aria-label='Image précédente'
                                        onClick={prevSlide}>Précédente
                                </button>
                                <img className='image' src={slide} alt="" />
                                <p className='numberOfImages'>
                                    {current + 1 }/{props.slides.length}</p>
                                <button className='arrow_next'
                                        aria-label='Image suivant'
                                        onClick={nextSlide}>Suivant
                                </button>
                            </div>
                        )}
                    </div>
                );    
            })}
        </div>
    );
}

export default Carousel