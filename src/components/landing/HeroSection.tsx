import { Button } from '@/components/ui/button'

type HeroSectionProps = {
  onCtaClick: () => void
}

export const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center text-white overflow-hidden px-4">
      <div className="absolute inset-0 bg-black -z-10" />
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-10" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-[50rem] h-[50rem] bg-primary/20 rounded-full blur-3xl animate-spotlight -z-10" />

      <div className="z-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          COMBO NOVEMBER BLACK
        </h1>
        <p className="mt-2 text-lg font-medium text-primary-foreground">
          EXERCITANDO O CÉREBRO
        </p>
        <img
          src="https://img.usecurling.com/p/600/300?q=creative%20brain%20gears"
          alt="Combo de produtos"
          className="mt-6 mx-auto rounded-lg shadow-lg shadow-primary/20 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        />
        <p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/80 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          A maior oportunidade do ano para quem estimula o cérebro de forma
          criativa e inteligente!
        </p>
        <Button
          size="lg"
          className="mt-8 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          onClick={onCtaClick}
        >
          GARANTA SEU COMBO AGORA!
        </Button>
      </div>
    </section>
  )
}
