'use client'
import sendEmail from '@/helpers/send-email'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Section7() {
  const { register, handleSubmit, reset } = useForm<Form>()

  const [loading, setLoading] = useState(false)

  return (
    <section className="px-5 py-10 relative md:p-20 overflow-hidden">
      <h1 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-4xl ">
        FICOU COM ALGUMA DÚVIDA? <br />
        ENTRE EM <span className="text-secondary">CONTATO</span>
      </h1>

      <div className="mx-auto max-w-[800px] bg-white shadow-md shadow-black p-10 rounded-md">
        <form className="space-y-6" onSubmit={handleSubmit((e) => sendEmail(e, reset, setLoading))}>
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
              rows={5}
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
              Ao selecionar esta caixa e enviar seus dados, você nos autoriza a te enviar e-mails.
              Você pode cancelar a qualquer momento.
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

      <div className="rounded-lg overflow-hidden shadow-md shadow-black mt-10">
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

      <img src="bg-section-7.png" className="absolute top-0 -left-[50px] -z-10" alt="" />

      <img src="bg-section-7.png" className="absolute -bottom-[0px] -right-[300px] -z-10" alt="" />
    </section>
  )
}
