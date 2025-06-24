export default function Section1() {
  return (
    <section className="py-10 lg:py-[100px] px-5 relative h-full  md:flex">
      <div className="md:w-[50%]  md:flex md:flex-col md:ml-auto md:pl-10 2xl:pr-20 2xl:w-[40%]">
        <h1 className="font-gabarito font-bold text-2xl tracking-widest  md:text-3xl lg:text-4xl">
          PORQUE AS LAVOURAS NÃO ENTREGAM SEU{' '}
          <span className="text-secondary">MÁXIMO POTENCIAL?</span>
        </h1>

        <div className="mt-5 space-y-8">
          <div className="border-2 border-neutral-300 p-2 rounded-lg">
            <h6 className="text-primary font-bold md:text-lg">O PROBLEMA</h6>
            <p className="md:text-lg leading-loose">
              Doenças causadas por fungos e nematoides causam perdas severas todos os anos no
              Brasil. As novas tecnologias químicas e biológicas podem ajudar em mitigar estas
              perdas, mas o diagnóstico preciso é fundamental para auxiliar no uso correto dessas
              tecnologias.
            </p>
          </div>

          <div className="border-2 border-neutral-300 p-2 rounded-lg">
            <h6 className="text-primary font-bold md:text-lg">NOSSA SOLUÇÃO</h6>
            <p className="md:text-lg leading-loose">
              Tenha em mãos a ferramenta de análise de microbiota de solo para mais de 200
              microorganismos e descubra riscos ocultos que lhe causam até 30% de perdas de
              produtividade todos os anos.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute  flex min-h-full left-0 top-0 w-full h-full -z-10 -translate-x-[50%] opacity-30 md:opacity-100 2xl:-translate-x-[44%]">
        <img src="bg-section-1.png" className="h-full w-full object-cover object-bottom" alt=" " />
      </div>
    </section>
  )
}
