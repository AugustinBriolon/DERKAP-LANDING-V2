import Image from 'next/image';
import Section from './Section';

export default function HowItWorks() {
  return (
    <Section className="flex flex-col items-start justify-start gap-8 pt-32" id="comment-ca-marche">
      <div className="space-y-2">
        <h3 className="text-primary text-xl">Comment ça marche</h3>
        <h2 className="text-5xl font-bold">Un petit tutoriel pour commencer ?</h2>
      </div>
      <p className="text-white-second max-w-lg text-xl text-pretty">
        On a essayé de faire le plus simple possible pour que vous kiffiez le plus vite possible.
      </p>

      <div className="mt-8 flex w-full flex-col">
        <div className="bg-primary sticky top-30 flex h-[50vh] w-full items-center justify-between gap-8 rounded-xl px-10 py-20 text-black">
          <div className="flex items-center gap-8">
            <p className="text-[15rem] font-bold">1</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Créez votre compte</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="w-1/3">
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
          <div className="flex items-center gap-8">
            <p className="text-[15rem] font-bold">2</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Lancer votre premier Derkap</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="w-1/3">
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
          <div className="flex items-center gap-8">
            <p className="text-[15rem] font-bold">3</p>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-5xl font-bold">Créez votre compte</p>
              <p className="text-xl">Depuis l'application, créez votre compte ou connectez-vous.</p>
            </div>
          </div>
          <div className="w-1/3">
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
