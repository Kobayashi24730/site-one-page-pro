import { motion } from "framer-motion";
import heroImg from "@/assets/hero-politician.png";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Luzes de Fundo no estilo Fluent Design */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/15 rounded-full blur-[130px] pointer-events-none -z-0" />
      <div className="absolute -top-10 -right-10 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-0 relative z-10">
        {/* Lado Esquerdo: Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider uppercase mb-6 border border-accent/20 backdrop-blur-md">
            Compromisso com o Futuro
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-primary leading-tight mb-6">
            Trabalhando por um<span className="italic text-accent"> amanhã</span> melhor.
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed">
            Construindo soluções reais para os desafios da nossa cidade com transparência, ética e participação popular.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#sobre"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-lg shadow-primary/20 hover:opacity-95 hover:shadow-xl transition-all active:scale-95 active:opacity-90"
            >
              Conheça minha história
            </a>
            <a
              href="#contato"
              className="px-8 py-4 bg-background/60 backdrop-blur-md text-primary border border-border/80 rounded-xl font-semibold hover:bg-secondary/60 transition-all shadow-sm"
            >
              Fale comigo
            </a>
          </div>
        </motion.div>

        {/* Lado Direito: Foto com mascara de suavização na base */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative flex justify-center items-center py-10 min-h-[500px]"
        >
          <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] translate-y-6 flex justify-center items-center">
            
            {/* Círculo Principal */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-card/90 via-card/50 to-accent/20 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl z-0" />

            {/* Anel Externo Giratório */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full border border-dashed border-accent/30 pointer-events-none z-0"
            />

            {/* Foto em primeiro plano com degrader na base */}
            <img
              src={heroImg}
              alt="Foto em primeiro plano"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] max-w-none object-cover drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] z-10 pointer-events-none"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 85%)",
                maskImage: "linear-gradient(to bottom, black 60%, transparent 88%)"
              }}
            />
          </div>

          {/* Quadrados fluentes */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-2 sm:right-6 w-16 h-16 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg z-0"
          />

          <motion.div
            animate={{ y: [6, -10, 6], rotate: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-12 left-2 sm:left-4 w-12 h-12 bg-accent/20 backdrop-blur-md border border-accent/30 rounded-xl shadow-md z-20"
          />

          <motion.div
            animate={{ y: [-12, 6, -12], rotate: [12, -6, 12] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-2 left-0 sm:left-2 w-20 h-20 bg-primary/10 backdrop-blur-lg border border-primary/20 rounded-3xl shadow-xl z-0"
          />

          <motion.div
            animate={{ y: [8, -8, 8], rotate: [-8, 8, -8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-6 right-2 sm:right-4 w-14 h-14 bg-accent/30 backdrop-blur-md border border-accent/40 rounded-2xl shadow-lg z-20"
          />
        </motion.div>
      </div>
    </section>
  );
}