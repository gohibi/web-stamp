import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

const GallerySection = () => {
  return (
    <section id="galerie" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Galerie
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nos réalisations en images
          </h2>
        </motion.div>

        {/* Placeholder grid for future images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square bg-secondary rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-3"
            >
              <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
              <span className="text-xs text-muted-foreground/50 font-medium">
                Image à venir
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
