import React from "react";
import Hero from "../components/Hero";
import JobStats from "../components/JobStats";
import ChatPreview from "../components/ChatPreview";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobStats />
      <ChatPreview />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
