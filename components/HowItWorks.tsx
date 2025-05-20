import Image from 'next/image';
import Section from './Section';

export default function HowItWorks() {
  return (
    <Section className="flex flex-col items-start justify-start gap-8 pt-32" id="comment-ca-marche">
      <div className="space-y-2">
        <h3 className="text-primary text-xl">Comment ça marche</h3>
        <h2 className="text-5xl font-bold text-pretty">Un petit tutoriel pour commencer ?</h2>
      </div>
      <p className="text-white-second max-w-lg text-xl text-pretty">
        On a essayé de faire le plus simple possible pour que vous kiffiez le plus vite possible.
      </p>

      <div className="mt-8 flex w-full flex-col">
        <div className="bg-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl px-5 py-10 text-black md:px-10 md:py-20">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">1</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Créez votre compte</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="hidden w-1/3 md:block">
            <Image
              alt="Créez votre compte"
              className="h-full w-full rounded-xl object-cover"
              height={768}
              src="/images/how-it-works/1.webp"
              width={1572}
            />
          </div>
        </div>

        <div className="text-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl bg-black px-10 py-20">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">2</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Lancer votre premier Derkap</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="hidden w-1/3 md:block">
            <Image
              alt="Créez votre compte"
              className="h-full w-full rounded-xl object-cover"
              height={768}
              src="/images/how-it-works/1.webp"
              width={1572}
            />
          </div>
        </div>

        <div className="bg-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl px-10 py-20 text-black">
          <div className="flex items-start gap-8 md:items-center">
            <p className="text-9xl font-bold md:text-[15rem]">3</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Créez votre compte</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="hidden w-1/3 md:block">
            <Image
              alt="Créez votre compte"
              className="h-full w-full rounded-xl object-cover"
              height={768}
              src="/images/how-it-works/1.webp"
              width={1572}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
