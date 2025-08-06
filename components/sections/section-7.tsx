'use client'
import sendEmail from '@/helpers/send-email'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  RiMapPinFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiMailFill,
  RiTimeFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill
} from 'react-icons/ri'

export default function Section7() {
  const { register, handleSubmit, reset } = useForm<Form>()

  const [loading, setLoading] = useState(false)

  return (
    <section className="px-5 py-10 relative md:py-20 md:px-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-4xl ">
          FICOU COM ALGUMA DÚVIDA? <br />
          ENTRE EM <span className="text-secondary">CONTATO</span>
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="lg:max-w-[800px] bg-white shadow-md shadow-black p-10 rounded-md lg:w-full flex flex-col items-center">
            <h6 className="text-3xl lg:text-4xl font-bold mb-5 text-secondary">
              Tire sua dúvida aqui!
            </h6>
            <form
              className="space-y-6 lg:space-y-10"
              onSubmit={handleSubmit((e) => sendEmail(e, reset, setLoading))}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome"
                  {...register('name', { required: true })}
                  className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  {...register('email', { required: true })}
                  className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="(00) 00000-0000"
                  {...register('phone', { required: true })}
                  className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                  disabled={loading}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={8}
                  placeholder="Escreva sua mensagem aqui..."
                  {...register('message', { required: true })}
                  className="mt-1 p-3 w-full rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500 transition-all"
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <div className="flex">
                <p>
                  <input
                    type="checkbox"
                    className="mr-2"
                    required
                    {...register('checkbox', { required: true })}
                    disabled={loading}
                  />{' '}
                  Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar
                  e-mails. Você pode cancelar a qualquer momento.
                </p>
              </div>

              <button
                className="px-10 mx-auto w-full gap-4 flex items-center justify-center py-4 rounded-md bg-secondary hover:bg-[#976502] text-white font-bold mt-10 md:text-xl md:px-20 md:py-5 md:max-w-[600px] "
                type="submit"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div className="w-full flex flex-col gap-10">
            <div className="bg-white p-4 rounded-lg shadow-md shadow-black md:p-8">
              <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="bg-secondary p-3 rounded-full text-white mr-4">
                    <RiMapPinFill />
                  </span>
                  <p className="text-gray-700">
                    Endereço: Rua Martinico Prado 555. Piso Térreo. Vila Tibério. Ribeirão Preto -
                    SP. 14050-050
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary p-3 rounded-full text-white mr-4">
                    <RiPhoneFill />
                  </span>
                  <p className="text-gray-700">(16) 99992-3882</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary p-3 rounded-full text-white mr-4">
                    <RiWhatsappFill />
                  </span>
                  <p className="text-gray-700">(16) 99992-3882</p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary p-3 rounded-full text-white mr-2 md:mr-4">
                    <RiMailFill />
                  </span>
                  <p className="text-gray-700 ">
                    contato@bymycell.com - carolina.santos@bymycell.com{' '}
                  </p>
                </div>

                <div className="flex items-center">
                  <span className="bg-secondary p-3 rounded-full text-white mr-4">
                    <RiTimeFill />
                  </span>
                  <p className="text-gray-700">
                    Horário de funcionamento: Segunda a sexta, das 8 às 17h.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl text-center font-bold text-secondary-500 mb-6 md:text-2xl md:text-left">
                  Redes Sociais
                </h3>
                <div className="flex justify-center gap-4 text-xl md:justify-start lg:text-2xl">
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2  rounded-full text-white hover:bg-secondary-400 transition-all"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiLinkedinBoxFill />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiYoutubeFill />
                  </Link>
                  <Link
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary  p-2 rounded-full text-white hover:bg-secondary-600 transition-all"
                  >
                    <RiWhatsappFill />{' '}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-md shadow-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5673804064336!2d-47.81992752385361!3d-21.169608278106107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bd3b0a985053%3A0x643a3b0319ff97f6!2sByMyCell!5e0!3m2!1spt-BR!2sbr!4v1740951591924!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa da Localização"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <img src="bg-section-7.png" className="absolute top-0 -left-[50px] -z-10" alt="" />

      <img src="bg-section-7.png" className="absolute -bottom-[0px] -right-[300px] -z-10" alt="" />
    </section>
  )
}
