import "./header.css";

export const Contact = () => {
  return (
    <div className="contact-container">


    <div className="contact-card">

      <div class="l-contact">
        <h1>Get In Touch</h1>
        <p>
          <span>
            Have any questions, opportunitiess, or just want to say hello ?
          </span>{" "}
        </p>
        <p>Conatact me, and l'll get back to you soon</p>
        <p>
          Alternatively, you can email us at{" "} 
          <a href="mailto:support@example.com">pranavkokitkar09@example.com</a>
        </p>
      </div>

      <form className="r-contact">
        <input type="text" placeholder="Enter Full name"></input>
        <input type="email" placeholder="Enter Email"></input>
        <textarea placeholder="Your Message"></textarea>
        <input type="submit" value="Send" className="submit"></input>
      </form>
      
    </div>

    </div>
  );
};
