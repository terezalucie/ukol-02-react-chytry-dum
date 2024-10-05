import "./Light.css"
import { useState } from "react"
import lightOn from "./images/light-on.svg"
import lightOff from "./images/light-off.svg"

const Light = ({ name, state }) => {
    const [light, setLight] = useState(state);

    return (
        <div onClick={() => setLight(light === "on" ? "off" : "on")} className="light">
            <div className="light__icon">
                {
                light === "on" 
                ? <img src={lightOn} alt="Light On" /> 
                : <img src={lightOff} alt="Light Off" />
                }
            </div>
            <div className="light__name">{name}</div>
        </div>
    );
}

export default Light;
