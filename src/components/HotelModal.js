import StarRating from "./StarRating";
import location from "../images/location.svg";
function HotelModal({ hotelData, darkMode, setOpenModal }) {  
  const closeModal = () => {
    const dialog = document.getElementById("modal-hotel");
    //@ts-expect-error
    if (dialog) dialog.close();
    setOpenModal(false);
  };

  return (
    // <div className="modal-hotels">
    <dialog
      id="modal-hotel"
      className={"modal-hotels"}
      style={{
        color: darkMode ? "white" : "#0e141b",
        backgroundColor: darkMode ? "#0e141b" : "#eefafa",
      }}
    >
      <div>
        <div className="hotel-modal">
          <div className="hotel--container">
            <div className="hotel--basic-data">
              <div className="hotel--title">
                <h3 className={`hotel--name ${darkMode ? "darkModeText" : ""}`}>
                  {hotelData.name}
                </h3>
                <div className="hotel--rating-container">
                  <span
                    className={`hotel--rating ${
                      darkMode ? "darkModeText" : ""
                    }`}
                  >
                    ({hotelData.rating})
                  </span>
                  <StarRating rating={hotelData.rating} />
                </div>
              </div>
              <div className="hotel--image-container">
                <img
                  className="hotel--image"
                  src={hotelData.photo}
                  alt={`Hotel ${hotelData.name} photo`}
                />
              </div>
            </div>
            <div className="hotel--details">
              <span
                className={`hotel--location ${darkMode ? "darkModeText" : ""}`}
                href={hotelData.mapLink}
                onClick={() =>
                  window.open(
                    hotelData.mapLink,
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                {hotelData.location}
                <img
                  src={location}
                  className={`nav--icono ${darkMode ? "darkModeText" : ""}`}
                  alt={`Location icon`}
                />
              </span>
              <p
                className={`hotel--description mt-2 ${
                  darkMode ? "darkModeText" : ""
                }`}
              >
                {hotelData.description}
              </p>
            </div>
          </div>
          <div className="hotel--price">
            <p
              className={`hotel-price-amount ${darkMode ? "darkModeText" : ""}`}
            >
              US$ {hotelData.price}/night
            </p>
          </div>
          <div className="hotel-extra">
            <div
              className={`${
                darkMode ? "darkModeText" : ""
              }`}
            >
              Phone: {hotelData.phone}
            </div>
            <br />
            <div
              className={`${
                darkMode ? "darkModeText" : ""
              }`}
            >
              <h3>Rooms:</h3>
              {hotelData?.rooms?.map((room, index) => {
                return (
                  <div className="hotel-modal" key={"room-" + index}>
                    <h4
                      className={`${
                        darkMode ? "darkModeText" : ""
                      }`}
                    >
                      {room.type.toUpperCase()}
                    </h4>
                    <br />
                    <div className="hotel--image-container">
                      <img
                        className="modal--image"
                        src={room.photo}
                        alt={`Room ${room.type} photo`}
                      />
                    </div>
                    <p
                      className={`hotel-price-amount ${
                        darkMode ? "darkModeText" : ""
                      }`}
                    >
                      US$ {room.price}/night
                    </p>
                  </div>
                );
              })}
            </div>
            <br />
            <div
              className={`${
                darkMode ? "darkModeText" : ""
              }`}
            >
              <h3>Comments:</h3>
              {hotelData?.comments?.map((comment, index) => {
                return (
                  <div className="hotel-modal" key={"comment-" + index}>
                    <p
                      className={`${
                        darkMode ? "darkModeText" : ""
                      }`}
                    >
                      {comment}
                    </p>
                    <br />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="close--button">
        <button className={"btn btn-info hotel--button"} onClick={closeModal}>
          Close
        </button>
      </div>
    </dialog>
    // </div>
  );
}
export default HotelModal;
