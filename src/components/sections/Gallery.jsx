import AnimatedSection from "@/components/AnimatedSection";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const images = [
  { src: g1, alt: "Discurso em evento público" },
  { src: g2, alt: "Reunião comunitária" },
  { src: g3, alt: "Ação social na comunidade" },
  { src: g4, alt: "Visita a obra de infraestrutura" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Galeria</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="group aspect-square rounded-2xl overflow-hidden shadow-soft">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
