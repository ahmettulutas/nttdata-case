/* eslint-disable quotes */
import image1 from '@/assets/carousel-images/image1.jpeg';
import image2 from '@/assets/carousel-images/image2.jpeg';
import image3 from '@/assets/carousel-images/image3.jpeg';
import image4 from '@/assets/carousel-images/image4.jpeg';
import facebook from '@/assets/social-icons/facebook.svg';
import instagram from '@/assets/social-icons/instagram.svg';
import linkedin from '@/assets/social-icons/linkedin.svg';

export const navLinks = [
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
  { id: '/', text: 'Menu Item' },
] as const;

export const carouselImages = [image1, image2, image3, image4];

export const contactInfos = {
  email: 'contact@nttdata.com',
  phone: '+3 9876 765 444',
};
export const socialLinks = [
  {
    logo: facebook,
    url: 'https://www.facebook.com/',
  },
  {
    logo: instagram,
    url: 'https://www.instagram.com/',
  },
  {
    logo: linkedin,
    url: 'https://www.linkedin.com/',
  },
];

export const dummyproducts = [
  {
    id: 1,
    name: 'Cips',
    description:
      "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
    imageUrl: 'https://loremflickr.com/640/480',
    price: '2865.00',
    shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
  },
  {
    id: 2,
    name: 'Bilgisayar',
    description:
      'Otomobil düzeni, motorun arkasına monte edilmiş transaks tipi şanzımanlar ve dört tekerlekten çekiş ile bir ön motor tasarımından oluşur',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '4123.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 3,
    name: 'Tavuk',
    description:
      'Apollotech B340, güvenilir bağlantıya, 12 aylık pil ömrüne ve modern tasarıma sahip uygun fiyatlı bir kablosuz faredir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '7646.00',
    shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
  },
  {
    id: 4,
    name: 'Havlu',
    description:
      "Dev Byte'ın ince ve basit Maple Oyun Klavyesi, şık bir gövde ve akıllı işlevsellik için 7 Renkli RGB LED Arka Aydınlatma ile birlikte gelir",
    imageUrl: 'https://loremflickr.com/640/480',
    price: '4236.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 5,
    name: 'Pantolon',
    description: 'Futbol Antrenman Ve Rekreasyon Amaçlı İyidir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '14373.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 6,
    name: 'Gömlek',
    description:
      'Yeni ABC 13 9370, 13.3, 5. Nesil CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '1218.00',
    shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
  },
  {
    id: 7,
    name: 'Kayseri Pastırması',
    description:
      'Doğal bileşenlerin heyecan verici bir karışımına sahip güzel Apple Naturalé serisi. %100 Doğal İçeriğin İyiliği ile',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '19405.00',
    shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
  },
  {
    id: 8,
    name: 'Bisiklet',
    description:
      // eslint-disable-next-line quotes
      "Boston'un en gelişmiş kompresyon aşınması teknolojisi, kas oksijenlenmesini artırır, aktif kasları stabilize eder",
    imageUrl: 'https://loremflickr.com/640/480',
    price: '7603.00',
    shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
  },
  {
    id: 9,
    name: 'Ayakkabı',
    description:
      'Apollotech B340, güvenilir bağlantıya, 12 aylık pil ömrüne ve modern tasarıma sahip uygun fiyatlı bir kablosuz faredir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '761.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 10,
    name: 'Pizza',
    description:
      'Apollotech B340, güvenilir bağlantıya, 12 aylık pil ömrüne ve modern tasarıma sahip uygun fiyatlı bir kablosuz faredir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '1340.00',
    shippingMethod: 'Ücretsiz - Aynı Gün Kargo',
  },
  {
    id: 11,
    name: 'Salata',
    description:
      'Apollotech B340, güvenilir bağlantıya, 12 aylık pil ömrüne ve modern tasarıma sahip uygun fiyatlı bir kablosuz faredir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '7965.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 12,
    name: 'Tablo',
    description:
      'Gün boyu konfor ve destek için yapıştırılmış siyah deri ve PVC dolgulu koltuk ve sırt ile kaplanmış ergonomik yönetici koltuğu',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '11850.00',
    shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
  },
  {
    id: 13,
    name: 'Pizza',
    description:
      'Otomobil düzeni, motorun arkasına monte edilmiş transaks tipi şanzımanlar ve dört tekerlekten çekiş ile bir ön motor tasarımından oluşur',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '12700.00',
    shippingMethod: 'Ücretli - 2 Gün İçinde Teslim',
  },
  {
    id: 14,
    name: 'Peynir',
    description:
      'Yeni forma gömlek çeşitleri sizi göz önünde bulundurarak tasarlandı. Sizi farklı kılacak kesimler ve stiller ile',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '19644.00',
    shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
  },
  {
    id: 15,
    name: 'Bisiklet',
    description: 'Futbol Antrenman Ve Rekreasyon Amaçlı İyidir',
    imageUrl: 'https://loremflickr.com/640/480',
    price: '12335.00',
    shippingMethod: 'Ücretli - 1 Hafta İçinde Teslim',
  },
];
