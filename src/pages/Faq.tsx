import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Faq = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <FaqSection />
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
