import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/SolutionsSection";
import Footer from "@/components/Footer";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <SolutionsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Solutions;
