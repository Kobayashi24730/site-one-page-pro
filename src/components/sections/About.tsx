import AnimatedSection from "@/components/AnimatedSection";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Missão", desc: "Servir ao povo com transparência e dedicação, garantindo que cada recurso público gere impacto real na vida das pessoas." },
  { icon: Eye, title: "Visão", desc: "Uma cidade referência em qualidade de vida, onde educação, saúde e segurança são direitos garantidos a todos." },
  { icon: Heart, title: "Valores", desc: "Ética, honestidade, proximidade com o cidadão e compromisso com resultados mensuráveis." },
];

const timeline = [
  { year: "2008", event: "Formado em Direito pela Universidade Federal" },
  { year: "2012", event: "Eleito vereador com mais de 15 mil votos" },
  { year: "2016", event: "Reeleito com votação recorde no município" },
  { year: "2020", event: "Eleito deputado estadual — líder de bancada" },
  { year: "2024", event: "Candidato a prefeito — por uma cidade melhor" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Sobre Mim</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nascido e criado nesta cidade, dedico minha vida à política como ferramenta de transformação social. 
            Com mais de 15 anos de experiência no serviço público, acredito que a mudança começa pelo diálogo.
          </p>
        </AnimatedSection>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1} className="p-8 rounded-2xl bg-background shadow-soft text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Timeline */}
        <AnimatedSection>
          <h3 className="text-2xl font-serif text-primary text-center mb-12">Trajetória</h3>
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            {timeline.map((t, i) => (
              <AnimatedSection key={t.year} delay={i * 0.08} className="relative flex items-start gap-6 mb-8 md:even:flex-row-reverse md:even:text-right">
                <div className="hidden md:block flex-1" />
                <div className="relative z-10 w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-accent-foreground" />
                </div>
                <div className="flex-1 pb-2">
                  <span className="text-sm font-bold text-accent">{t.year}</span>
                  <p className="text-primary font-medium mt-1">{t.event}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
