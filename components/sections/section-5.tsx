'use client'

import openWhatsapp from '@/helpers/open-whatsapp'

export default function Section5() {
  return (
    <section className="py-10 px-5 relative flex items-end overflow-hidden md:py-20 lg:h-dvh">
      <div className="flex flex-col items-center md:flex-row md:items-end ">
        <div className="flex flex-col items-center md:w-1/2">
          <h1 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-4xl ">
            BAIXE NOSSO E-BOOK <span className="text-secondary">EXCLUSIVO</span>
          </h1>

          <div className="w-[80%] h-full mb-5 overflow-hidden rounded-lg max-w-[400px] md:mb-0">
            <img src="ebook.png" alt="" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="bg-white p-4 py-8 rounded-lg shadow-md bg-opacity-80 backdrop-blur-sm shadow-black md:w-1/2 md:text-center ">
          <p className="font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of{' '}
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
