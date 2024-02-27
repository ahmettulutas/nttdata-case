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
