import React from "react";
import Hero from "./Hero.js";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About.js";

function Main() {
  return (
    <>
      <hr />
      <main>
        <h1>Main Content</h1>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>
    </>
  );
}

export default Main;
