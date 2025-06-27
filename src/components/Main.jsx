import React from "react";
import Services from "./Services";
import Hero from "./Hero";
import Eds from "./Eds";
import About from "./About";
import Portfolio from "./Portfolio";
import Numbers from "./Numbers";
import Testimonial from "./Testimonial";
import Consultation from "./Consultation";
import Footer from "./Footer";

function Main() {
    return (
        <main>
            <Hero />
            <Eds />
            <Services />
            <About/>
           <Portfolio/>
           <Numbers/>
           <Testimonial/>
           <Consultation/>
          <Footer/>
        </main>
    );
}

export default Main;
