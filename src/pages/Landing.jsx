import React from "react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <>
    <LandingLayout>
      <Hero/>
    </LandingLayout>
    <Content />
    <Install />
    <Features />
    <Plans />
    <Footer />
    </>
    
  );
}
