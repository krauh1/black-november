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
        image: 'https://img.usecurling.com/p/400/300?q=child%20drawing',
      },
      {
        name: 'Exercitando a Memória',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=elderly%20person%20playing%20chess',
      },
      {
        name: '15 Atividades para Atenção',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20focused%20on%20task',
      },
      {
        name: 'Atividades para Atenção 2',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=student%20studying%20intently',
      },
      {
        name: '15 Atividades de Criatividade',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20painting%20canvas',
      },
      {
        name: '16 Atividades de Pintura',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=hands%20with%20paint%20brushes',
      },
      {
        name: 'Meu Calendário',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20organizing%20calendar',
      },
      {
        name: 'Ligando Palavras',
        price: '12,90',
        image:
          'https://img.usecurling.com/p/400/300?q=people%20playing%20scrabble',
      },
      {
        name: 'Atividades para Coordenação Motora Fina',
        price: '24,90',
        image:
          'https://img.usecurling.com/p/400/300?q=child%20threading%20beads',
      },
      {
        name: 'Exercitando o Cérebro',
        price: '29,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20solving%20puzzle',
      },
      {
        name: 'Exercitando o Cérebro 2',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=group%20solving%20rubiks%20cube',
      },
      {
        name: 'Férias divertidas',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=family%20laughing%20on%20the%20beach',
      },
      {
        name: 'Dislexia',
        price: '37,90',
        image:
          'https://img.usecurling.com/p/400/300?q=teacher%20helping%20student%20read',
      },
      {
        name: 'TDAH',
        price: '39,90',
        image:
          'https://img.usecurling.com/p/400/300?q=child%20focused%20on%20building%20blocks',
      },
      {
        name: 'TDAH 2',
        price: '39,90',
        image:
          'https://img.usecurling.com/p/400/300?q=therapist%20with%20energetic%20child',
      },
      {
        name: 'Idosos',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=happy%20elderly%20couple%20gardening',
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
          'https://img.usecurling.com/p/400/300?q=support%20group%20talking',
      },
      {
        name: 'Baralho Terapêutico para Idosos',
        price: '25,90',
        image:
          'https://img.usecurling.com/p/400/300?q=seniors%20playing%20cards',
      },
      {
        name: 'Tabuleiro das Habilidades Sociais',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=children%20playing%20board%20game',
      },
      {
        name: 'Superando a Depressão Infantil',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=child%20smiling%20with%20therapist',
      },
      {
        name: 'Tabuleiro da Autoestima',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20looking%20confidently%20in%20mirror',
      },
      {
        name: 'Tabuleiro das emoções',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=child%20expressing%20emotions',
      },
      {
        name: 'Estilos Parentais',
        price: '34,90',
        image:
          'https://img.usecurling.com/p/400/300?q=parents%20playing%20with%20child',
      },
      {
        name: 'Tabuleiro das Distorções Cognitivas',
        price: '37,90',
        image:
          'https://img.usecurling.com/p/400/300?q=person%20in%20deep%20thought',
      },
      {
        name: 'Ciúme: 40 Recursos Terapêuticos Editáveis',
        price: '49,90',
        image:
          'https://img.usecurling.com/p/400/300?q=couple%20having%20a%20serious%20conversation',
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
          'https://img.usecurling.com/p/400/300?q=family%20decorating%20christmas%20tree',
      },
      {
        name: 'Atividades de Halloween',
        price: '19,90',
        image:
          'https://img.usecurling.com/p/400/300?q=kids%20in%20halloween%20costumes',
      },
      {
        name: 'Atividades de Festa Junina',
        price: '19,90',
        image:
          'https://img.usecurling.com/p/400/300?q=people%20at%20brazilian%20junina%20party',
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
          'https://img.usecurling.com/p/400/300?q=therapist%20comforting%20patient',
      },
      {
        name: 'Kit de Atividades: Seletividade Alimentar',
        price: '65,00',
        image:
          'https://img.usecurling.com/p/400/300?q=child%20trying%20new%20vegetables',
      },
      {
        name: 'Habilidades Sociais para Adolescentes',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=teenagers%20talking%20and%20laughing',
      },
      {
        name: 'Exercitando o Cérebro Autista',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=autistic%20child%20playing%20with%20sensory%20toys',
      },
      {
        name: 'Crianças Desafiadoras (TOD)',
        price: '77,00',
        image:
          'https://img.usecurling.com/p/400/300?q=parent%20calming%20down%20a%20frustrated%20child',
      },
    ],
  },
]

export const totalValue = '1.097,20'
