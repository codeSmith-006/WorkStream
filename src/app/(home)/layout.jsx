import React from "react";
import Navbar from "../Components/(home_page)/Navbar/Navbar";
import { Footer } from "../Components/(home_page)/Footer/Footer";

// This layout is specifically for the home page and includes the Navbar and Footer
export default function HomeLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar></Navbar>
      {/* here goes the page content, also change the routes accordingly but the Navbar and Footer remains the same */}
      {children}
      <Footer></Footer>
    </div>
  );
}
