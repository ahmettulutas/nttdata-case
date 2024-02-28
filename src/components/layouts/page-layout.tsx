import { Navbar } from './navbar/navbar';
import Footer from './footer/footer';

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ display: 'grid', gridTemplateRows: '1fr auto', height: '100vh' }}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default PageLayout;
