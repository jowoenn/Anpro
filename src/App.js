import React from "react"
import Header from "./Components/Header/Header"
import {Route, Routes} from "react-router-dom"
import "./App.scss"

// Pages
import HomePage from "./Pages/HomePage"
import ServicePage from "./Pages/ServicePage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import Footer from "./Components/Footer/Footer"

function App(){
    return(
        <> 
            <Header />
            <div className="containerRoutes">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/aboutus" element={<AboutPage />} />
                    <Route path="/contactus" element={<ContactPage />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App