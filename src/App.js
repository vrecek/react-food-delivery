import './css/index.css'
import Nav from "./components/Nav/Nav";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import StepsCont from './components/Steps/StepsCont';
import ShipmentSection from './components/Shipment/ShipmentSection';
import DeliverSection from './components/Shipment/DeliverSection';
import Sponsors from './components/Sponsors/Sponsors';
import CommentSection from './components/Comments/CommentSection';
import Footer from './components/Footer/Footer';
import SearchCont from './components/Search/SearchCont';
import { AiOutlineArrowUp } from 'react-icons/ai'
import { useRef, useEffect } from 'react';

function App() {
  const scrl = useRef()
  let visible = false

  const scrollUp = () => window.scrollTo(0,0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(!visible && window.scrollY > 700) {
        visible = true
        scrl.current.style.opacity = '1'
        scrl.current.style.pointerEvents = 'all'
  
      }else if(visible && window.scrollY < 700) {
        visible = false
        scrl.current.style.opacity = '0'
        scrl.current.style.pointerEvents = 'none'
      }
    })
  })

  return (
    <div className='wrap-html'>
      <section ref={ scrl } onClick={ scrollUp } className='uparrow'>
        <span> <AiOutlineArrowUp /> </span>
      </section>

      <Nav />

      <Header />

      <SearchCont />

      <Cards />
      
      <StepsCont />

      <CommentSection />

      <ShipmentSection />
      <DeliverSection />

      <Sponsors />

      {/* send opinion */}

      <Footer />
    </div>
  );
}

export default App;
