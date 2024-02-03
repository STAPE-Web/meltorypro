import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Section1 from "@/components/Sections/1"
import Section2 from "@/components/Sections/2"
import Section3 from "@/components/Sections/3"
import Section4 from "@/components/Sections/4"
import Section5 from "@/components/Sections/5"
import Section6 from "@/components/Sections/6"
import Section7 from "@/components/Sections/7"
import Section8 from "@/components/Sections/8"
import Section9 from "@/components/Sections/9"
import Section10 from "@/components/Sections/10"
import MobileMenu from "@/components/MobileMenu"

function App() {

  return (
    <>
      <Header />
      <MobileMenu />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
      </main>

      <Footer />
    </>
  )
}

export default App
