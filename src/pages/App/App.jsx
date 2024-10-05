import "./App.css"
import Dashboard from "../../components/Dashboard/Dashboard"
import Header from "../../components/Header/Header"
import smartHomeData from "../../smartHomeData"

const App = () => (
    <div className="container">
        <Header title="Chytrý dům" />
        <Dashboard data={smartHomeData} />
    </div>
)

export default App