import Link from 'next/link'

export default function ServicosPage() {
  const content = [
    {
      title: 'Rizobiota Agro',
      text: 'O Rizobiota Agro é uma análise avançada da microbiota do solo que te dá o poder de tomar decisões agronômicas verdadeiramente estratégicas. Através do sequenciamento do DNA, identificamos os microrganismos benéficos, patogênicos e nematoides da amostra de solo.',
      href: '/servicos/rizobiota-agro'
    },
    {
      title: 'Rizobiota Agro + Fetilidade',
      text: 'Análise avançada da microbiota e parâmetros de fertilidade e granulometria do solo que te dão o poder de tomar decisões agronômicas verdadeiramente estratégicas! Análise de fertilidade e granulometria, microrganismos benéficos, patogênicos e nematoides da amostra de solo.',
      href: '/servicos/rizobiota-agro-fertilidade'
    }
  ]

  return (
    <main className="py-20 px-5 lg:max-w-[1280px] lg:mx-auto">
      <h2 className="font-gabarito text-center font-bold text-2xl tracking-widest  md:text-3xl lg:text-4xl mt-10">
        <span className="text-secondary">SERVIÇOS</span>
      </h2>

      <div className="flex flex-col gap-10 mt-10 lg:flex-row lg:justify-center">
        {content.map(({ text, title, href }) => (
          <Link
            className="w-full relative shadow-md shadow-black rounded-lg overflow-hidden lg:max-w-[600px]"
            key={title}
            href={href}
          >
            <img src="hero-section-bg.jpg" className="max-h-[160px] w-full object-cover" alt="" />

            <div className="bg-white p-4 flex flex-col gap-3">
              <h6 className="font-semibold lg:text-lg">{title}</h6>
              <p className="text-sm lg:text-base">{text}</p>

              <div className="w-full flex mt-5">
                <button className="p-2 px-5 border border-secondary hover:bg-secondary hover:bg-opacity-10 rounded-md ml-auto">
                  Saber mais
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
