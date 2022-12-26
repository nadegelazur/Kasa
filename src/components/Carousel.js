import { useState } from 'react'
import '../styles/Carousel.css'

function Carousel(props) {
    const [current, setCurrent] = useState(0);
    // const length = props.slides.length;
    // number total of images of array
    console.log(props.slides)

    // utilisation d'un ternaire
    const nextSlide = () => {
        setCurrent(current === props.slides.length - 1 ? 0 : current + 1); 
    };

    console.log(current);

    const prevSlide = () => {
        setCurrent(current === 0 ? props.slides.length - 1 : current -1);
    }
    // url de obj.pictures
    console.log(props.slides)
    
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
                    <div className={index === current ? 'slide-active' : 'slide'}
                               key={index} >
                        {/* on met un if ici */}
                        {/* si on a la slide active alors on render l'image */}
                        {index === current && (
                            <div className='toto'>     
                                <button className='arrow_prev' 
                                        aria-label='Image précédente'
                                        onClick={prevSlide}>Précédente
                                </button>
                                <img className='image' src={slide} alt="" />
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