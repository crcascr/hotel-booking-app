import React from "react";
import Header from "./components/Header";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HotelList from "./components/HotelList";
import About from "./components/About";
import Contact from "./components/Contact";
import './HotelBooking.css';

function App() {
  const [modoOscuro, setModoOscuro] = React.useState(false);

  React.useEffect(() => {
    const dateEl = new Date();
    const hora = dateEl.getHours();
    const minuto = dateEl.getMinutes();
    if (hora === 17) {
      if (minuto > 45) {
        setModoOscuro(true);
      }
    } else if (hora >= 18) {
      setModoOscuro(true);
    } else {
      setModoOscuro(false);
    }
  }, []);

  function cambiarModo() {
    setModoOscuro((prevModo) => !prevModo);
  }
  return (
    <main className={`pageContainer ${modoOscuro ? "modoOscuro" : ""}`}>
      <Header cambiarModo={cambiarModo} modoOscuro={modoOscuro} />
      <BrowserRouter>
      <Routes>
        <Route path="" element={<HotelList modoOscuro={modoOscuro}/>} />
        <Route path="/" element={<HotelList modoOscuro={modoOscuro}/>} />
        <Route path="/hotels" element={<HotelList modoOscuro={modoOscuro}/>} />
        <Route path="/aboutUs" element={<About darkMode={modoOscuro}/>} />
        <Route path="/contact" element={<Contact darkMode={modoOscuro}/>} />
      </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App; 
