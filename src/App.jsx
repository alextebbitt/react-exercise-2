import './App.css';
import {Home} from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Photo from './assets/foto.JPG'

function App() {
  
  return (
    <div className="App">
      <Header/>
     <Home photo = {Photo}/>
     <Footer/>
    </div>
  );
}


export default App;
