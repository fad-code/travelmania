import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Entry from "./components/Entry"
import CityDetails from "./components/CityDetails"

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Entry />} />
                <Route path="/city/:cityId" element={<CityDetails />}/>
            </Routes>
        </BrowserRouter>
    )
}