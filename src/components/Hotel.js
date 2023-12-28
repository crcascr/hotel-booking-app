import StarRating from "./StarRating";

function Hotel(props) {
  //console.log("Hotel props", props);
  return (
    <div className="hotel" key={props.hotelIndex}>
      <div className="hotel--title">
        <h3 className={`hotel--name ${props.darkMode ? "darkModeText" : ""}`}>
          {props.hotelData.name}
        </h3>
        <div className="hotel--rating-container">
          <span
            className={`hotel--rating ${props.darkMode ? "darkModeText" : ""}`}
          >
            ({props.hotelData.rating})
          </span>
          <StarRating rating={props.hotelData.rating} />
        </div>
      </div>
      <div className="hotel--details">
        <span
          className={`hotel--location ${props.darkMode ? "darkModeText" : ""}`}
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
        </span>
        <p
          className={`hotel--description ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          {props.hotelData.description}
        </p>
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
          className={`btn btn btn-info hotel--button ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          More details
        </button>
      </div>
    </div>
  );
}

export default Hotel;
