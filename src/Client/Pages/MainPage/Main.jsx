import ClientSection from "../HomePage/ClientSection/ClientSection";
import CollaborationsSection from "../HomePage/CollaborationsSection/CollaborationsSection";
import FeedbackSection from "../HomePage/FeedbackSection/FeedbackSection";
import FooterSection from "../HomePage/FooterSection/FooterSection";
import OurTeamSection from "../HomePage/OurTeamSection/OurTeamSection";
import OurWorkSection from "../HomePage/OurWorkSection/OurWorkSection";
import AboutUsSection from "../HomePage/AboutUsSection/AboutUsSection";
import ProductsSeciton from "../HomePage/ProductSection/ProductsSeciton";
import ProductSecitontwo from "../HomePage/ProductSectionTwo/ProductSectionTwo";
import ServicesSection from "../HomePage/ServicesSection/ServicesSection";
import HeroSection from './../HomePage/HeroSection/HeroSection';
import AnimatedCursor from "react-animated-cursor";

const Main = () => {
    return (
        <div className="bg-black">

            <HeroSection></HeroSection>
            <ProductsSeciton></ProductsSeciton>
            <ProductSecitontwo></ProductSecitontwo>
            <ServicesSection></ServicesSection>
            <AboutUsSection></AboutUsSection>
            <OurWorkSection></OurWorkSection>
            <ClientSection></ClientSection>
            <FeedbackSection></FeedbackSection>
            <CollaborationsSection></CollaborationsSection>
            <OurTeamSection></OurTeamSection>
            <FooterSection></FooterSection>
            <AnimatedCursor />
        </div>
    );
};

export default Main;