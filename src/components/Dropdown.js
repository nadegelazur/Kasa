import '../styles/Dropdown.css'
import { useState } from 'react'

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='dropdown'>
            <div className='dropdown_btn' onClick={() => setIsActive(!isActive)}>
                {props.title}
                <i className='fa-solid fa-chevron-down'></i>
            </div>
            {isActive && 
                <div className='dropdown_value'>{props.children}</div>
            }   
        </div>
    )
}

export default Dropdown;
