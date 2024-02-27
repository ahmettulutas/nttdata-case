import { Carousel } from './components/carousel';
import Footer from './components/layouts/footer/footer';
import { Navbar } from './components/layouts/navbar/navbar';
import { carouselImages } from './lib/constants';

export default function App() {
  return (
    <div>
      <Navbar />
      <Carousel imageCarousel images={carouselImages} loop showDots speed={3000} />
      <Footer />
    </div>
  );
}
