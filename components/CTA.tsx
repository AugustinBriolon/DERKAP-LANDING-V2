import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import Button from './Button';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitText = new SplitText(subtitleRef.current, {
      type: 'words',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          toggleActions: 'play none play reverse',
        },
      })
      .from(titleRef.current, {
        y: 50,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 1,
      })
      .from(
        splitText.words,
        {
          y: 30,
          filter: 'blur(10px)',
          opacity: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: 'power1.out',
        },
        '-=0.2',
      )
      .from(
        buttonsRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        '-=0.2',
      )
      .from(
        gradientRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 1.5,
        },
        '<',
      );
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="relative flex h-screen flex-col items-center justify-center gap-8"
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 ref={titleRef} className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
          Prêt à <span className="text-primary text-glow">délirer</span> avec tes potes ?
        </h2>
        <p ref={subtitleRef} className="text-white-second max-w-2xl text-xl">
          Télécharge Derkap maintenant et commence à envoyer des défis marrants à tes amis. C'est
          gratuit, c'est fun, et c'est privé !
        </p>
        <div ref={buttonsRef} className="flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href="https://apps.apple.com/fr/app/derkap/id6741578374"
            icon="/icons/apple.svg"
            asLink
            boxShadow
          >
            Télécharger pour IOS
          </Button>
          <Button icon="/icons/google.svg" outline soon>
            Télécharger pour Android
          </Button>
        </div>
      </div>
      <div
        ref={gradientRef}
        className="absolute top-1/2 left-1/2 -z-10 aspect-square w-full max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-xl"
        style={{
          background: 'radial-gradient(circle at center, #9747FF80 0%, transparent 100%)',
        }}
      />
    </Section>
  );
}
