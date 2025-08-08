import HeroSection from './components/HeroSection'
import HomestayList from './components/HomestayList'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'
import AboutSection from './components/AboutSection'


export default function App() {
  return (
    <div>
    <NavigationBar />

      <HeroSection />
      <main className="p-6">
        <HomestayList />
        <AboutSection />

      </main>
      <Footer />
    </div>


  )
}
