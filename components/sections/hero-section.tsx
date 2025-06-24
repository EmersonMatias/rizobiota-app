'use client'
import openWhatsapp from '@/helpers/open-whatsapp'
import { FaWhatsapp } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

export default function HeroSection() {
  return (
    <section className="w-full h-dvh flex px-5 text-white relative overflow-x-hidden">
      <div className="w-[110%] h-dvh absolute left-0 -z-10">
        <img src="home-background.webp" className="w-full h-full object-cover" alt=" " />
      </div>

      <div className="m-auto pt-20 text-center flex flex-col items-center">
        <h1 className="font-gabarito font-semibold text-5xl text-secondary tracking-widest  md:text-8xl lg:text-9xl">
          RIZOBIOTA
        </h1>
        <p className="mt-2 md:text-xl">
          UMA SOLUÇÃO <span className="">BYMYCELL</span>
        </p>
        <p className="font-nunito text-xl font-extralight mt-4 md:text-3xl md:mt-8">
          Libere o potencial biológico do solo e maximize a produtividade
        </p>

        <button
          className="px-10 gap-4 flex items-center py-3 rounded-md bg-white hover:bg-[#f3f3f3] text-primary font-bold mt-10 md:text-xl md:px-20 md:py-5 md:mt-20"
          onClick={() => openWhatsapp('992031949')}
        >
          Agende uma demonstração
          <FaWhatsapp className="w-6 h-6" />
        </button>
      </div>

      <button className="absolute bottom-4 -ml-6  absolute-center-x animate-bounce">
        <IoIosArrowDown className="w-10 h-10" />
      </button>
    </section>
  )
}
