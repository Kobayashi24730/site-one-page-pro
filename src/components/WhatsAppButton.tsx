export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 bg-[#25D366] rounded-full shadow-elevated hover:scale-110 transition-transform active:scale-90 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <svg className="w-6 h-6 fill-current text-[#fff]" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.406c0 6.556-5.332 11.888-11.888 11.888-2.01 0-3.986-.51-5.739-1.472l-6.245 1.695zm6.386-4.72l.312.186c1.516.902 3.272 1.378 5.071 1.378 5.303 0 9.615-4.312 9.615-9.615 0-2.569-1.001-4.985-2.817-6.801s-4.232-2.817-6.801-2.817c-5.303 0-9.615 4.312-9.615 9.615 0 2.126.699 4.191 2.023 5.898l.235.303-1.01 3.693 3.787-1.02z" />
      </svg>
    </a>
  );
}
