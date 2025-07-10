import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLenis } from 'lenis/react';
import { useRef } from 'react';
import Button from './Button';

export default function NavBar() {
  const lenis = useLenis();
  const navRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const encreRefs = {
    how: useRef(null),
    testimonials: useRef(null),
  };

  const scrollToNextSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    }
  };

  useGSAP(() => {
    gsap.set([encreRefs.how.current, encreRefs.testimonials.current], {
      display: 'none',
    });
    gsap.set(navRef.current, {
      width: '300px',
      display: 'block',
    });

    const tl = gsap.timeline();

    tl.from(navRef.current, {
      scale: 0.5,
      duration: 0.5,
      ease: 'power1.out',
    })
      .to(
        navRef.current,
        {
          width: '100%',
          duration: 0.8,
          ease: 'power2.out',
        },
        '<+0.4',
      )
      .fromTo(
        [encreRefs.how.current, encreRefs.testimonials.current],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          display: 'block',
          duration: 0.5,
          stagger: 0.1,
          ease: 'power1.out',
        },
        '<+0.6',
      );
  }, []);

  return (
    <>
      <div className="navbar-back-gradient pointer-events-none fixed inset-0 z-40 h-32"></div>
      <div className="fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-8">
        <nav
          ref={navRef}
          className="mx-auto hidden w-full max-w-7xl rounded-full border-t-3 border-t-white/10 bg-black py-3 pr-4 pl-6"
        >
          <div className="flex items-center justify-between">
            <div className="overflow-hidden">
              <div ref={titleRef}>
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
                <div ref={encreRefs.how}>
                  <p
                    className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
                    onClick={() => scrollToNextSection('#comment-ca-marche')}
                  >
                    Comment ça marche
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div ref={encreRefs.testimonials}>
                  <p
                    className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
                    onClick={() => scrollToNextSection('#temoignages')}
                  >
                    Témoignages
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button
                href="https://apps.apple.com/fr/app/derkap/id6741578374"
                icon="/icons/download.svg"
                asLink
                boxShadow
              >
                Download
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
