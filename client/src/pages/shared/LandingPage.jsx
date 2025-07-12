import React from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import popularCourses from "../../components/popularCourses";
import Reviews from "../../components/Reviews";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { AnimatedPage } from "../../components/shared/AnimatedComponents";

export default function LandingPage() {
  return (
    <AnimatedPage>
      <Header />
      <Hero />
      <Features />
      <popularCourses />
      <Reviews />
      <CTA />
      <Footer />
    </AnimatedPage>
  );
} 