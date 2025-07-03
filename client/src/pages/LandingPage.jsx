import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PopularCourses from '../components/popularCourses'
import Reviews from '../components/Reviews'
import CTA from '../components/CTA'
import Footer from '../components/footer'


export default function LandingPage() {
    

    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Features></Features>
            <PopularCourses></PopularCourses>
            <Reviews></Reviews>
            <CTA></CTA>
            <Footer></Footer>
        </>
    )
}
