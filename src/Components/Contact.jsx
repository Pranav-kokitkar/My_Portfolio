import "../Styles/Contact.css";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { ToastContainer, toast, Bounce } from "react-toastify";




export const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ef3ff613-6219-4336-a6fd-d0fe7d33a5bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }


    toast.success(`Got your message — I’ll reply soon! `, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <section className="contact-container">
      <div className="contact-card" id="contact">
        <div className="l-contact">
          <h1>Get In Touch</h1>
          <p>
            <span>
              Have any questions, opportunitiess, or just want to say hello ?
            </span>{" "}
          </p>
          <p>Conatact me, and l'll get back to you soon</p>
          <p>
            Alternatively, you can email me at{" "}
            <a href="mailto:kokitkarpranav@gmail.com" target="_blank">
              kokitkarpranav@gmail.com
            </a>
          </p>
        </div>

        <form onSubmit={onSubmit} className="r-contact">
          <div className="labels">
            <label>Full Name: </label>
            <input
              name="name"
              type="text"
              placeholder="Enter Full name"
              required
            ></input>
          </div>

          <div className="labels">
            <label>Email Address:</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              required
            ></input>
          </div>

          <div className="labels">
            <label>Your Message: </label>
            <textarea
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <input type="submit" value="Send" className="submit"></input>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </section>
  );
};
