import Blinds from "../Blinds/Blinds"
import Climate from "../Climate/Climate"
import Energy from "../Energy/Energy"
import Lights from "../Lights/Lights"
import "./Dashboard.css"

const Dashboard = ({data}) => (
    
    <main className="dashboard">
        <Lights lights={data.lights} />
        <Climate temperature={data.climate.temperature} humidity={data.climate.humidity}/>
        <Blinds state={data.blinds} />
        <Energy electricity={data.energyConsumption.electricity} water={data.energyConsumption.water} />
    </main>
)

export default Dashboard