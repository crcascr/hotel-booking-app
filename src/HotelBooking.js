import React from "react";
import Header from "./components/Header";
import HotelList from "./components/HotelList";
import './HotelBooking.css';

function HotelBooking() {
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
      {/* <HotelList /> */}
    </main>
  );
}


export default HotelBooking