import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import Button from './Button';

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  const scrollToNextSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    }
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      '.nav-item',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.inOut',
      },
    );

    tl.fromTo(
      '.nav-button',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'elastic.out(1,1)',
      },
    );
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8">
      <nav
        ref={navRef}
        className="mx-auto w-full max-w-7xl rounded-full border-t-3 border-t-white/10 bg-black py-3 pr-4 pl-6"
      >
        <div className="flex items-center justify-between">
          <div className="overflow-hidden">
            <div className="nav-item">
              <p
                className="cursor-pointer text-2xl font-bold text-white"
                onClick={() => scrollToNextSection('#hero')}
              >
                DERKAP
              </p>
            </div>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <div className="overflow-hidden">
              <div className="nav-item">
                <p
                  className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
                  onClick={() => scrollToNextSection('#comment-ca-marche')}
                >
                  Comment ça marche
                </p>
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="nav-item">
                <p
                  className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
                  onClick={() => scrollToNextSection('#temoignages')}
                >
                  Témoignages
                </p>
              </div>
            </div>
          </div>

          <div className="nav-button">
            <Button icon="/icons/download.svg">Download</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
