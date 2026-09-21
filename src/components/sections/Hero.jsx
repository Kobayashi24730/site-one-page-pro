import { motion } from "framer-motion";
import heroImg from "@/assets/hero-politician.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-6">
            Compromisso com o Futuro
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-primary leading-tight mb-6">
            Trabalhando por um{" "}
            <span className="italic text-accent">amanhã</span> melhor.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
            Construindo soluções reais para os desafios da nossa cidade com transparência, ética e participação popular.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#sobre"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:opacity-90 transition-all active:scale-95"
            >
              Conheça minha história
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-card text-primary border border-border rounded-xl font-semibold hover:bg-secondary transition-all"
            >
              Fale comigo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elevated relative z-10">
            <img
              src={heroImg}
              alt="Carlos Eduardo Silva"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-0" />
        </motion.div>
      </div>
    </section>
  );
}
