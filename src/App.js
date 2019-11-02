import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";

import Skills from "./Components/Skills/Skills";
import MyProject from "./Components/MyProject/MyProject";
import Slogan from "./Components/Slogan/Slogan";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div className="portfolio">
            <Header/>
            <Main/>
            <Skills/>
            <MyProject/>
            <Slogan/>
            <Contacts/>
            <Footer/>

        </div>
    );
}

export default App;
