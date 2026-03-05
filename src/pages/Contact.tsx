import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar/>
            <div className="pt-20">
                <ContactSection/> 
            </div>
            <Footer/>
        </div>
    );
}

export default Contact;