import React, { useEffect, useRef } from 'react';
import './Contact.css';
import msg_icon from '../../assets/mail-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/mail-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white_arrow.jpg';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const mapRef = useRef(null);

  useEffect(() => {
    // Define initMap globally for Google Maps callback BEFORE loading the script
    window.initMap = function() {
      console.log("initMap called");
      if (window.google && mapRef.current) {
        console.log("Initializing map");
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 6.5865, lng: 79.9603 }, // Coordinates for Nagoda Kalutara
          zoom: 15,
        });

        new window.google.maps.Marker({
          position: { lat: 6.5865, lng: 79.9603 },
          map,
          title: "Our Location",
        });

        // Increase width of specific nested div inside google map container
        setTimeout(() => {
          const targetDiv = document.querySelector("#google-map > div > div:nth-child(3) > div:nth-child(1) > div:nth-child(2)");
          if (targetDiv) {
            targetDiv.style.width = "600px"; // Increase width as needed
          }
        }, 1000); // Delay to ensure element is rendered
      }
    };

    // Load Google Maps script
    const existingScript = document.getElementById('googleMaps');

    if (!existingScript) {
      const script = document.createElement('script');
      // Replaced with actual API key provided by user
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBNg3jSKWt2lFv55FB2hJY4yg1jmTXc3Yg&callback=initMap`;
      script.id = 'googleMaps';
      document.body.appendChild(script);

      // The initMap function is now called by the Google Maps API callback
      // Remove the onload handler
    } else {
      initMap();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c2eea100-7ee7-427a-a0e4-a80859a4ca46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };

  return (
    <>
      <div className="contact-map-wrapper">
        <section id="contact" className="contact">
          <div className="contact-container">
            <div className="contact-content-wrapper">
              <div className='contact-info-col'>
                <h3>Send us Message <img src={msg_icon} alt="" /></h3>
                <p>Have questions or want to learn more about our Ship Load Balancer System? 
                   We'd love to hear from you! Whether you're interested in enhancing ship stability, 
                   optimizing cargo placement, or exploring collaboration opportunities, our team is here to help.</p>
                <ul>
                  <li><img src={mail_icon} alt="" />contact@vishwadinujaya60@gmail.com</li>
                  <li><img src={phone_icon} alt="" />+94 77 123 4567</li>
                  <li><img src={location_icon} alt="" />611/C IDH Lower Road Nagoda Kalutara</li>
                </ul>
              </div>
              <div className='contact-form-col'>
                <div className="form-header">
                  <h3>Contact Us</h3>
                  <p>Fill out the form below to get in touch</p>
                </div>
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="required-field">Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                  </div>
                  
                  <div className="form-group">
                    <label className="required-field">Phone No</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                  </div>
                  
                  <div className="form-group">
                    <label className="required-field">Your Message</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                  </div>
                  
                  <button type='submit' className='btn-submit'>
                    Submit Now <img src={white_arrow} alt="" style={{ width: '20px' }} />
                  </button>
                  
                  <div className="form-footer">
                    <span>{result}</span>
                  </div>
                </form>
              </div>
              <div id="google-map" ref={mapRef} className="google-map-card" style={{ width: '400px', height: '700px' }}></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
