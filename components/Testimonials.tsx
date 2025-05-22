import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import clsx from 'clsx';

const testimonials = [
  {
    name: 'Léa',
    role: 'Étudiante à Lille',
    text: "Ce qui est cool, c'est que tu choisis exactement qui voit ton défi.C'est comme un mini Snapchat, mais pour délirer en petit comité.",
    image: '/images/testimonials/lea.png',
  },
  {
    name: 'Thomas',
    role: 'Lycéen en banlieue parisienne',
    text: "Ce qui est cool, c'est que tu choisis exactement qui voit ton défi. C'est comme un mini Snapchat, mais pour délirer en petit comité.",
    image: '/images/testimonials/thomas.png',
  },
  {
    name: 'Marie',
    role: 'Dans une association étudiante',
    text: "On a testé Derkap un soir après les cours, et on a pleuré de rire. Maintenant, c'est notre rituel du vendredi !",
    image: '/images/testimonials/marie.png',
  },
  {
    name: 'Sam',
    role: 'École de commerce',
    text: "J'avais peur que personne joue le jeu… mais dès que j'ai lancé un défi, tout le monde a répondu. Même ceux qui râlent d'habitude !",
    image: '/images/testimonials/sam.png',
  },
  {
    name: 'Medhi',
    role: 'BTS à Marseille',
    text: "J'ai pas l'habitude des applis sociales, mais Derkap c'est ultra simple. En 3 minutes j'avais lancé mon premier défi.",
    image: '/images/testimonials/medhi.png',
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  useGSAP(() => {
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -currentIndex * (sliderRef.current.children[0]?.clientWidth || 0 + 16),
        duration: 0.5,
        ease: 'power2.out',
      });
    }
  }, [currentIndex]);

  return (
    <Section
      className="flex h-fit min-h-screen flex-col items-start justify-start gap-8 pt-32"
      id="temoignages"
    >
      <div className="space-y-2">
        <h3 className="text-primary text-xl">Témoignages</h3>
        <h2 className="text-5xl font-bold">Ce qu'ils disent de nous</h2>
      </div>
      <p className="text-white-second max-w-lg text-xl text-pretty">
        Pas besoin de blabla, on laisse parler ceux qui s'envoient déjà des défis tous les jours.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          className="cursor-pointer rounded-full border-t-3 border-t-white/10 bg-black px-4 py-2"
          onClick={handlePrevious}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" fill="#ffffff" />
          </svg>
        </button>
        <button
          className="cursor-pointer rounded-full border-t-3 border-t-white/10 bg-black px-4 py-2"
          onClick={handleNext}
        >
          <svg
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" fill="#ffffff" />
          </svg>
        </button>
      </div>

      <div
        className={clsx(
          'relative h-[350px] w-full overflow-hidden',
          currentIndex !== 0 &&
            'before:absolute before:top-0 before:-left-8 before:z-10 before:h-full before:w-8 before:bg-gradient-to-r before:from-black before:to-transparent before:opacity-80',
          currentIndex === testimonials.length - 1 &&
            'after:absolute after:top-0 after:-right-8 after:z-10 after:h-full after:w-8 after:bg-gradient-to-l after:from-black after:to-transparent after:opacity-80',
        )}
      >
        <div ref={sliderRef} className="absolute flex w-fit cursor-grab gap-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </Section>
  );
}
