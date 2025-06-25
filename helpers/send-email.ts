import emailjs from '@emailjs/browser'

export default async function sendEmail(
  e: Form,
  reset: () => void,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  setLoading(true)

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
  const TEMPLATE_PARAMS = {
    from_name: e.name,
    message: e.message,
    from_email: e.email,
    from_phone: e.phone,
    from_checkbox: e.checkbox
  }
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

  try {
    await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, TEMPLATE_PARAMS, PUBLIC_KEY)
    reset()
    setLoading(false)
  } catch (error) {
    console.log(error)
    setLoading(false)
  }
}
