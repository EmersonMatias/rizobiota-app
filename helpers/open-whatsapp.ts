export default function openWhatsapp(number: string) {
  const url = `https://wa.me/${number}`
  window.open(url, '_blank')
}
