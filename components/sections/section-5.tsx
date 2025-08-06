'use client'

import openWhatsapp from '@/helpers/open-whatsapp'

export default function Section5() {
  return (
    <section className="py-10 px-5 relative flex items-end overflow-hidden md:py-20 lg:h-dvh">
      <div className="flex flex-col items-center w-full justify-between md:flex-row md:items-end lg:gap-20 max-w-[1280px] mx-auto">
        <div className="flex flex-col items-center md:w-1/2">
          <h2 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-5xl lg:max-w-[600px] ">
            BAIXE NOSSO E-BOOK <span className="text-secondary">EXCLUSIVO</span>
          </h2>

          <div className="w-[100%] h-full mb-5 overflow-hidden rounded-lg max-w-[500px] md:mb-0">
            <img src="ebook.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="bg-white  p-4 py-8 rounded-lg shadow-md bg-opacity-80 backdrop-blur-sm shadow-black md:w-full md:text-center ">
          <p className="font-semibold">
            Preparamos um e-book com informações sobre os microrganismos benéficos e patogênicos
            mais relevantes para o solo.
          </p>

          <button
            className="px-10 mx-auto w-full gap-4 flex items-center justify-center py-4 rounded-md bg-secondary hover:bg-[#976502] text-white font-bold mt-10 md:text-xl md:px-20 md:py-5 md:max-w-[600px] "
            onClick={() => openWhatsapp('992031949')}
          >
            Baixe nosso e-book
          </button>
        </div>
      </div>

      <img
        src="bg-section-5.png"
        alt=""
        className="absolute bottom-0 w-full  left-0 -z-10 object-contain lg:top-0"
      />
    </section>
  )
}
