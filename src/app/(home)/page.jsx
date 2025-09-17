"use client";
import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";
import { Hero } from "../Components/(home_page)/Hero/Hero";
import UseCases from "../Components/(home_page)/UseCases/UseCases";
// import Hero from "../Components/(home_page)/Hero/Hero";
import NeedToSucceed from "../Components/(home_page)/NeedToSucceed/NeedToSucceed";
import FAQ from "../Components/(home_page)/FAQ/FaqSection";


// here we'll have the content of the home page
export default function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div><Hero></Hero></div>
      {/* Everything you need to succeed */}
      <div>
        <NeedToSucceed/>
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
    
      {/* Ready to transform the way your team works? */}
      <div>
        <ReadyToTransform></ReadyToTransform>
      </div>
    </div>
  );
}
