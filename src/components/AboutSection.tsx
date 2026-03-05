import { motion } from "framer-motion";
import { Building2, Landmark, Briefcase, Heart, Scale, Target, Lock, Lightbulb, Zap, ShieldCheck } from "lucide-react";

const audiences = [
  { icon: Briefcase, label: "Entreprises privées" },
  { icon: Landmark, label: "Administrations publiques" },
  { icon: Building2, label: "Institutions financières" },
  { icon: Heart, label: "ONG" },
  { icon: Scale, label: "Cabinets juridiques" },
];

const values = [
  { icon: Lightbulb, label: "Innovation" },
  { icon: ShieldCheck, label: "Sécurité" },
  { icon: Target, label: "Intégrité" },
  { icon: Lock, label: "Confidentialité" },
  { icon: Zap, label: "Performance" },
];

const AboutSection = () => {
  return (
    <section id="nous-connaitre" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Nous connaître
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Qui sommes-nous ?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            STAMP TECH est une solution développée par AE CONSULTING CI, dédiée à la protection,
            l'authentification et la traçabilité des documents professionnels des entreprises et institutions.
          </p>
        </motion.div>

        {/* Audiences */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">
            Nous accompagnons
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-3 shadow-sm"
              >
                <a.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{a.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-8 text-primary-foreground"
          >
            <h3 className="font-display text-2xl font-bold mb-4">Notre mission</h3>
            <p className="text-primary-foreground/85 text-lg leading-relaxed">
              Garantir l'authenticité, la traçabilité et la sécurité des documents professionnels.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border-2 border-primary rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Notre vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Devenir la référence nationale et internationale en matière de certification documentaire intelligente.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-xl font-bold text-foreground text-center mb-8">
            Nos valeurs
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="flex flex-col items-center gap-3 bg-secondary rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">{v.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
