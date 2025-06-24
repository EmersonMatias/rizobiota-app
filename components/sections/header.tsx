import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="w-full h-20 fixed top-0 left-0 flex justify-between  px-20 text-white bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="flex gap-10 items-center text-lg">
        <p>Home</p>
        <p>Contato</p>
        <p>Loja</p>
        <p>App</p>
      </div>

      <div className="h-full w-auto  mt-5 absolute absolute-center-x">
        <img src="logo-yellow.png" className="w-full h-full object-contain" />
      </div>

      <div className="flex items-center gap-10">
        <FaWhatsapp className="w-6 h-6" />
        <FaLinkedinIn className="w-6 h-6" />
        <FaInstagram className="w-6 h-6" />
      </div>
    </header>
  )
}
