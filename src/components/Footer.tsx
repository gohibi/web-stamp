import { Link } from "react-router-dom";
import logo from "../assets/logo_stamp_tech-BY25aotN.jpeg"; // Adjust the path based on your actual logo location

const Footer = () =>{
    return (
        <footer className="bg-foreground text-background py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                     <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img 
                                src={logo} 
                                alt="Stamp Tech Ivoire" 
                                width={50}
                                height={50}
                                className="h-8 w-auto object-contain"
                            />
                            <span className="font-display text-lg font-bold">STAMP TECH IVOIRE</span>
                        </div>
                        <p className="text-background/60 text-sm leading-relaxed">
                        Certification documentaire intelligente. Une initiative de AE CONSULTING CI.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Navigation</h4>
                        <div className="flex flex-col gap-2">
                        <Link to="/" className="text-background/60 hover:text-background text-sm transition-colors">Accueil</Link>
                        <Link to="/nous-connaitre" className="text-background/60 hover:text-background text-sm transition-colors">Nous connaître</Link>
                        <Link to="/solutions" className="text-background/60 hover:text-background text-sm transition-colors">Solutions</Link>
                        <Link to="/galerie" className="text-background/60 hover:text-background text-sm transition-colors">Galerie</Link>
                        <Link to="/faq" className="text-background/60 hover:text-background text-sm transition-colors">FAQ</Link>
                        <Link to="/contact" className="text-background/60 hover:text-background text-sm transition-colors">Contact</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Légal</h4>
                        <div className="flex flex-col gap-2">
                        <span className="text-background/60 text-sm">Mentions légales</span>
                        <span className="text-background/60 text-sm">Politique de confidentialité</span>
                        <span className="text-background/60 text-sm">Conditions d'utilisation</span>
                        </div>
                    </div>

                </div>
                <div className="border-t border-background/10 pt-6 text-center">
                    <p className="text-background/50 text-sm">
                        © {new Date().getFullYear()} STAMP TECH IVOIRE. Tous droits réservés. — www.stamptechivoire.com
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
