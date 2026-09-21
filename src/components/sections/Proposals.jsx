import AnimatedSection from "@/components/AnimatedSection";
import { BookOpen, HeartPulse, Shield, Building2 } from "lucide-react";

const proposals = [
  { title: "Educação", desc: "Ampliação de vagas em creches, escolas em tempo integral e valorização dos profissionais da educação.", icon: BookOpen },
  { title: "Saúde", desc: "Modernização das UBS, redução das filas de exames e investimento em saúde preventiva.", icon: HeartPulse },
  { title: "Segurança", desc: "Iluminação inteligente, monitoramento integrado e policiamento comunitário eficaz.", icon: Shield },
  { title: "Infraestrutura", desc: "Pavimentação sustentável, mobilidade urbana e saneamento básico para todos os bairros.", icon: Building2 },
];

export function Proposals() {
  return (
    <section id="propostas" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Propostas para Avançar</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {proposals.map((item, idx) => (
            <AnimatedSection key={item.title} delay={idx * 0.1}>
              <div className="group p-8 rounded-2xl bg-card shadow-soft hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
