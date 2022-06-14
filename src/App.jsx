import "./App.css";
import { Home } from "./components/Home/Home";

import { Header } from "./components/Header/Header";
import Photo from "./assets/foto.JPG";
//import data from './components/Home/Home';
import ObjectArray from "./Data/ObjectArray/Data";
import Contact from "./components/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              (<Home photo={Photo} objeto={ObjectArray} />)
             
            }/>
         
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
