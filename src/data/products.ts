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
      { name: 'Atenção Seletiva', price: '15,90' },
      { name: 'Memória de Trabalho', price: '18,90' },
      { name: 'Funções Executivas', price: '22,90' },
      { name: 'Raciocínio Lógico', price: '20,90' },
      { name: 'Linguagem e Vocabulário', price: '16,90' },
    ],
  },
  {
    title: 'Atividades Terapêuticas e Emocionais',
    products: [
      { name: 'Regulação Emocional', price: '19,90' },
      { name: 'Habilidades Sociais', price: '17,90' },
      { name: 'Autoconhecimento', price: '14,90' },
      { name: 'Mindfulness para Crianças', price: '21,90' },
      { name: 'Gestão da Ansiedade', price: '23,90' },
    ],
  },
  {
    title: 'Atividades Temáticas',
    products: [
      { name: 'Tema: Natal', price: '9,90' },
      { name: 'Tema: Páscoa', price: '9,90' },
      { name: 'Tema: Festa Junina', price: '9,90' },
      { name: 'Tema: Férias', price: '11,90' },
      { name: 'Tema: Volta às Aulas', price: '11,90' },
    ],
  },
  {
    title: 'Kits Promocionais',
    products: [
      { name: 'Kit Cognitivo Completo', price: '49,90' },
      { name: 'Kit Emoções em Foco', price: '39,90' },
      { name: 'Kit Temático Anual', price: '45,90' },
    ],
  },
]

export const totalValue = '1.097,20'
