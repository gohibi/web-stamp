import { motion } from "framer-motion";
import { QrCode, PenTool, Archive, Check } from "lucide-react";

const solutions = [
  {
    icon: QrCode,
    title: "Cachet Physique Intelligent avec QR Code",
    subtitle: "Solution 1",
    description: "Un cachet sécurisé intégrant un QR Code unique permettant une vérification immédiate via notre plateforme.",
    features: [
      "Lutte contre la fraude documentaire",
      "Protection de l'image institutionnelle",
      "Traçabilité des documents",
    ],
  },
  {
    icon: PenTool,
    title: "Signature Électronique Sécurisée",
    subtitle: "Solution 2",
    description: "Plateforme sécurisée permettant la signature à distance avec horodatage certifié.",
    features: [
      "Signature à distance",
      "Horodatage certifié",
      "Journal d'audit",
      "Intégrité du document",
      "Réduction des délais",
      "Sécurisation juridique",
      "Optimisation des processus",
    ],
  },
  {
    icon: Archive,
    title: "Archivage Numérique Professionnel",
    subtitle: "Solution 3",
    description: "Un système d'archivage structuré, sécurisé et accessible.",
    features: [
      "Classement intelligent",
      "Recherche rapide",
      "Accès multi-niveaux",
      "Sauvegarde automatique",
      "Traçabilité des accès",
    ],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Nos solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Des solutions complètes pour sécuriser vos documents
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trois piliers technologiques au service de la confiance documentaire.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl border border-border p-8 flex flex-col hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                {sol.subtitle}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <sol.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {sol.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {sol.description}
              </p>
              <div className="mt-auto space-y-2">
                {sol.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
