
import "./Contact.css"
import React from "react";

function Contact() {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4">
      <form className="form">
      <h1>Contact Us</h1>

      <label>Name</label>
      <input placeholder="name" />

      <label>Email</label>
      <input placeholder="Email" />

      <label>Message</label>
      <textarea placeholder="Message" />

      <button type="submit">Submit</button>
    </form>
      </div>
  );
}

export default Contact;
