import CTA from '@/components/CTA';
import Cursor from '@/components/Cursor';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import NavBar from '@/components/NavBar';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <div className="navbar-back-gradient pointer-events-none fixed inset-0 z-40 h-32"></div>
      <NavBar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
      <Cursor />
    </>
  );
}
