import { useEffect, useState } from "react";
import HotelModal from "./HotelModal";
import StarRating from "./StarRating";
import location from "../images/location.svg";

function Hotel(props) {
  const [openModal, setOpenModal] = useState(false);
  const funtionOpenModal = () => {
    const dialog = document.getElementById("modal-hotel");
    //@ts-expect-error
    if (dialog) dialog.showModal();
  };
  useEffect(() => {
    if (openModal) funtionOpenModal();
  }, [openModal]);
  return (
    <div className="hotel" key={props.hotelIndex}>
      <div className="hotel--container">
        <div className="hotel--basic-data">
          <div className="hotel--title">
            <h3
              className={`hotel--name ${props.darkMode ? "darkModeText" : ""}`}
            >
              {props.hotelData.name}
            </h3>
            <div className="hotel--rating-container">
              <span
                className={`hotel--rating ${
                  props.darkMode ? "darkModeText" : ""
                }`}
              >
                ({props.hotelData.rating})
              </span>
              <StarRating rating={props.hotelData.rating} />
            </div>
          </div>
          <div className="hotel--image-container">
            <img
              className="hotel--image"
              src={props.hotelData.photo}
              alt={`Hotel ${props.hotelData.name}`}
            />
          </div>
        </div>
        <div className="hotel--details">
          <span
            className={`hotel--location ${
              props.darkMode ? "darkModeText" : ""
            }`}
            href={props.hotelData.mapLink}
            onClick={() =>
              window.open(
                props.hotelData.mapLink,
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            {props.hotelData.location}
            <img
              src={location}
              className="nav--icono"
              alt={`Location icon`}
            />
          </span>

          <p
            className={`hotel--description mt-2 ${
              props.darkMode ? "darkModeText" : ""
            }`}
          >
            {props.hotelData.description}
          </p>
        </div>
      </div>
      <div className="hotel--price">
        <p
          className={`hotel-price-amount ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          US$ {props.hotelData.price}/night
        </p>
      </div>

      <div className="hotel--button-details">
        <button
          className={`btn btn-info hotel--button ${
            props.darkMode ? "darkModeText" : ""
          }`}
          onClick={() => {
            setOpenModal(true);
          }}
        >
          More details
        </button>
      </div>
      {openModal && (
        <HotelModal
          setOpenModal={setOpenModal}
          hotelData={props.hotelData}
          darkMode={props.darkMode}
        />
      )}
    </div>
  );
}

export default Hotel;
