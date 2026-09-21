import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const opcoes = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Propostas", href: "#propostas" },
  { label: "Realizações", href: "#realizacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#inicio" className="font-serif text-xl text-primary tracking-tight">
          Guilherme Silva
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {opcoes.map((i) => (
            <li key={i.href}>
              <a
                href={i.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden md:inline-flex px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Fale Comigo
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-primary"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-1">
              {opcoes.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="inline-flex mt-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold"
                >
                  Fale Comigo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
