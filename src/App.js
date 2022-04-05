import './assets/css';
import Header from './components/Header';
import Slide from './components/Slide';
import Banner from './components/Banner';
import Advert from './components/Advert';
import Service from './components/Service';
import WorkingProcess from './components/WorkingProcess';
import Location from './components/Location';
import Form from './components/Form';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <Header/>
      <Slide/>
      <Advert/>
      <Service/>
      <WorkingProcess/>
      <Location/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
