export type Product = {
  name: string
  price: string
  image: string
}

export type ProductCategory = {
  title: string
  products: Product[]
}

export const productCategories: ProductCategory[] = [
  {
    title: 'Atividades de Estimulação Cognitiva',
    products: [
      {
        name: '15 Atividades de Desenho',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/01desenho.jpg',
      },
      {
        name: 'Exercitando a Memória',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/02memoria.jpg',
      },
      {
        name: '15 Atividades para Atenção',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/03atencao.jpg',
      },
      {
        name: 'Atividades para Atenção 2',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/04atencao.jpg',
      },
      {
        name: '15 Atividades de Criatividade',
        price: '12,90',
        image:
          'https://exercitandoocerebro.com/black-images/05criatividade.jpg',
      },
      {
        name: '16 Atividades de Pintura',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/06pintura.jpg',
      },
      {
        name: 'Meu Calendário',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/07calendario.jpg',
      },
      {
        name: 'Ligando Palavras',
        price: '12,90',
        image: 'https://exercitandoocerebro.com/black-images/08palavras.jpg',
      },
      {
        name: 'Atividades para Coordenação Motora Fina',
        price: '24,90',
        image: 'https://exercitandoocerebro.com/black-images/09coordenacao.jpg',
      },
      {
        name: 'Exercitando o Cérebro',
        price: '29,90',
        image: 'https://exercitandoocerebro.com/black-images/10cerebro.jpg',
      },
      {
        name: 'Exercitando o Cérebro 2',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/11cerebro.jpg',
      },
      {
        name: 'Férias divertidas',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/12ferias.jpg',
      },
      {
        name: 'Dislexia',
        price: '37,90',
        image: 'https://exercitandoocerebro.com/black-images/13dislexia.jpg',
      },
      {
        name: 'TDAH',
        price: '39,90',
        image: 'https://exercitandoocerebro.com/black-images/14tdah.jpg',
      },
      {
        name: 'TDAH 2',
        price: '39,90',
        image: 'https://exercitandoocerebro.com/black-images/15tdah.jpg',
      },
      {
        name: 'Idosos',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/16idosos.jpg',
      },
    ],
  },
  {
    title: 'Atividades Terapêuticas e Emocionais',
    products: [
      {
        name: 'Enfrentando a Ansiedade Social',
        price: '25,90',
        image: 'https://exercitandoocerebro.com/black-images/17ansiedade.jpg',
      },
      {
        name: 'Baralho Terapêutico para Idosos',
        price: '25,90',
        image: 'https://exercitandoocerebro.com/black-images/18baralho.jpg',
      },
      {
        name: 'Tabuleiro das Habilidades Sociais',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/19tabuleiro.jpg',
      },
      {
        name: 'Superando a Depressão Infantil',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/20depressao.jpg',
      },
      {
        name: 'Tabuleiro da Autoestima',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/21autoestima.jpg',
      },
      {
        name: 'Tabuleiro das emoções',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/22emocoes.jpg',
      },
      {
        name: 'Estilos Parentais',
        price: '34,90',
        image: 'https://exercitandoocerebro.com/black-images/23parentais.jpg',
      },
      {
        name: 'Tabuleiro das Distorções Cognitivas',
        price: '37,90',
        image: 'https://exercitandoocerebro.com/black-images/24distorcoes.jpg',
      },
      {
        name: 'Ciúme: 40 Recursos Terapêuticos Editáveis',
        price: '49,90',
        image: 'https://exercitandoocerebro.com/black-images/25ciume.jpg',
      },
    ],
  },
  {
    title: 'Atividades Temáticas',
    products: [
      {
        name: 'Atividades de Natal',
        price: '19,90',
        image: 'https://exercitandoocerebro.com/black-images/26natal.jpg',
      },
      {
        name: 'Atividades de Halloween',
        price: '19,90',
        image: 'https://exercitandoocerebro.com/black-images/27halloween.jpg',
      },
      {
        name: 'Atividades de Festa Junina',
        price: '19,90',
        image: 'https://exercitandoocerebro.com/black-images/28junina.jpg',
      },
    ],
  },
  {
    title: 'Kits Promocionais',
    products: [
      {
        name: 'Kit de Atividades Terapêuticas (Raiva, Emoções e Ansiedade)',
        price: '47,00',
        image: 'https://exercitandoocerebro.com/black-images/29emocoes.jpg',
      },
      {
        name: 'Kit de Atividades: Seletividade Alimentar',
        price: '65,00',
        image:
          'https://exercitandoocerebro.com/black-images/30seletividade.jpg',
      },
      {
        name: 'Habilidades Sociais para Adolescentes',
        price: '77,00',
        image: 'https://exercitandoocerebro.com/black-images/31habilidades.jpg',
      },
      {
        name: 'Exercitando o Cérebro Autista',
        price: '77,00',
        image: 'https://exercitandoocerebro.com/black-images/32autista.jpg',
      },
      {
        name: 'Crianças Desafiadoras (TOD)',
        price: '77,00',
        image: 'https://exercitandoocerebro.com/black-images/33criancas.jpg',
      },
    ],
  },
]

export const totalValue = '1.097,20'
