export function Footer() {
  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          <div>
            <h4 className="font-serif text-xl text-primary-foreground mb-3">Carlos Eduardo Silva</h4>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Trabalhando por um futuro melhor para nossa cidade.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-primary-foreground text-sm mb-3 uppercase tracking-wider">Links Rápidos</h5>
            <ul className="space-y-2">
              {["Sobre", "Propostas", "Realizações", "Contato"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-primary-foreground text-sm mb-3 uppercase tracking-wider">Legal</h5>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Este site é mantido pela campanha de Carlos Eduardo Silva, conforme legislação eleitoral vigente.
            </p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Carlos Eduardo Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
