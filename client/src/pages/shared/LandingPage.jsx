import React from "react";
import Header from "../../components/landing/Header";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import PopularCourses from "../../components/landing/popularCourses";
import Reviews from "../../components/landing/Reviews";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <PopularCourses />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
} 