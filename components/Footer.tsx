import Link from 'next/link';
import Section from './Section';
import Button from './Button';
import { useLenis } from 'lenis/react';

export default function Footer() {
  const lenis = useLenis();

  const scrollToNextSection = (id: string) => {
    if (lenis) {
      lenis.scrollTo(id);
    }
  };
  return (
    <Section className="z-30">
      <div className="grid grid-cols-2 items-center justify-center gap-4 rounded-t-4xl border-t-3 border-t-white/10 bg-black px-4 py-6 md:grid-cols-4 md:px-8">
        <h2 className="col-span-1 row-start-1 text-2xl font-bold">DERKAP</h2>
        <p className="col-start-4 row-start-1 text-xl">Contactez-nous</p>

        <div className="col-span-2 row-start-2 flex flex-col gap-4 md:flex-row">
          <p
            className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
            onClick={() => scrollToNextSection('#temoignages')}
          >
            Témoignages
          </p>
          <p
            className="text-white-second cursor-pointer text-lg transition-all duration-300 hover:text-white"
            onClick={() => scrollToNextSection('#comment-ca-marche')}
          >
            Comment ça marche
          </p>
        </div>

        <div className="col-span-1 col-start-4 row-start-2 flex items-center gap-2">
          <p className="text-white-second text-lg">derkap.dev@gmail.com</p>
          <Button
            className="aspect-square !px-2 !py-1"
            href="mailto:derkap.dev@gmail.com"
            icon="/icons/email.svg"
            asLink
            boxShadow
          />
        </div>

        <div className="bg-white-second col-span-4 row-start-3 h-px w-full rounded-full"></div>
        <p className="text-white-second col-span-4 text-right text-sm">
          Développé par{' '}
          <Link
            className="underline transition-all duration-300 hover:text-white"
            href="https://august1.dev/"
          >
            Augustin Briolon
          </Link>
        </p>
      </div>
    </Section>
  );
}
