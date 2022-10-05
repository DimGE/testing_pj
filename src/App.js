import React from "react";

import './App.css';
import Content from "./Components/Content";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default App;
