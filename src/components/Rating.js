import React from "react";
import Stars from './Stars'

function Rating(props) {
    return (
        <div className="rating">
            <div className="profil">
                <div className="profil_name">{props.name}</div>
                <div className="profil_picture">
                    <img className="picture" src={props.picture} alt={props.name}/>
                </div>
            </div>

            <Stars rating={parseInt(props.rating)} />
        </div>
    )
}

export default Rating