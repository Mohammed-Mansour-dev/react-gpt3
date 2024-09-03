import FeatureGlasses from "./components/FeatureGlasses"
import Future from "./components/Future"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import WhatIsGpt from "./components/WhatIsGpt"
import CardsSection from './components/CardsSection';
import Footer from "./components/Footer"


function App() {

  return (
   
   <main  className="" >
    <Navbar/>
<Header  />
<WhatIsGpt  />
<main 
    className="bg-gradient"
    >
  <Future />
<FeatureGlasses />
</main>

<CardsSection  />
<Footer />

  </main>
  )
}

export default App
