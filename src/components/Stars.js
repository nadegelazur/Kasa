import { StarIcon } from "../assets/StarIcon";
import '../styles/Rating.css'

const Stars = (props) => (
    <div className="stars">
        {Array(5)
            .fill(0)
            .map((value, index) => {
                // est ce que l'index est inférieur à props.rating
                return (
                    index < props.rating ? 
                        <StarIcon color={'#ff6060'} key={index} /> : 
                        <StarIcon color={'#E3E3E3'} key={index} />
                )
                    
            })}
    </div>
)

export default Stars;

