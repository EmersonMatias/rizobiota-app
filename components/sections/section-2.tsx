'use client'
import openWhatsapp from '@/helpers/open-whatsapp'
import { FaWhatsapp } from 'react-icons/fa'

export default function Section2() {
  return (
    <section className="py-10 h-fit lg:py-[100px] px-5 relative overflow-x-hidden md:flex md:pl-20 md:pr-0 md:gap-10 md:items-center bg-[#f9f9f9]">
      <div className="md:w-[50%] md:mr-auto">
        <h2 className="font-gabarito font-bold text-2xl tracking-widest  md:text-3xl lg:text-4xl">
          A ANÁLISE QUE JÁ FACILITA A VIDA DE <span className="text-secondary">CENTENAS</span> DE
          PROFISSIONAIS DO AGRO E PRODUTORES RURAIS.
        </h2>

        <div className="w-full flex flex-col items-center md:mt-8">
          <div className="w-[90%] h-auto my-5 max-w-[300px] md:hidden">
            <img src="mobile.png" className="w-full h-full object-contain" alt=" " />
          </div>

          <div>
            <p className="md:text-lg leading-loose mb-5">
              Com a análise do perfil de microbiota de solo, produtores rurais e profissionais do
              agro realizam a identificação de{' '}
              <span className="font-bold text-secondary">microrganismos benéficos</span> e{' '}
              <span className="font-bold text-secondary">patogênicos</span> e{' '}
              <span className="font-bold text-secondary">nematoides</span> de forma simples e{' '}
              prática, resultando em manejos mais eficientes e ganhos reais para todas as culturas.
            </p>
            <p className="md:text-lg leading-loose">
              Nossa tecnologia simplifica o processo de tomada de decisão para{' '}
              <span className="font-bold text-secondary">manejo regenerativo</span> do solo,
              combinando análise de microbiota e inteligência artificial para{' '}
              <span className="font-bold text-secondary">
                identificar riscos de doenças de forma preventiva.
              </span>
            </p>

            <button
              className="px-10 mx-auto w-full gap-4 flex items-center justify-center py-4 rounded-md bg-secondary hover:bg-[#976502] text-white font-bold mt-10 md:text-xl md:px-20 md:py-5 md:max-w-[600px] "
              onClick={() => openWhatsapp('16999923882')}
            >
              Agende uma demonstração
              <FaWhatsapp className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden h-full w-1/2 md:flex items-center max-h-[600px]">
        <img src="desktop-mobile.png" alt=" " className="w-full h-full object-cover" />
      </div>
    </section>
  )
}
