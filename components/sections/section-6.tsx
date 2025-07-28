'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'

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
      name: 'Alexandre Santos',

      statement:
        'A análise microbiana do solo tem sido uma verdadeira revolução na nossa maneira de abordar a agricultura sustentável. Ao estudar a diversidade dos microrganismos do solo, conseguimos melhorar sua saúde e mitigar os riscos causados pelos patógenos, agindo de forma rápida e precisa. Utilizando estratégias de controle biológico que evitam o uso de produtos químicos.'
    },
    {
      name: 'Daniel Mol',
      statement:
        'Metagenômica é uma ferramenta importante para o manejo regenerativo, digo que é um zoom sobre o que não conseguimos enxergar a olho nu, e identificar a diversidade e a funcionalidade das comunidades microbianas presentes no solo. Ao analisar o DNA presente em amostras de talhões produtivos, podemos identificar os microrganismos benéficos e os maléficos, e assim tomar a melhor decisão do manejo a ser utilizado! Junto a ByMyCell e seus colaboradores, podemos compreender a composição e atividade microbiana, otimizando o melhor posicionamento a ser realizado. Além disso, a metagenômica ajuda a monitorar o impacto das recomendações e permite corrigir ou manter o manejo de forma mais eficaz e sustentável!'
    },
    {
      name: 'Jackson Bedin',
      statement:
        'As análises são excelentes. Estão ajudando muito a direcionar os manejos biológicos nas nossas áreas. Conseguimos diagnosticar os principais patógenos e também os micro-organismos benéficos em cada área. O aplicativo também ajuda muito. Tem muitas informações e é bem simples e intuitivo de utilizar. O suporte técnico também é maravilhoso. Estamos muito satisfeitos.'
    },
    {
      name: 'Joster Moreira',
      statement:
        'Passando para agradecer pela parceria e parabenizá-los pelo ótimo trabalho realizado. Através do relatório das análises, conseguimos comparar com áreas que já são feitas os tratamentos com microrganismos e identificar pontos de melhorias, podendo assim minimizar os gaps resultando em uma maior efetividade e produtividade.'
    }
  ]

  return (
    <section className="py-10 px-5 bg-[#f9f9f9] md:py-20 md:px-20">
      <h2 className="font-gabarito font-bold text-2xl tracking-widest mb-5  md:text-3xl text-center lg:text-4xl ">
        DEPOIMENTOS DE <span className="text-secondary">CLIENTES</span>
      </h2>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container basis-1/3">
          {feedbacks.map(({ name, statement }, index) => {
            return (
              <div
                className="shadow-black border   shadow-md px-3 py-5 rounded-lg text-center embla__slide"
                key={index}
              >
                <p className="line-clamp-3">{statement}</p>

                <div className="font-bold flex flex-col gap-2 mt-5 text-secondary">
                  <p>{name}</p>
                </div>
                <Dialog>
                  <DialogTrigger className="px-5 py-5 text-secondary w-full max-w-[600px] mx-auto font-semibold rounded-lg">
                    Ver avaliação completa
                  </DialogTrigger>
                  <DialogContent className="w-fit max-w-[400px] min-w-[90%] md:min-w-0">
                    <DialogHeader>
                      <DialogTitle className="text-secondary-500 text-2xl">{name}</DialogTitle>
                      <DialogDescription className="text-gray-700 text-lg  font-thin max-h-[80dvh] overflow-y-auto">
                        {statement}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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
