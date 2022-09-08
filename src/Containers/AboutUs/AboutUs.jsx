import React from "react";
import Image from "next/image";

// Importing Icons
import { FiHome } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { BiBuildingHouse } from "react-icons/bi";

// Importing Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../layouts/Footer/Footer";
import Counter from "../../components/Counter/Counter";
import ImagesSlider from "../../components/ImagesSlider/ImagesSlider";
import { sliderData } from "../../../public/assets/Data/sliderData";
import Map from "../../components/Map/Map";

function AboutUs() {
  return (
    <div className="darkMode">
      <Navbar />

      <div className="mb-70px">
        <div className="about_bg_image">
          {/* <Image
            src="https://gmcontractors.co.uk/wp-content/uploads/2019/08/gallery-workshop-2.jpg"
            alt="aboutus_bg_1"
            width={1440}
            height={480}
            layout="responsive"
            sizes="(min-width: 75em) 33vw,
            (min-width: 48em) 50vw,
            100vw"
          /> */}

          <div className="about_bg_overlay">
            <h1>ABOUT</h1>
          </div>
        </div>
      </div>
      <div className="about_container">
        <div className="ceo_container">
          <div className="ceo_Image_Container">
            <Image
              src="https://scontent.flhe21-1.fna.fbcdn.net/v/t39.30808-6/272614519_5117449444974344_3937893167260642799_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=n52SU3t7wC8AX_jmpZC&_nc_ht=scontent.flhe21-1.fna&oh=00_AT_vjqPrN7ou4L31jkfUa7tDf6Cu3_xsDuxhZi9h8nuIcQ&oe=63058D49"
              alt="aboutus_bg_1"
              width={550}
              height={550}
              loading="lazy"
            />
          </div>
          <div className="ceo_text_container">
            <h4>About Us</h4>
            <h1>WHAT MAKES US DIFFERENT</h1>
            <p>
              My name is Habib Shiber, and my company is Final Touch Carpentry
              and Construction Pty LTD.
            </p>
            <p>
              We mainly focus on commercial and residential carpentry works that
              include cut-on-site framing, frames, trusses, interior fit-out,
              decking, strata, and insurance repair work.
            </p>
            <p>
              Additionally, our company can provide services such as painting,
              plastering, glass and aluminium windows, air-conditioning,
              floating floorboards, electrical, as well as other services that
              may be required.
            </p>
            <p>
              Additionally, we have a division that handles building work in
              accordance with client needs. Recently, we have developed our
              insurance repairs division, and I am happy to provide a reference
              letter supporting my previous statement.
            </p>
            <p>
              We strive to provide the highest quality work to meet the
              insurer’s eye for detail.
            </p>
            <button className="btn_reach_out_us">REACH OUT TO US</button>
          </div>
        </div>
      </div>

      {/* Why Choose US  */}
      <section className="why_choose_us">
        <h4>Why Choose Us</h4>
        <h5>WHY CHOOSE FINAL TOUCH CARPENTRY & CONSTRUCTION</h5>
        <p>
          Whether you’re planning your dream kitchen, building an outdoor living
          space, renovating the bathroom, or adding a fresh lick of paint to
          your home, we have the right team for the job at the right price.
        </p>
      </section>
      {/* Why Choose US  */}

      {/* Our Team */}
      <section className="our_team">
        <h4>Our Team</h4>
        <h5>
          People are at the heart of Gordon Mitchell Contractors – both the
          people who have entrusted us with building their homes, and our highly
          dedicated and skilled team who are turning their vision into reality.
        </h5>
        <p>
          Each and every member of our staff shares our ethos and takes pride in
          their work. We invest a great deal in developing and nurturing our
          team’s knowledge and skills, helping them to retain and pass on
          traditional skills and methodologies. We know that, at the end of the
          day, our buildings are only as good as the team that builds them.
        </p>
        <p>
          But we are equally passionate about marrying these approaches to the
          contemporary designs and techniques of the modern-day industry.
        </p>
        <br />
        <br />

        <div className="profileContainersBlock">
          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>
          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>
          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>

          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>

          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>
          <div className="profileContainer">
            <div className="profileImageContainer"></div>
            {/* <div className="profileTextContainer">
              <h4>Habib Shiber</h4>
              <h5>CEO</h5>
              <p>
                My name is Habib Shiber, and my company is Final Touch Carpentry
                and Construction Pty LTD.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      {/* Our Team */}

      <Footer />
    </div>
  );
}

export default AboutUs;
