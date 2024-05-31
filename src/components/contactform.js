import "./contactform.css";

const ContactForm=()=>{
  return <div className="form">
              <h2>Send a message to us!</h2>
              <input placeholder="Name"/>
              <input placeholder="Email"/>
              <input placeholder="Subject"/>
              <textarea placeholder="Message" rows="5"></textarea>

              <button>Send Message</button>
  </div>
}

export default ContactForm