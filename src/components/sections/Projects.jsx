import AnimatedSection from "@/components/AnimatedSection";
import projectCommunity from "@/assets/project-community.jpg";
import projectEducation from "@/assets/project-education.jpg";
import projectHealth from "@/assets/project-health.jpg";

const projects = [
  {
    title: "Programa Comunidade Viva",
    desc: "Mais de 50 bairros atendidos com ações de cidadania, saúde e educação. Impactamos mais de 20 mil famílias diretamente.",
    img: projectCommunity,
  },
  {
    title: "Creche Futuro Brilhante",
    desc: "Inauguração de 3 novas creches com capacidade para 600 crianças, equipadas com espaços modernos de aprendizagem.",
    img: projectEducation,
  },
  {
    title: "UBS Nova Esperança",
    desc: "Modernização completa de 5 unidades de saúde com equipamentos de última geração e ampliação do horário de atendimento.",
    img: projectHealth,
  },
];

export function Projects() {
  return (
    <section id="realizacoes" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Realizações</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.12}>
              <div className="group rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 bg-background">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
