import Image from 'next/image'
import Hero from './components/Hero'
import Services from './components/Services'
import Solutions from './components/Solution'
import ContactForm from './components/ContactForm'
import Welcome from './components/Welcome'

export default function Home() {
  return (
    <>
    <Hero />
    <Services />
    <Solutions />
    <ContactForm />
    </>
  )
}
