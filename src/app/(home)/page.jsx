"use client";
import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";
import { Hero } from "../Components/(home_page)/Hero/Hero";
import UseCases from "../Components/(home_page)/UseCases/UseCases";
<<<<<<< HEAD
// import Hero from "../Components/(home_page)/Hero/Hero";
import NeedToSucceed from "../Components/(home_page)/NeedToSucceed/NeedToSucceed";
import FAQ from "../Components/(home_page)/FAQ/FaqSection";

=======
import NeedToSucceed from "../Components/NeedToSucceed/NeedToSucceed";
import Contact from "../Components/(home_page)/Contact/Contact";
import { Pricing } from "../Components/(home_page)/Pricing/Pricing";
import { Testimonials } from "../Components/(home_page)/Testimonials/Testimonials";
>>>>>>> 017ef9e61504f88e40f89138849f4492eb66f2e7

// here we'll have the content of the home page
export default function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div>
        <Hero></Hero>
      </div>
      {/* Everything you need to succeed */}
      <div>
        <NeedToSucceed />
      </div>
      {/* Perfect for every team */}
      <div>
        <UseCases></UseCases>
      </div>
      {/* Loved by teams worldwide */}
<<<<<<< HEAD
      <div></div>
      {/* FAQ section */}
      <div>
        <FAQ/>
      </div>
    
=======
      <div>
        <Testimonials></Testimonials>
      </div>
      {/* pricing */}
      <div><Pricing></Pricing></div>
>>>>>>> 017ef9e61504f88e40f89138849f4492eb66f2e7
      {/* Ready to transform the way your team works? */}
      <div>
        <ReadyToTransform></ReadyToTransform>
      </div>
      {/* contact section  */}
      <div>
        <Contact></Contact>
      </div>
    </div>
  );
}
