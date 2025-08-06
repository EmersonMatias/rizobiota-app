import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#000000]  text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-10 px-5">
        <div className="flex  items-center justify-center w-full gap-3 lg:w-[400px] lg:items-center lg:justify-start">
          <img src="/logo-yellow.png" alt="Company Logo" className="w-20 h-auto" loading="lazy" />
        </div>

        <div className="flex gap-5  font-semibold w-full justify-center lg:w-fit">
          <Link href="/">Início</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/quem-somos">Loja</Link>
          <Link href="/contato">App</Link>
        </div>

        <div className="flex flex-col gap-2 w-full items-center  lg:w-[400px] lg:items-end  ">
          <div className="flex gap-10">
            <Link href="https://wa.me/16999923882" target="_blank">
              <FaWhatsapp className="w-6 h-6" />
            </Link>

            <Link href="https://www.linkedin.com/company/bymycell/" target="_blank">
              <FaLinkedinIn className="w-6 h-6" />
            </Link>

            <Link href="https://www.instagram.com/rizobiota_/" target="_blank">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-8 pt-5 text-center">
        <p className="text-sm mb-2">CNPJ: 00.000.000/0000-00</p>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Rizobiota. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
