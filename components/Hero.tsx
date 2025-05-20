import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Button from './Button';
import Section from './Section';

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
    });

    tl.from(sectionRef.current, {
      opacity: 0,
      duration: 0.5,
    })
      .from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
      .from(
        subtitleRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.4',
      )
      .from(
        buttonsRef.current?.children || [],
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        '-=0.4',
      );
  }, []);

  return (
    <Section ref={sectionRef} className="mt-48 flex h-[calc(100vh-128px)] flex-col" id="hero">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-24">
        <h1
          ref={titleRef}
          className="max-w-lg text-5xl leading-tight font-bold text-pretty text-white"
        >
          <span className="text-primary">Balance tes défis,</span>
          <br />
          c'est privé, c'est drôle,
          <br />
          c'est <span className="text-primary text-glow">DERKAP</span>
        </h1>
        <div className="item-start flex h-full w-2/3 flex-col justify-start gap-8 lg:w-1/2 lg:pl-16">
          <h2 ref={subtitleRef} className="text-white-second text-xl">
            Ici, c'est juste toi, tes potes, et des défis marrants que personne d'autre verra. On
            t'a préparé l'endroit parfait pour délirer en toute liberté.
          </h2>
          <div ref={buttonsRef} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button icon="/icons/apple.svg" boxShadow>
              Download for IOS
            </Button>
            <Button icon="/icons/google.svg" outline>
              Download for Android
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </Section>
  );
}
