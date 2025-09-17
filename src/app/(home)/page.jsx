"use client";
import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";
import { Hero } from "../Components/(home_page)/Hero/Hero";
import UseCases from "../Components/(home_page)/UseCases/UseCases";
// import Hero from "../Components/(home_page)/Hero/Hero";
import NeedToSucceed from "../Components/(home_page)/NeedToSucceed/NeedToSucceed";
// import FAQ from "../Components/(home_page)/FAQ/FaqSection";

// import NeedToSucceed from "../Components/NeedToSucceed/NeedToSucceed";
import Contact from "../Components/(home_page)/Contact/Contact";
import { Pricing } from "../Components/(home_page)/Pricing/Pricing";
import { Testimonials } from "../Components/(home_page)/Testimonials/Testimonials";
import FAQ from "../Components/(home_page)/FAQ/FAQSection";
import ScrollToTopButton from "../Components/(home_page)/ScrollBackToTop/ScrollBackToTop";

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
      <div></div>
      {/* FAQ section */}
      <div>
        <FAQ/>
      </div>
    
      <div>
        <Testimonials></Testimonials>
      </div>
      {/* pricing */}
      <div><Pricing></Pricing></div>
      {/* Ready to transform the way your team works? */}
      <div>
        <ReadyToTransform></ReadyToTransform>
      </div>
      {/* contact section  */}
      <div>
        <Contact></Contact>
      </div>
      {/* Scroll back to top */}
      <ScrollToTopButton/>
    </div>
  );
}
