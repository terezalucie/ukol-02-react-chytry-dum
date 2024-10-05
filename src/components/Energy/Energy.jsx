import "./Energy.css"
import electricityImage from "./images/electricity.svg"
import waterImage from "./images/water.svg"

const Energy = ({electricity, water}) => (

    <div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={electricityImage} alt="Energy" />
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={waterImage} alt="Water" />
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
            </div>
        </div>
    </div>
)

export default Energy