'use client'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import { useState } from 'react'

//Corrigir tamanho da area de hover
//Corrigir visibilidade da mensagem ao passar para fora da tela
export default function FloatingWhatsapp() {
  const [visibility, setVisibility] = useState(false)

  return (
    <Wrapper
      className="fixed right-10 bottom-10 flex items-center gap-4 animate-bounce z-20"
      onMouseEnter={() => setVisibility(true)}
      onMouseLeave={() => setVisibility(false)}
    >
      <div
        className="absolute w-[290px] bg-white px-5 py-2 rounded-lg shadow-lg shadow-secondary-800 transition-all duration-300 ease-in-out transform data-[visibility=true]:-translate-x-[calc(100%+10px)] data-[visibility=false]:translate-x-full data-[visibility=true]:opacity-100 data-[visibility=false]:opacity-0"
        data-visibility={visibility}
      >
        Alguma dúvida? Entre em contato.
      </div>
      <Link href="https://wa.me/16999923882" target="_blank" className="relative h-10 w-10">
        <img src="/whatsapp.png" alt="Icone do Whatsapp" className="w-10 h-10" />
      </Link>
    </Wrapper>
  )
}
