import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import Content from "../components/sections/Content";
import Install from "../components/sections/Install";
import Features from "../components/sections/Features";
import Plans from "../components/sections/Plans";
import Footer from "../components/sections/Footer";
import Parent from "../components/wrapper/Parent";
import DoLayout from "../components/layouts/DoLayout";
// import '../assets/styles/index.css';
import background from '../assets/styles/background.svg';
import Hero3 from "../components/sections/Hero3";
import CardList from "../components/layouts/CardList";
import Form from "../components/sections/Form";
import Profile from "../components/sections/Profile";
import JobList from "../components/ui/JobCards";
import Header from "../components/sections/Header";
import MarqueeText from "../components/sections/Marquee";


export default function DooDoo() {
  return (
    <><MarqueeText />
    <Header />
    <Box minH={'100vh'} bg="#161616" py={10} px={20}>
      
    <Profile />
    <VStack spacing={4} align="flex-start">
      <JobList mode="completed" />
    </VStack>
    {/* <Footer /> */}
    </Box>
    </>
  );
}
