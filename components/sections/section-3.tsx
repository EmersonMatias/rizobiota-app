export default function Section3() {
  const steps = [
    {
      title: 'Planejamento e coleta de amostras',
      text: 'Amostras coletadas em profundidade de 0-10 cm. As amostras podem ser coletadas em grids de 20 a 30 hectares por amostra, por zona de manejo ou por zonas Hde contrastes (baixa vs. alta produtividade), otimizando os custos das análises.',
      image: 'step-1.png'
    },
    {
      title: 'Análise de microbiota em laboratório',
      text: 'As amostras são enviadas ao laboratório, onde realizamos análise de sequenciamento de DNA para identificação de mais de 300 mil microrganismos (bactérias e fungos) e 30 nematoides. ',
      image: 'step-2.png'
    },
    {
      title: 'Resultados em aplicativo e interpretação',
      text: 'Os resultados das análises são entregues via aplicativo e em formato pdf, permitindo a exploração dos dados, identificação de riscos e potenciais do solo. O aplicativo permite também o cruzamento de dados de bioinsumos mais indicados para as fazendas analisadas. ',
      image: 'step-3.png'
    }
  ]

  return (
    <section className="px-5 py-10 flex flex-col relative overflow-hidden md:pb-20">
      <div className="md:mx-auto md:text-center md:mb-10">
        <h1 className="font-gabarito mb-3 font-bold text-2xl tracking-widest  md:text-3xl lg:text-4xl">
          QUER SABER QUAL O NOSSO <span className="text-secondary">PROCESSO?</span>
        </h1>
        <h6 className="md:max-w-[800px]">
          Processo é algo que levamos muito a sério. Por isso, convidamos você a conhecer cada etapa
          do nosso passo a passo — do início à entrega — garantindo resultados de alta qualidade,
          desde a coleta do solo até a apresentação final dos dados.
        </h6>
      </div>

      <div className="max-w-[1200px] w-full mx-auto hidden md:flex md:flex-col">
        <div className="flex">
          <div className="w-1/2 max-w-[600px]">
            <img src="step-1.png" className="w-full h-full object-cover" alt="" />
          </div>

          <div className="w-1/2 max-w-[600px] flex flex-col items-center justify-center p-5 lg:p-10">
            <h6 className="font-bold text-xl mb-4">
              {' '}
              <span className="text-secondary">PASSO 1: </span>
              {steps[0].title}
            </h6>
            <p className="text-lg lg:leading-loose ">{steps[0].text}</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 max-w-[600px] flex flex-col items-center justify-center p-5 lg:p-10">
            <h6 className="font-bold text-xl mb-4">
              <span className="text-secondary">PASSO 2: </span>
              {steps[1].title}
            </h6>
            <p className="text-lg lg:leading-loose ">{steps[1].text}</p>
          </div>

          <div className="w-1/2 max-w-[600px]">
            <img src="step-2.png" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2 max-w-[600px]">
            <img src="step-3.png" className="w-full h-full object-cover" alt="" />
          </div>

          <div className="w-1/2 max-w-[600px] flex flex-col items-center justify-center p-5 lg:p-10">
            <h6 className="font-bold text-xl mb-4">
              {' '}
              <span className="text-secondary">PASSO 3: </span>
              {steps[2].title}
            </h6>
            <p className="text-lg lg:leading-loose ">{steps[2].text}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 mt-8 mx-auto md:hidden">
        {steps.map(({ title, text, image }, index) => {
          return (
            <div className="w-full max-w-[600px] relative " key={index}>
              <img
                src={image}
                className="w-full h-full object-cover rounded-lg brightness-[0.3]"
                alt=""
              />

              <div className="absolute top-8 w-[95%] absolute-center   rounded-md shadow-lg p-2 text-white">
                <h6 className="font-bold text-sm mb-4">
                  <span className="text-secondary">PASSO {index + 1}: </span>
                  {title}
                </h6>
                <p className="text-sm">{text}</p>
              </div>
            </div>
          )
        })}
      </div>

      <img
        src="bg-section-3.png"
        className="absolute -top-14 -left-20 rotate-[135deg] -z-20 opacity-50"
        alt=""
      />

      <img
        src="bg-section-3.png"
        className="absolute -top-14 -right-10 -z-20 rotate-[-135deg] scale-150 opacity-50"
        alt=""
      />

      <img
        src="bg-section-3.png"
        className="absolute -bottom-8 -right-10 -z-20 rotate-[-50deg] scale-150 "
        alt=""
      />
    </section>
  )
}
