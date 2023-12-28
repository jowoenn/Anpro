import React from "react"
import Header from "./Components/Header/Header"
import {Route, Routes} from "react-router-dom"

// Pages
import HomePage from "./Pages/HomePage"
import ServicePage from "./Pages/ServicePage"
import AboutPage from "./Pages/AboutPage"

function App(){
    return(
        <> 
            <Header />
            <div className="containerRoutes">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/aboutus" element={<AboutPage />} />
                    {/* <Route path="/contactus" element={<Visit />} /> */}
                </Routes>
            </div>
        </>
    )
}

export default App