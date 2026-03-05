import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "À quoi sert le cachet QR ?",
    a: "Le cachet QR permet d'authentifier un document de manière infalsifiable. En intégrant un code QR unique et chiffré dans un cachet physique, chaque document peut être vérifié instantanément pour confirmer son authenticité.",
  },
  {
    q: "Peut-on falsifier un QR code ?",
    a: "Non. Nos QR codes sont générés avec un chiffrement de niveau bancaire. Chaque code est unique, horodaté et lié à un document spécifique. Toute tentative de duplication ou de modification est détectée immédiatement.",
  },
  {
    q: "Qui peut utiliser la solution ?",
    a: "Notre solution est conçue pour les entreprises privées, les administrations publiques, les institutions financières, les ONG et les cabinets juridiques. Elle s'adapte à tout organisme ayant besoin de sécuriser ses documents.",
  },
  {
    q: "Le QR fonctionne-t-il à l'international ?",
    a: "Oui. Notre système de vérification est accessible depuis n'importe quel pays via un simple navigateur web. Les documents certifiés par STAMP TECH sont reconnaissables et vérifiables partout dans le monde.",
  },
  {
    q: "Que faire en cas de QR invalide ?",
    a: "Si un QR code s'avère invalide lors de la vérification, cela signifie que le document est potentiellement frauduleux. Nous vous recommandons de contacter immédiatement l'organisme émetteur et notre service d'assistance.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions fréquentes
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`item-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
