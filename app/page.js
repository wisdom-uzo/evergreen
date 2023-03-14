import { Inter } from 'next/font/google'
import { Hero, Footer, ChooseUsSection, NavBar, Services, Testimonials, About, CallToAction } from '../sections'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
       <NavBar />
       <Hero />
       <Services />
       <ChooseUsSection />
       <Testimonials />
       <CallToAction />
       <About />
       <Footer/>
    </main>
  )
}
