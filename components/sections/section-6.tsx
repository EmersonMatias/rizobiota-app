'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

export default function Section6() {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const feedbacks = [
    {
      name: 'Alice Santana',
      company: 'EduTech Brasil',
      statement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae sapien ac justo tincidunt lacinia.'
    },
    {
      name: 'Bruno Ferreira',
      company: 'DevHive',
      statement:
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    },
    {
      name: 'Carla Lima',
      company: 'Verde Natural',
      statement:
        'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Daniel Costa',
      company: 'FlowUX Studio',
      statement:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      name: 'Eduarda Silva',
      company: 'Code4All',
      statement:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      name: 'Felipe Rocha',
      company: 'ImpactAds',
      statement:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
    },
    {
      name: 'Gabriela Mota',
      company: 'FreeConnect',
      statement:
        'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
    },
    {
      name: 'Henrique Souza',
      company: 'NeuralBase',
      statement: 'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
    },
    {
      name: 'Isabela Ribeiro',
      company: 'CredFácil',
      statement:
        'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.'
    },
    {
      name: 'João Mendes',
      company: 'ScaleUp',
      statement:
        'Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.'
    }
  ]

  return (
    <section className="py-10 px-5 bg-[#f9f9f9] md:py-20 md:px-20">
      <h1 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-4xl ">
        DEPOIMENTOS DE <span className="text-secondary">CLIENTES</span>
      </h1>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container basis-1/3">
          {feedbacks.map(({ company, name, statement }, index) => {
            return (
              <div
                className="shadow-black border   shadow-md px-3 py-5 rounded-lg text-center embla__slide"
                key={index}
              >
                <p>{statement}</p>

                <div className="font-bold flex flex-col gap-2 mt-5 text-secondary">
                  <p>{name}</p>
                  <p>{company}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="w-full flex  justify-center gap-5 mt-5">
          <button className="embla__prev" onClick={scrollPrev}>
            <FaArrowAltCircleLeft className="w-8 h-8 text-secondary" />
          </button>
          <button className="embla__next" onClick={scrollNext}>
            <FaArrowAltCircleRight className="w-8 h-8 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  )
}
