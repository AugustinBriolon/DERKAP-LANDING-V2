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
