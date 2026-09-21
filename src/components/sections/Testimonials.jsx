import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Maria Aparecida Santos",
    role: "Professora, 52 anos",
    text: "Graças ao programa de valorização dos professores, conseguimos melhores condições de trabalho e nossos alunos estão mais motivados do que nunca.",
  },
  {
    name: "José Carlos Oliveira",
    role: "Empresário local",
    text: "O apoio às pequenas empresas foi fundamental para que meu negócio sobrevivesse e crescesse. Um político que realmente entende as necessidades do comércio.",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Líder comunitária",
    text: "Pela primeira vez, sentimos que temos voz. As reuniões comunitárias trouxeram soluções reais para o nosso bairro.",
  },
];

export function Testimonials() {
  //? Logica para mudar o texto e percorer a array testimonials
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1)); //? Anteriror
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1)); //? Proximo
  const t = testimonials[idx];

  return (
    <section id="depoimentos" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary-foreground mb-4">O Que Dizem Sobre Nós</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <Quote className="w-10 h-10 text-accent mx-auto mb-6" />
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 min-h-[6rem]">
            "{t.text}"
          </p>
          <p className="font-bold text-primary-foreground">{t.name}</p>
          <p className="text-primary-foreground/60 text-sm">{t.role}</p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === idx ? "bg-accent" : "bg-primary-foreground/30"}`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/10 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
