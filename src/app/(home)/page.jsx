"use client";
import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";
import { Hero } from "../Components/(home_page)/Hero/Hero";
import UseCases from "../Components/(home_page)/UseCases/UseCases";
// import Hero from "../Components/(home_page)/Hero/Hero";
import NeedToSucceed from "../Components/(home_page)/NeedToSucceed/NeedToSucceed";

import { Pricing } from "../Components/(home_page)/Pricing/Pricing";
import { Testimonials } from "../Components/(home_page)/Testimonials/Testimonials";

import ScrollToTopButton from "../Components/(home_page)/ScrollBottomToTop/ScrollToTopButton";

import Contact from "../Components/(home_page)/Contact/Contact";
import FaqSection from "../Components/(home_page)/FAQ/FaqSection";


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
        <FaqSection/>
      {/* {/* </div> */}
    
        {/* <FaqSection /> */}
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
      {/* Back to top scroll component */}
      <div>
        <ScrollToTopButton />
        </div>
      {/* contact section  */}
      <div>
        <Contact></Contact>
      </div>
      {/* Scroll back to top */}
      {/* <ScrollToTopButton/> */}
    </div>
  );
}

