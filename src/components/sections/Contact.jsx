import { useState } from "react";
import { Send, Instagram, Facebook, Youtube } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Nome obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  message: z.string().trim().min(1, "Mensagem obrigatória").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  /** @param {React.FormEvent<HTMLFormElement} e */
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-4">Fale Comigo</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Sua opinião é fundamental. Envie sua mensagem, sugestão ou dúvida.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                />
                {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <textarea
                  placeholder="Sua mensagem"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-card border border-border text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow resize-none"
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold shadow-soft hover:opacity-90 transition-all active:scale-95"
              >
                <Send size={16} />
                Enviar Mensagem
              </button>
              {sent && (
                <p className="text-accent font-medium text-sm">Mensagem enviada com sucesso! ✓</p>
              )}
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-primary mb-4">Redes Sociais</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Acompanhe nosso trabalho diário e participe das discussões nas redes sociais.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all"
                  aria-label={s.label}
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
