import hotel from "../images/hotel.svg";
import hotelLight from "../images/hotel-light.svg";
import about from "../images/about.svg";
import aboutLight from "../images/about-light.svg";
import contact from "../images/contact.svg";
import contactLight from "../images/contact-light.svg";
import { useState } from "react";

function Header(props) {
  const elementosNav = [
    {
      texto: "Hotels",
      icono: props.modoOscuro ? hotelLight : hotel,
      seccion: "hotels",
    },
    {
      texto: "About us",
      icono: props.modoOscuro ? aboutLight : about,
      seccion: "aboutUs",
    },
    {
      texto: "Contact",
      icono: props.modoOscuro ? contactLight : contact,
      seccion: "contact",
    },
  ];

  const [isNavOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };
  const componentesNav = elementosNav.map((elemento, index) => {
    return (
      <li className="nav-item" key={"item-" + index}>
        <a
          key={"nav-" + elemento.texto}
          href={`/${elemento.seccion}`}
          className="nav--link"
          style={{
            color: props.modoOscuro ? "white" : "#0e141b",
            backgroundColor: props.modoOscuro ? "#0e141b" : "white",
          }}
        >
          <img
            src={elemento.icono}
            className="nav--icono"
            alt={`Icono ${elemento.texto}`}
          />
          {elemento.texto}
        </a>
      </li>
    );
  });

  return (
    <nav
      className={`navbar bg-body-tertiary navbar-expand-lg`}
      style={{
        color: props.modoOscuro ? "white" : "#0e141b",
        backgroundColor: props.modoOscuro ? "#0e141b" : "white",
      }}
    >
      <div
        className="container-fluid"
        style={{
          color: props.modoOscuro ? "white" : "#0e141b",
          backgroundColor: props.modoOscuro ? "#0e141b" : "white",
        }}
      >
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: props.modoOscuro ? "white" : "#0e141b",
            backgroundColor: props.modoOscuro ? "#0e141b" : "white",
          }}
        >
          Hotel Booking
        </a>
        <button
          style={{
            color: props.modoOscuro ? "white" : "#0e141b",
            backgroundColor: props.modoOscuro ? "#0e141b" : "white",
          }}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleNavToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            {componentesNav}
            <li className="nav-item">
              <button
                className={`esquemaColor ${
                  props.modoOscuro ? "esquemaColor--oscuro" : ""
                }`}
                onClick={props.cambiarModo}
              >
                {!props.modoOscuro ? "Dark Mode" : "Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className="navPortafolio">
    //   <div className="nav--links">
    //     <button
    //       className={`esquemaColor ${
    //         props.modoOscuro ? "esquemaColor--oscuro" : ""
    //       }`}
    //       onClick={props.cambiarModo}
    //     >
    //       {props.modoOscuro ? "Modo claro" : "Modo oscuro"}
    //     </button>
    //     {componentesNav}
    //   </div>
    // </nav>
  );
}

export default Header;
