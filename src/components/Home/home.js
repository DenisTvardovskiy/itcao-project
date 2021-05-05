import React from 'react'
import "./home.css";
import PhoneCases from "./CaseSection/PhoneCases";
import HeadphoneCases from "./CaseSectionAir/HeadphoneCases";
import ConstructorSection from "./ConstructorSection/constructorSection";
import Footer from "../Footer/Footer";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

function Home() {
    return (
        <section className="home_body">
            <PhoneCases/>
            <HeadphoneCases/>
            <ConstructorSection/>
            <CategoriesSection/>
            <Footer/>
        </section>
    );
}

export default Home;
