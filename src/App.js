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

function App() {
  return (
    <div className='wrap-html'>
      <Nav />

      <Header />

      <Cards />
      
      <StepsCont />

      <ShipmentSection />
      <DeliverSection />

      <Sponsors />

      <CommentSection />

      <Footer />
    </div>
  );
}

export default App;
