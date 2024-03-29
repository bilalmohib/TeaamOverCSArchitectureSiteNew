import React from "react";

// importing components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import { sliderData } from "../../../public/assets/Data/sliderData";
import ImagesSlider from "../../components/ImagesSlider/ImagesSlider";
import Map from "../../components/Map/Map";
import emailjs from '@emailjs/browser';
// Importing css
import styles from "./Contact.module.css";

function Contact() {

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m6h0iz6', 'template_9d1cxam', form.current, '6ysS4tSpQJNeiGq2Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-88px mb-100px">
        {/* <div className="mb-70px">
          <ImagesSlider sliderData={sliderData} />
        </div> */}
        <div className="container-wrapper">
          <div className={styles.contact_info}>
            <div className={styles.contact_info_left}>
              <div className="mb-50px">
                <p className="fs-40px weight-4 mb-30px">Marketing & Press</p>
                <p className="fs-21px weight-4 mb-15px">
                  For all marketing and press enquiries please contact:
                </p>

                <p className="fs-16px weight-7">Akhtar Rasool</p>
                <p className="fs-16px weight-4 mb-20px">Marketing Director</p>

                <p className="fs-16px">
                  <span className="weight-7">T</span>{" "}
                  <a
                    href="tel:+4420 7371 3000"
                    className={`black ${styles.outerLink}`}
                  >
                    +923 111 418 111
                  </a>
                </p>
                <p className="fs-16px">
                  <span className="weight-7">E</span>{" "}
                  <a
                    href="mailto:marketing@chapmantaylor.com"
                    className={`black ${styles.outerLink}`}
                  >
                    info@akhtarrasool.com
                  </a>
                </p>
              </div>
              <div>
                <p className="fs-40px weight-4 mb-30px">General Enquiries</p>

                <form
                 onSubmit={sendEmail}
                 ref={form}
                 action=""
                 className={styles.contact_form}
                >
                  <div className={styles.form_row}>
                    <input
                     type="text"
                     placeholder="Name"
                     className="fs-16px"
                     name="name"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="fs-16px"
                      name="email"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="fs-16px"
                    name="subject"
                  />
                  <textarea 
                   placeholder="Message"
                   name="message"
                  >
                  </textarea>

                  <label className={`${styles.checkboxRadio} block`}>
                    <input type="checkbox" name="termsAgreed" value="1" />
                    <span>
                      I authorise the use of my personal data by Chapman Taylor
                      in accordance with the{" "}
                      <a
                        href="/privacy-policy"
                        className="black"
                        target="_blank"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  <button type="submit" className="white pointer block fs-16px">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.contact_info_right}>
              <p className="fs-40px weight-4 mb-30px">Our Offices</p>
              <div className={styles.map}>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
