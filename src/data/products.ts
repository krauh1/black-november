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
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-15-ATIVIDADES-DE-DESENHO.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Exercitando a Memória',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-EXERCITANDO-A-MEMORIA.png?resize=400%2C300&ssl=1',
      },
      {
        name: '15 Atividades para Atenção',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-15-ATIVIDADES-PARA-ATENCAO.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Atividades para Atenção 2',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ATIVIDADES-PARA-ATENCAO-2.png?resize=400%2C300&ssl=1',
      },
      {
        name: '15 Atividades de Criatividade',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-15-ATIVIDADES-DE-CRIATIVIDADE.png?resize=400%2C300&ssl=1',
      },
      {
        name: '16 Atividades de Pintura',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-16-ATIVIDADES-DE-PINTURA.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Meu Calendário',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-MEU-CALENDARIO.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Ligando Palavras',
        price: '12,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-LIGANDO-PALAVRAS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Atividades para Coordenação Motora Fina',
        price: '24,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ATIVIDADES-PARA-COORDENACAO-MOTORA-FINA.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Exercitando o Cérebro',
        price: '29,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-EXERCITANDO-O-CEREBRO.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Exercitando o Cérebro 2',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-EXERCITANDO-O-CEREBRO-2.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Férias divertidas',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-FERIAS-DIVERTIDAS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Dislexia',
        price: '37,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-DISLEXIA.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'TDAH',
        price: '39,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TDAH.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'TDAH 2',
        price: '39,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TDAH-2.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Idosos',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-IDOSOS.png?resize=400%2C300&ssl=1',
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
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ENFRENTANDO-A-ANSIEDADE-SOCIAL.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Baralho Terapêutico para Idosos',
        price: '25,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-BARALHO-TERAPEUTICO-PARA-IDOSOS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Tabuleiro das Habilidades Sociais',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TABULEIRO-DAS-HABILIDADES-SOCIAIS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Superando a Depressão Infantil',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-SUPERANDO-A-DEPRESSAO-INFANTIL.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Tabuleiro da Autoestima',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TABULEIRO-DA-AUTOESTIMA.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Tabuleiro das emoções',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TABULEIRO-DAS-EMOCOES.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Estilos Parentais',
        price: '34,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ESTILOS-PARENTAIS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Tabuleiro das Distorções Cognitivas',
        price: '37,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-TABULEIRO-DAS-DISTORCOES-COGNITIVAS.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Ciúme: 40 Recursos Terapêuticos Editáveis',
        price: '49,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-CIUME-40-RECURSOS-TERAPEUTICOS-EDITAVEIS.png?resize=400%2C300&ssl=1',
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
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ATIVIDADES-DE-NATAL.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Atividades de Halloween',
        price: '19,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ATIVIDADES-DE-HALLOWEEN.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Atividades de Festa Junina',
        price: '19,90',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-ATIVIDADES-DE-FESTA-JUNINA.png?resize=400%2C300&ssl=1',
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
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-KIT-DE-ATIVIDADES-TERAPEUTICAS-RAIVA-EMOCOES-E-ANSIEDADE.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Kit de Atividades: Seletividade Alimentar',
        price: '65,00',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-KIT-DE-ATIVIDADES-SELETIVIDADE-ALIMENTAR.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Habilidades Sociais para Adolescentes',
        price: '77,00',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-HABILIDADES-SOCIAIS-PARA-ADOLESCENTES.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Exercitando o Cérebro Autista',
        price: '77,00',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-EXERCITANDO-O-CEREBRO-AUTISTA.png?resize=400%2C300&ssl=1',
      },
      {
        name: 'Crianças Desafiadoras (TOD)',
        price: '77,00',
        image:
          'https://i0.wp.com/exercitandoocerebro.com/wp-content/uploads/2023/09/CAPA-CRIANCAS-DESAFIADORAS-TOD.png?resize=400%2C300&ssl=1',
      },
    ],
  },
]

export const totalValue = '1.097,20'
