import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to contact us.You can also send us an email related to any
          queries for any of our courses or admission procedures or any
          suggestion
        </p>
        <ul>
          <li>✉️Mail at xyz@gmail.com</li>
          <li>📞Call at 1234567890</li>
          <li>
            📍Location is F7W8+QJ9, Kalyanpur, Kanpur, Uttar Pradesh 208012
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name"></input>
          <br></br>
          <label>Email</label>
          <input type="email" placeholder="Enter your email"></input>
          <br></br>
          <label>Message</label>
          <input type="text" placeholder="Enter your message"></input>
          <br></br>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
