import Light from "../Light/Light"
import "./Lights.css"

const Lights = ({lights}) => (
    
    <div className="lights">
        {lights.map(light => <Light key={light.name} name={light.name} state={light.state} />)}
	</div>
)

export default Lights