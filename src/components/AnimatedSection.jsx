import { motion } from "framer-motion";


//? Animação de entrada de elementos(Aquela que aparece da esquerda para a direita).
//? Pode ser usado em qualquer componente ou seja import ele no componente que deseja animar e coloque o conteudo entres as chaves.
//? Espero que tenha entendido.
export default function AnimatedSection({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
