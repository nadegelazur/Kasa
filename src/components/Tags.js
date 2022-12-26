import '../styles/Tags.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


function Tags() {

    const [item, setItem] = useState(undefined)
    const { id } = useParams();

    useEffect(() => {
        fetch('../data.json').then(
            response => response.json()
        ).then((data) => {
            // console.log(data)
            const currentLogement = data.find((logement) => {
                return logement.id === id;
            });
            setItem(currentLogement)
            // console.log(currentLogement)
        })
    }, [])
    
    return (
        <div className="section-tags-list">    
            {item && item.tags.map((tag, index) => {
                return(
                    <div className='tag' key={index}>
                        {tag}
                    </div>   
                )
            })}
      </div>
    ) 
}


export default Tags