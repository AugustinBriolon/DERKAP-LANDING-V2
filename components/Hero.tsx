import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef } from 'react';
import Button from './Button';
import Section from './Section';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
    });

    tl.from(titleRef.current, {
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
        imageRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
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
        '-=0.2',
      );

    gsap.to(imageRef.current, {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <Section ref={sectionRef} className="flex w-full flex-col gap-20 pt-[128px]" id="hero">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center lg:gap-24">
        <h1
          ref={titleRef}
          className="text-5xl leading-tight font-bold text-pretty text-white md:max-w-lg"
        >
          <span className="text-primary">Balance tes défis,</span>
          <br />
          c'est privé, c'est drôle,
          <br />
          c'est <span className="text-primary text-glow">DERKAP</span>
        </h1>
        <div className="item-start flex h-full w-full flex-col justify-start gap-8 lg:w-1/2 lg:pl-16">
          <h2 ref={subtitleRef} className="text-white-second text-xl">
            Ici, c'est juste toi, tes potes, et des défis marrants que personne d'autre verra. On
            t'a préparé l'endroit parfait pour délirer en toute liberté.
          </h2>
          <div ref={buttonsRef} className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button icon="/icons/apple.svg" boxShadow>
              Download for IOS
            </Button>
            <Button icon="/icons/google.svg" outline className="cursor-wait">
              Comming soon for Android
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="relative">
          <Image
            ref={imageRef}
            alt="Mockup de l'application DERKAP"
            className="mx-auto w-2/3 md:w-1/3"
            height={1440}
            src="/images/hero/shot.webp"
            width={697}
          />
          <div
            ref={gradientRef}
            className="absolute top-2/5 left-1/2 -z-10 aspect-square w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-xl"
            style={{
              background: 'radial-gradient(circle at center, #9747FF80 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </Section>
  );
}
