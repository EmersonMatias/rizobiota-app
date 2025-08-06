'use client'
import openWhatsapp, { openLink } from '@/helpers/open-whatsapp'
import { FaAngleDoubleRight, FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export default function HeroSection() {
  return (
    <section className="w-full h-dvh flex px-5 text-white relative overflow-x-hidden">
      <div className="max-w-[1280px] mx-auto my-auto pb-20">
        <div className="m-auto pt-20 text-center flex flex-col items-center">
          <img src="./logo-grande.png" className="w-[800px] " alt="Logo Rizobiota" />

          <div className="flex flex-col md:flex-row gap-10 mt-10 w-full">
            <button
              className="justify-center gap-4 flex items-center py-4 rounded-md bg-white hover:bg-[#f3f3f3] text-primary font-bold md:text-xl w-full md:py-5 md:mt-0"
              onClick={() => openWhatsapp('16999923882')}
            >
              Agende uma demonstração
              <FaWhatsapp className="w-6 h-6" />
            </button>

            <button
              className="justify-center gap-4 flex items-center py-4 rounded-md bg-white hover:bg-[#f3f3f3] text-primary font-bold md:text-xl w-full md:py-5 md:mt-0"
              onClick={() => openLink('https://orcamento.bymycell.com/')}
            >
              Fazer um orçamento
              <FaAngleDoubleRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button className="absolute bottom-4 -ml-6  absolute-center-x animate-bounce">
          <IoIosArrowDown className="w-10 h-10" />
        </button>
      </div>

      <div className="w-[110%] h-dvh absolute left-0 -z-10">
        <img
          src="hero-section-bg.jpg"
          className="w-full h-full object-cover brightness-[0.2]"
          alt=" "
        />
      </div>
    </section>
  )
}
