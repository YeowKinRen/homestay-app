import HeroSection from './components/HeroSection'
import HomestayList from './components/HomestayList'
import Footer from './components/Footer'
import NavigationBar from './components/NavigationBar'


export default function App() {
  return (
    <div>
    <NavigationBar />

      <HeroSection />
      <main className="p-6">
        <HomestayList />
      </main>
      <Footer />
    </div>


  )
}
