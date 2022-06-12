import './App.css';
import {Home} from './components/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Photo from './assets/foto.JPG'
//import data from './components/Home/Home';
import ObjectArray from "./Data/ObjectArray/Data";

function App() {
  // const data =
  //   [{
  //     name: 'Alex',
  //     surname: 'Tebbitt,',
  //     age: 31
  //   }]
  return (
    <div className="App">
      <Header />
      <Home photo={Photo} objeto={ObjectArray} />
      <Footer objeto={ObjectArray} />
    </div>
  );
}


export default App;
