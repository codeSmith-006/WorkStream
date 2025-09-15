import React from "react";
import { ReadyToTransform } from "../Components/(home_page)/ReadyToTransform/ReadyToTransform";


// here we'll have the content of the home page
export default function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div></div>
      {/* Everything you need to succeed */}
      <div>
        <NeedToSucceed/>
      </div>
      {/* Perfect for every team */}
      <div></div>
      {/* Loved by teams worldwide */}
      <div></div>
      {/* Ready to transform the way your team works? */}
      <div>
        <ReadyToTransform></ReadyToTransform>
      </div>
    </div>
  );
}
