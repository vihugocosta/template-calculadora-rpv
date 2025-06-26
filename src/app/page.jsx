import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen text-center">
        <div className="flex flex-col items=center justify-center w-full max-w-2xl gap-9">
          <h1 className="text-4xl font-bold ">Bem-vindo a Calculadora RPV!</h1>
          <h2 className="text-xl">Projeto base Next.JS + Tailwind + shadcn + integração backend</h2>
          <p className="leading-relaxed text-lg text-center">Esste projeto foi criado para demonstrar uma calculadora de operações matemáticas integrando frontend moderno com backend externo, utilizando as melhores práticas do ecossistema React/Next.js</p>
          <Button>Ir para a calculadora</Button>
        </div>
      </div>
    </>
  );
}
