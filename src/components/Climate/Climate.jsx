import "./Climate.css"
import { useState } from "react"
import temp from "./images/temp.svg"

const Climate = ({temperature, humidity}) => {

    const [changeTemp, setChangeTemp] = useState(temperature)
    
    return (
        <div className="climate">
            <div className="climate__icon">
                <img src={temp} alt="Temperature" />
            </div>
            <div className="climate__content">
                <div className="climate__temperature">{changeTemp}&deg;C</div>
                <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
            </div>
            <div className="climate__controls">
                <button onClick={() => setChangeTemp(changeTemp + 1)} className="button">+</button>
                <button onClick={() => setChangeTemp(changeTemp - 1)} className="button">-</button>
            </div>
        </div>
    )
}

export default Climate