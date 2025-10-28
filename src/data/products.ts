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
        image:
          'https://img.usecurling.com/p/400/300?q=kids%20drawing%20activities',
      },
      {
        name: 'Exercitando a Memória',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=memory%20exercise%20brain',
      },
      {
        name: '15 Atividades para Atenção',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=attention%20focus%20activity',
      },
      {
        name: 'Atividades para Atenção 2',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=attention%20activity%20book',
      },
      {
        name: '15 Atividades de Criatividade',
        price: '12,90',
        image: 'https://img.usecurling.com/p/400/300?q=creativity%20workbook',
      },
      {
        name: '16 Atividades de Pintura',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=painting%20activities%20for%20kids',
      },
      {
        name: 'Meu Calendário',
        price: '12,90',
        image: 'https://img.usecurling.com/p/400/300?q=my%20calendar%20planner',
      },
      {
        name: 'Ligando Palavras',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=word%20association%20game',
      },
      {
        name: 'Atividades para Coordenação Motora Fina',
        price: '24,90',
        image:
          'https://img.usecurling.com/p/400/300?q=fine%20motor%20skills%20activities',
      },
      {
        name: 'Exercitando o Cérebro',
        price: '29,90',
        image: 'https://img.usecurling.com/p/400/300?q=brain%20training%20book',
      },
      {
        name: 'Exercitando o Cérebro 2',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=brain%20exercise%20puzzle',
      },
      {
        name: 'Férias divertidas',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=fun%20holiday%20activities',
      },
      {
        name: 'Dislexia',
        price: '37,90',
        image:
          'https://img.usecurling.com/p/400/300?q=dyslexia%20support%20tools',
      },
      {
        name: 'TDAH',
        price: '39,90',
        image: 'https://img.usecurling.com/p/400/300?q=adhd%20focus%20tools',
      },
      {
        name: 'TDAH 2',
        price: '39,90',
        image:
          'https://img.usecurling.com/p/400/300?q=adhd%20planner%20organizer',
      },
      {
        name: 'Idosos',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=activities%20for%20seniors',
      },
    ],
  },
  {
    title: 'Atividades Terapêuticas e Emocionais',
    products: [
      {
        name: 'Enfrentando a Ansiedade Social',
        price: '25,90',
        image:
          'https://img.usecurling.com/p/400/300?q=social%20anxiety%20workbook',
      },
      {
        name: 'Baralho Terapêutico para Idosos',
        price: '25,90',
        image:
          'https://img.usecurling.com/p/400/300?q=therapy%20cards%20for%20elderly',
      },
      {
        name: 'Tabuleiro das Habilidades Sociais',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=social%20skills%20board%20game',
      },
      {
        name: 'Superando a Depressão Infantil',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=childhood%20depression%20support',
      },
      {
        name: 'Tabuleiro da Autoestima',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=self-esteem%20board%20game',
      },
      {
        name: 'Tabuleiro das emoções',
        price: '34,90',
        image: 'https://img.usecurling.com/p/400/300?q=emotions%20board%20game',
      },
      {
        name: 'Estilos Parentais',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=parenting%20styles%20guide',
      },
      {
        name: 'Tabuleiro das Distorções Cognitivas',
        price: '37,90',
        image:
          'https://img.usecurling.com/p/400/300?q=cognitive%20distortions%20game',
      },
      {
        name: 'Ciúme: 40 Recursos Terapêuticos Editáveis',
        price: '49,90',
        image:
          'https://img.usecurling.com/p/400/300?q=jealousy%20therapy%20resources',
      },
    ],
  },
  {
    title: 'Atividades Temáticas',
    products: [
      {
        name: 'Atividades de Natal',
        price: '19,90',
        image:
          'https://img.usecurling.com/p/400/300?q=christmas%20activities%20for%20kids',
      },
      {
        name: 'Atividades de Halloween',
        price: '19,90',
        image:
          'https://img.usecurling.com/p/400/300?q=halloween%20crafts%20for%20kids',
      },
      {
        name: 'Atividades de Festa Junina',
        price: '19,90',
        image:
          'https://img.usecurling.com/p/400/300?q=brazilian%20june%20party%20activities',
      },
    ],
  },
  {
    title: 'Kits Promocionais',
    products: [
      {
        name: 'Kit de Atividades Terapêuticas (Raiva, Emoções e Ansiedade)',
        price: '47,00',
        image:
          'https://img.usecurling.com/p/400/300?q=therapy%20activity%20kit',
      },
      {
        name: 'Kit de Atividades: Seletividade Alimentar',
        price: '65,00',
        image:
          'https://img.usecurling.com/p/400/300?q=picky%20eater%20activity%20kit',
      },
      {
        name: 'Habilidades Sociais para Adolescentes',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=social%20skills%20for%20teens',
      },
      {
        name: 'Exercitando o Cérebro Autista',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=autism%20brain%20exercises',
      },
      {
        name: 'Crianças Desafiadoras (TOD)',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=challenging%20children%20odd%20support',
      },
    ],
  },
]

export const totalValue = '1.097,20'
