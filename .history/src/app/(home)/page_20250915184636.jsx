"use client";
import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";
import { Hero } from "../Components/(home_page)/Hero/Hero";
// import Hero from "../Components/(home_page)/Hero/Hero";

// here we'll have the content of the home page
export default function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div><Hero></Hero></div>
      {/* Everything you need to succeed */}
      <div></div>
      {/* Perfect for every team */}
      <div>
        <U
      </div>
      {/* Loved by teams worldwide */}
      <div></div>
      {/* Ready to transform the way your team works? */}
      <div>
        <ReadyToTransform></ReadyToTransform>
      </div>
    </div>
  );
}
