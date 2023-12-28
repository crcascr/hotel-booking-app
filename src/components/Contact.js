import { useState } from "react";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !message) {
      alert("Please fill out all fields");
      return;
    }

    // Send data to API

    setSubmitted(true);
  };

  return (
    <div className="contact container container-fluid content">
      <span className="contact--title color-text">Contact Us</span>
      {submitted ? (
        <div>
          <h3>Thanks for your message!</h3>
        </div>
      ) : (
        
          <form className="contact--form" onSubmit={handleSubmit}>
            <input
            className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
            className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
            className="form-control"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button className="btn hotel--button" type="submit">Send Message</button>
          </form>
      )}
    </div>
  );
}

export default Contact;
