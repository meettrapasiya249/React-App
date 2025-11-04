import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container"> 
        <div className="contact-title text-center mb-5">
          <h2>CONTACT US</h2>
          <p>WE LOVE TO HEAR FROM YOU</p>
        </div>
 
        <div className="d-flex justify-content-center flex-wrap text-center mb-5 gap-5">
          <div className="contact-item">
            <i className="ri-phone-fill fs-1"></i>
            <p className="m-0 fw-bold">060-040-0640</p>
          </div>

          <div className="contact-item">
            <i className="ri-mail-fill fs-1"></i>
            <p className="m-0 fw-bold">info@company.com</p>
          </div>

          <div className="contact-item">
            <i className="ri-map-pin-2-fill fs-1"></i>
            <p className="m-0 fw-bold">San Francisco, California</p>
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="col-md-6 d-flex flex-column gap-3 mt-5">
            <input type="text" placeholder="Name" className="form-control" />
            <input type="email" placeholder="Email" className="form-control" />
            <input type="text" placeholder="Subject" className="form-control" />
          </div>

          <div className="col-md-6 d-flex flex-column gap-3 mt-md-0 ">
            <textarea placeholder="Message" className="form-control mt-5" rows="5"></textarea>
          </div>

          <div className="w-100 text-center mt-4">
            <button type="submit">Send Message</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
