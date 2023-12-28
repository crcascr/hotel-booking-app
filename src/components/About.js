import { useNavigate } from "react-router-dom";
import aboutHero from "../images/aboutHero.webp";

function About(props) {
const navigate = useNavigate()
  return (
    <div className="aboutUs container container-fluid content">
      <div className="aboutUs--image">
        {/* Hero Image */}
        <img src={aboutHero} className="hero-image" alt="Hotel lobby" />
      </div>
      <div className="aboutUs--content">
        <span className="aboutUs--title color-text">Our Story</span>
        <p
          className={`aboutUs--description ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          Hotel App was started in 2022 by Jane Doe out of her passion for
          travel and helping people plan amazing vacations. After spending way
          too much time trying to find the perfect hotels for her own trips,
          Jane decided to create an app that makes booking hotels fun, easy and
          affordable for everyone.
        </p>
        <div className="founder">
          <div>
            <span
              className={`aboutUs--founder color-text ${
                props.darkMode ? "darkModeText" : ""
              }`}
            >
              Jane Doe
            </span>
            <p
              className={`aboutUs--founder-description  ${
                props.darkMode ? "darkModeText" : ""
              }`}
            >
              Jane has over 10 years of experience in the travel industry. She
              started Hotel App while dreaming about her next vacation.
            </p>
          </div>
        </div>
        {/* Testimonials */}
        <span
          className={`aboutUs--testimonials color-text ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          What Our Customers Are Saying
        </span>
        <p
          className={`aboutUs--founder-description  ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          Jane has over 10 years of experience in the travel industry. She
          started Hotel App while dreaming about her next vacation.
        </p>
        {/* FAQ */}
        <span
          className={`aboutUs--faq color-text ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          Frequently Asked Questions
        </span>
        <p
          className={`aboutUs--founder-description  ${
            props.darkMode ? "darkModeText" : ""
          }`}
        >
          Jane has over 10 years of experience in the travel industry. She
          started Hotel App while dreaming about her next vacation.
        </p>
        
        {/* Call to Action */}
        <div className="aboutUs--cta">
          <span
            className={`aboutUs--cta color-text ${
              props.darkMode ? "darkModeText" : ""
            }`}
          >
            Ready for your next adventure?
          </span>
          <br/>
          <button className="btn btn btn-info hotel--button" onClick={()=>navigate("/hotels")}>
            Start Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
