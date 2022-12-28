import '../styles/Dropdown.css'
import { useState } from 'react'

function Dropdown(props) {
    const [isActive, setIsActive] = useState(false);
    // console.log(isActive)
    return (
        <div className='dropdown'>
            <div className={
                "dropdown_btn" + (isActive ? " visible" : "")
            } onClick={() => setIsActive(!isActive)}>
                {props.title}
                
            </div>
            {isActive &&   
                <div className='dropdown_value'>{props.children}</div>   
            }   
        </div>
    )
}
export default Dropdown;
