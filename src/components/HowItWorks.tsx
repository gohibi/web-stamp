import { motion } from "framer-motion";
import { QrCode, Stamp, FileCheck, Search } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Génération du QR sécurisé",
    description: "Un code QR unique et chiffré est généré pour chaque document à certifier.",
  },
  {
    icon: Stamp,
    title: "Intégration dans le cachet physique",
    description: "Le QR code est intégré dans un cachet physique professionnel et sécurisé.",
  },
  {
    icon: FileCheck,
    title: "Utilisation sur documents officiels",
    description: "Le cachet est apposé sur vos documents pour les authentifier de manière infalsifiable.",
  },
  {
    icon: Search,
    title: "Vérification en ligne",
    description: "Toute personne peut scanner le QR code pour vérifier l'authenticité du document.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Cachet physique intelligent avec code QR
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comment ça marche
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Un processus simple et sécurisé en 4 étapes pour protéger vos documents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-5">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="absolute top-4 right-4 text-5xl font-bold text-primary/10 font-display">
                {i + 1}
              </span>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
