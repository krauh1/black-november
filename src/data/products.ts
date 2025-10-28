export type Product = {
  name: string
  price: string
}

export type ProductCategory = {
  title: string
  products: Product[]
}

export const productCategories: ProductCategory[] = [
  {
    title: 'Atividades de Estimulação Cognitiva',
    products: [
      { name: '15 Atividades de Desenho', price: '12,90' },
      { name: 'Exercitando a Memória', price: '12,90' },
      { name: '15 Atividades para Atenção', price: '12,90' },
      { name: 'Atividades para Atenção 2', price: '12,90' },
      { name: '15 Atividades de Criatividade', price: '12,90' },
      { name: '16 Atividades de Pintura', price: '12,90' },
      { name: 'Meu Calendário', price: '12,90' },
      { name: 'Ligando Palavras', price: '12,90' },
      { name: 'Atividades para Coordenação Motora Fina', price: '24,90' },
      { name: 'Exercitando o Cérebro', price: '29,90' },
      { name: 'Exercitando o Cérebro 2', price: '34,90' },
      { name: 'Férias divertidas', price: '34,90' },
      { name: 'Dislexia', price: '37,90' },
      { name: 'TDAH', price: '39,90' },
      { name: 'TDAH 2', price: '39,90' },
      { name: 'Idosos', price: '34,90' },
    ],
  },
  {
    title: 'Atividades Terapêuticas e Emocionais',
    products: [
      { name: 'Enfrentando a Ansiedade Social', price: '25,90' },
      { name: 'Baralho Terapêutico para Idosos', price: '25,90' },
      { name: 'Tabuleiro das Habilidades Sociais', price: '34,90' },
      { name: 'Superando a Depressão Infantil', price: '34,90' },
      { name: 'Tabuleiro da Autoestima', price: '34,90' },
      { name: 'Tabuleiro das emoções', price: '34,90' },
      { name: 'Estilos Parentais', price: '34,90' },
      { name: 'Tabuleiro das Distorções Cognitivas', price: '37,90' },
      { name: 'Ciúme: 40 Recursos Terapêuticos Editáveis', price: '49,90' },
    ],
  },
  {
    title: 'Atividades Temáticas',
    products: [
      { name: 'Atividades de Natal', price: '19,90' },
      { name: 'Atividades de Halloween', price: '19,90' },
      { name: 'Atividades de Festa Junina', price: '19,90' },
    ],
  },
  {
    title: 'Kits Promocionais',
    products: [
      {
        name: 'Kit de Atividades Terapêuticas (Raiva, Emoções e Ansiedade)',
        price: '47,00',
      },
      { name: 'Kit de Atividades: Seletividade Alimentar', price: '65,00' },
      { name: 'Habilidades Sociais para Adolescentes', price: '77,00' },
      { name: 'Exercitando o Cérebro Autista', price: '77,00' },
      { name: 'Crianças Desafiadoras (TOD)', price: '77,00' },
    ],
  },
]

export const totalValue = '1.097,20'
