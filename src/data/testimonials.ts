export type Testimonial = {
  name: string
  role: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ana Silva',
    role: 'Psicóloga',
    quote:
      "Os materiais do 'Exercitando o Cérebro' transformaram minhas sessões. São práticos, criativos e muito eficazes. Meus pacientes adoram!",
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=1',
  },
  {
    name: 'Carlos Pereira',
    role: 'Educador',
    quote:
      'Finalmente encontrei atividades que engajam meus alunos e estimulam o pensamento crítico. O Combo Black November é um investimento incrível.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=2',
  },
  {
    name: 'Juliana Costa',
    role: 'Mãe',
    quote:
      'Como mãe, busco sempre o melhor para o desenvolvimento do meu filho. Esses e-books são uma ferramenta fantástica para estimular a criatividade em casa.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=female&seed=3',
  },
  {
    name: 'Marcos Lima',
    role: 'Terapeuta Ocupacional',
    quote:
      'A variedade e a qualidade do conteúdo são impressionantes. O acesso vitalício aos novos lançamentos é um bônus que torna a oferta irresistível.',
    avatar: 'https://img.usecurling.com/ppl/medium?gender=male&seed=4',
  },
]
