import HeroSection from "@/components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HowItWorks from "@/components/HowItWorks";

const Index = () => {
    return(
    <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection/>
        <HowItWorks/>
        <Footer />
    </div>
    );
}

export default Index;