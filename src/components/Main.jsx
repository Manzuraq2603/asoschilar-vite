import React from "react";
import Services from "./Services";
import Hero from "./Hero";
import Eds from "./Eds";
import About from "./About";
import Portfolio from "./Portfolio";

function Main() {
    return (
        <main>
            <Hero />
            <Eds />
            <Services />
            <About/>
           <Portfolio/>
        </main>
    );
}

export default Main;
