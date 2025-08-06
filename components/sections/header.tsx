import Link from 'next/link'
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import SideMenu from './side-menu'

export default function Header() {
  return (
    <header className="w-full h-20 fixed top-0 left-0 flex justify-end lg:justify-between px-5  lg:px-20 text-white bg-black bg-opacity-50 backdrop-blur-md z-50">
      <div className="gap-10 items-center text-lg hidden lg:flex">
        <Link href="/">Home</Link>
        <Link href="/servicos">Serviços</Link>

        <p>Loja</p>
        <p>App</p>
      </div>

      <div className="h-full w-auto  mt-5 absolute absolute-center-x">
        <img src="/logo-yellow.png" className="w-full h-full object-contain" alt=" " />
      </div>

      <div className="items-center gap-10 hidden lg:flex">
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

      <div className="flex items-center lg:hidden">
        <SideMenu />
      </div>
    </header>
  )
}
