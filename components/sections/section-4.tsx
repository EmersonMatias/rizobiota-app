'use client'
import openWhatsapp from '@/helpers/open-whatsapp'
import { FaWhatsapp } from 'react-icons/fa'

export default function Section4() {
  return (
    <section className="py-10 px-5 flex gap-10 lg:px-20 bg-[#f9f9f9]">
      <div className="w-[90%] max-w-[600px] mx-auto hidden md:flex md:w-1/2 ">
        <img src="section-4.png" className="h-full w-full rounded-lg object-cover" alt="" />
      </div>

      <div className="md:w-1/2 md:flex md:flex-col md:justify-center">
        <h2 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl md:text-center lg:text-4xl ">
          VALIDADA POR CLIENTES EM <span className="text-secondary">TODO O BRASIL</span>
        </h2>

        <div className="w-[90%] max-w-[600px] mx-auto mb-5 md:hidden">
          <img src="section-4.png" className="h-full w-full rounded-lg" alt="" />
        </div>

        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also{' '}
        </p>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>

        <button
          className="px-10 mx-auto w-full gap-4 flex items-center justify-center py-4 rounded-md bg-secondary hover:bg-[#976502] text-white font-bold mt-10 md:text-xl md:px-20 md:py-5 md:max-w-[600px] "
          onClick={() => openWhatsapp('992031949')}
        >
          Entre em contato com nosso time
          <FaWhatsapp className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
