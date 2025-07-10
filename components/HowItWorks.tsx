import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitText from 'gsap/dist/SplitText';
import { useRef } from 'react';
import Section from './Section';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const splitText = new SplitText(descriptionRef.current, {
      type: 'words',
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'bottom 75%',
          toggleActions: 'play none play reverse',
        },
      })
      .from([titleRef.current, subtitleRef.current], {
        y: 50,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 0.5,
        stagger: 0.3,
        ease: 'power2.out',
      })
      .from(splitText.words, {
        y: 10,
        filter: 'blur(10px)',
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power1.out',
      })
      .from(
        stepsRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: 'power1.out',
        },
        '<',
      );
  }, []);

  return (
    <Section
      ref={sectionRef}
      className="flex flex-col items-start justify-start gap-8 pt-32"
      id="comment-ca-marche"
    >
      <div className="space-y-2">
        <div className="overflow-hidden">
          <h3 ref={titleRef} className="text-primary text-xl">
            Comment ça marche
          </h3>
        </div>
        <div className="overflow-hidden">
          <h2 ref={subtitleRef} className="text-5xl font-bold text-pretty">
            Un petit tutoriel pour commencer ?
          </h2>
        </div>
      </div>
      <p ref={descriptionRef} className="text-white-second max-w-lg text-xl text-pretty">
        On a essayé de faire le plus simple possible pour que vous kiffiez le plus vite possible.
      </p>

      <div ref={stepsRef} className="mt-8 flex w-full flex-col">
        <div className="bg-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl px-5 py-10 text-black md:px-10 md:py-20">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">1</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Crée ton compte</p>
              <p className="text-xl">Depuis l'application, crées ton compte et connectes-toi.</p>
            </div>
          </div>
        </div>

        <div className="text-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl bg-black px-10 py-20">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">2</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Lances ton premier Derkap</p>
              <p className="text-xl">
                Chope un défi qui te fait marrer et envoie-le à tes potes. T’as la main : c’est toi
                qui décides qui le reçoit.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl px-10 py-20 text-black">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">3</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Mate les réponses et rigole.</p>
              <p className="text-xl">
                Tes potes ont joué le jeu ? Ouvre l’appli, tu vas pas être déçu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
