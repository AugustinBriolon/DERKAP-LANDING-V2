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
      <NavBar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
      {/* <Cursor /> */}
    </>
  );
}
