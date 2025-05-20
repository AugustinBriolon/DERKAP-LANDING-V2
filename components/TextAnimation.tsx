import { useRef, useEffect } from 'react';
import Section from './Section';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentences = sectionRef.current?.querySelectorAll('.sentence');

    if (!sentences) return;

    sentences.forEach((sentence) => {
      wrapLettersInSpan(sentence as HTMLElement);
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: containerRef.current,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    sentences.forEach((sentence, index) => {
      if (sentences[index + 1]) {
        tl.to(sentences[index], {
          yPercent: -50,
          y: '-50vh',
          ease: 'power4.in',
        });

        tl.to(
          sentences[index].querySelectorAll('span'),
          {
            yPercent: -50,
            y: '-50vh',
            stagger: -0.02,
            ease: 'power2.in',
          },
          '<',
        );

        tl.from(
          sentences[index + 1],
          {
            yPercent: 50,
            y: '50vh',
            ease: 'power4.out',
          },
          '<',
        );

        tl.from(
          sentences[index + 1].querySelectorAll('span'),
          {
            yPercent: 50,
            y: '50vh',
            ease: 'power2.out',
            stagger: -0.02,
          },
          '<',
        );
      }
    });
  }, []);

  function wrapLettersInSpan(element: HTMLElement) {
    const text = element.textContent || '';
    element.innerHTML = text
      .split('')
      .map((char: string) =>
        char === ' '
          ? '<span class="inline-block">&nbsp;</span>'
          : `<span class="inline-block tracking-[-0.06em]">${char}</span>`,
      )
      .join(' ');
  }

  return (
    <Section ref={sectionRef} className="h-[600vh]">
      <div ref={containerRef} className="flex h-screen items-center">
        <div ref={centerRef} className="relative w-full">
          <div className="sentence text-[10vw / 0.9] flex w-full justify-center text-center font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Y'a des délires qu'on comprend qu'entre nous.
          </div>
          <div className="sentence text-[10vw / 0.9] flex w-full justify-center text-center font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            Derkap, c'est l'app où tu peux les vivre,
          </div>
          <div className="sentence text-[10vw / 0.9] flex w-full justify-center text-center font-bold sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
            les capturer et les partager juste avec ta bande.
          </div>
        </div>
      </div>
    </Section>
  );
}
