export interface Painting {
  id: string;
  slug: string;
  name: string;
  description: string;
  contact: number;
  imageUrl: string;
  imageHint: string;
  year: number;
}

export const paintings: Painting[] = [
  { id: '1', slug: 'sol-andino', name: 'HALAPIJAPTA', year: 2021, description: 'Una representación vibrante del sol como deidad central en la cosmología andina, utilizando pigmentos naturales sobre lienzo.', contact: +593-99-974-8958, imageUrl: '/media/halapijapta.jpg', imageHint: 'indigenous painting' },
  { id: '2', slug: 'mujer-otavalena', name: 'HANAYI', year: 2022, description: 'Retrato detallado de una mujer de Otavalo, destacando la riqueza de su vestimenta y la serenidad de su expresión.', contact: +593-99-974-8958, imageUrl: '/media/hanayi.jpg', imageHint: 'ecuadorian woman' },
  { id: '3', slug: 'susurro-de-los-andes', name: 'HANIYU', year: 2020, description: 'Obra abstracta que evoca los contornos y colores de la cordillera andina al amanecer.', contact: +593-99-974-8958, imageUrl: '/media/haniyu.jpg', imageHint: 'andean mountains' },
  { id: '4', slug: 'mercado-de-colores', name: 'HAPA', year: 2023, description: 'Escena costumbrista que captura la energía y el colorido de un mercado indígena tradicional.', contact: +593-99-974-8958, imageUrl: '/media/hapa.jpg', imageHint: 'local market' },
  { id: '5', slug: 'guardian-de-lana', name: 'HASHOTO', year: 2022, description: 'Una llama solitaria se recorta contra el paisaje montañoso, simbolizando la resistencia y la conexión con la tierra.', contact: +593-99-974-8958, imageUrl: '/media/hashoto.jpg', imageHint: 'llama landscape' },
  { id: '6', slug: 'tejido-cosmico', name: 'HITACHEPTO', year: 2023, description: 'Inspirado en los patrones textiles de la cultura Cañari, esta pieza explora la dualidad y el equilibrio del universo.', contact: +593-99-974-8958, imageUrl: '/media/hitachepto.jpg', imageHint: 'textile pattern' },
  { id: '7', slug: 'danza-del-inti-raymi', name: 'HONOJAPTATOTI', year: 2019, description: 'Pintura dinámica que celebra la Fiesta del Sol, llena de movimiento y fervor comunitario.', contact: +593-99-974-8958, imageUrl: '/media/honojaptatoti.jpg', imageHint: 'ceremonial dance' },
];
