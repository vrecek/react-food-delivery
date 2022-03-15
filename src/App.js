import './css/index.css'
import Nav from "./components/Nav/Nav";
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import StepsCont from './components/Steps/StepsCont';

function App() {
  // lewo step 1 prawo 2 lewo 3 end
  return (
    <>
      <Nav />
      <Header />
      <Cards />
      <StepsCont />
    </>
  );
}

export default App;
