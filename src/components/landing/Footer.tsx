export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="w-full py-8 border-t border-white/10">
      <div className="container mx-auto text-center text-muted-foreground">
        <img
          src="https://exercitandoocerebro.com/black-images/logobranco.svg"
          alt="Exercitando o Cérebro Logo"
          className="w-12 h-12 mx-auto mb-4 opacity-50"
        />
        <p>
          &copy; {currentYear} Exercitando o Cérebro. Todos os direitos
          reservados.
        </p>
        <a
          href="https://exercitandoocerebro.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:text-primary transition-colors"
        >
          exercitandoocerebro.com
        </a>
      </div>
    </footer>
  )
}
