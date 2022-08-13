import React from "react";
import styles from "./GetQuote.module.css";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";

function GetQuote() {
  return (
    <>
      <Navbar />
      <div className={`${styles.getQuote} pt-88px`}>
        <div className="container-wrapper">
          <div className={styles.getQuote_wrapper}>
            <p className="fs-52px mb-30px white weight-2 text-center">
              Our Experts Will be <span className="weight-4">Happy</span> to
              Help You
            </p>
            <form className={styles.get_quote_form}>
              <div
                className={`${styles.get_quote_form_input} ${styles.required}`}
              >
                <input type="text" placeholder="Name" className="fs-14px" />
              </div>
              <div
                className={`${styles.get_quote_form_input} ${styles.required}`}
              >
                <input type="email" placeholder="Email" className="fs-14px" />
              </div>
              <div
                className={`${styles.get_quote_form_input} ${styles.required}`}
              >
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="fs-14px"
                />
              </div>

              <div className={styles.get_quote_form_row}>
                <div
                  className={`${styles.get_quote_form_input} ${styles.required}`}
                >
                  <select className="fs-14px">
                    <option value="" class=" ">
                      Architecture
                    </option>
                    <option value="Interior" class=" ">
                      Interior
                    </option>
                    <option value="Landscaping" class=" ">
                      Landscaping
                    </option>
                    <option value="Construction" class=" ">
                      Construction
                    </option>
                  </select>
                </div>
                <div
                  className={`${styles.get_quote_form_input} ${styles.required}`}
                >
                  <select className="fs-14px">
                    <option value="" class=" ">
                      Sector
                    </option>
                    <option value="Residential" class=" ">
                      Residential
                    </option>
                    <option value="Commercial" class=" ">
                      Commercial
                    </option>
                    <option value="Public Building" class=" ">
                      Public Building
                    </option>
                    <option value="Farm House" class=" ">
                      Farm House
                    </option>
                  </select>
                </div>
              </div>

              <div className={styles.get_quote_form_row}>
                <div
                  className={`${styles.get_quote_form_input} ${styles.required}`}
                >
                  <input
                    type="text"
                    placeholder="Your City Name"
                    className="fs-14px"
                  />
                </div>
                <div
                  className={`${styles.get_quote_form_input} ${styles.required}`}
                >
                  <input
                    type="text"
                    placeholder="Location Of Site"
                    className="fs-14px"
                  />
                </div>
              </div>

              <div
                className={`${styles.get_quote_form_input} ${styles.required} ${styles.textarea}`}
              >
                <textarea
                  placeholder="Any additional Requirements"
                  className="fs-14px"
                ></textarea>
              </div>

              <button
                type="submit"
                className="weight-6 white fs-16px text-center pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default GetQuote;
