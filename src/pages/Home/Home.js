import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import LatestCardsWrapper from "components/Cards/LatestCardsWrapper/LatestCardsWrapper";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import Hero from "layouts/Home/Hero/Hero";
import Projects from "layouts/Home/Projects/Projects";
import Services from "layouts/Home/Services/Services";
import YoutubeVideo from "layouts/Home/YoutubeVideo/YoutubeVideo";
import SlideShow from "layouts/Home/SlideShow/SlideShow";
import blogsAndNewsData from "assets/Data/blogsAndNewsData.json";
import message_icon from "assets/images/message-icon.png";
import { IoCloseCircleSharp, IoSendSharp } from "react-icons/io5";
import logo_2 from "assets/images/Logo.png";

const Message = ({ msg, name, isAdmin = false }) => {
  return (
    <div className={`${styles.message} fs-14px white gray-2`}>
      <span
        className={`weight-6`}
        style={{ color: isAdmin ? "rgb(213, 12, 12)" : "rgb(139, 195, 74)" }}
      >
        {name}:
      </span>{" "}
      {msg}
    </div>
  );
};

function Home() {
  const messagesContainer = useRef();
  const [showMessageContainer, setShowMessageContainer] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Manager TOC",
      msg: "Welcome! How may i assist you?",
      isAdmin: true,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message) return;

    setMessages([...messages, { name: "abc", msg: message, isAdmin: false }]);

    setMessage("");
  };

  useEffect(() => {
    messagesContainer?.current?.scrollTo(
      0,
      messagesContainer?.current?.scrollHeight
    );
  });

  return (
    <div>
      <Navbar />
      <div className="mb-70px">
        <Hero />
      </div>

      <div className="mb-100px">
        <div className="mb-70px">
          <div className="container-wrapper">
            <div className={styles.home_division}>
              <div className={styles.home_division_left}>
                <Services />

                {/* <div className={`${styles.youtubeVideos} `}>
                  <YoutubeVideo src="https://www.youtube.com/embed/huE1DmkrH70" />
                  <YoutubeVideo src="https://www.youtube.com/embed/huE1DmkrH70" />
                </div> */}
                <SlideShow />
              </div>
              <div className={styles.home_division_right}>
                <br /> <br />
                <p className="fs-20px weight-2 mb-20px">The Latest</p>

                <div className={styles.home_division_right_cards_wrapper}>
                  <div>
                    <LatestCardsWrapper
                      data={blogsAndNewsData}
                      title="Blogs & News"
                    />
                  </div>
                  <div>
                    <LatestCardsWrapper
                      data={blogsAndNewsData}
                      title="Videos"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrapper">
          <Projects />
        </div>
      </div>

      {showMessageContainer ? (
        ""
      ) : (
        <button
          className={styles.messageBtn}
          onClick={() => setShowMessageContainer(!showMessageContainer)}
        >
          <img src={message_icon} style={{ width: "37px" }} alt="" />
        </button>
      )}

      {showMessageContainer ? (
        <div className={styles.messageContainer}>
          <div className={styles.messageContainerHeader}>
            <button
              className="pointer flex black"
              onClick={() => setShowMessageContainer(!showMessageContainer)}
            >
              <IoCloseCircleSharp size={35} />
            </button>
          </div>
          <div className={styles.messageContainerTitleBar}>
            <img
              src={logo_2}
              style={{ width: "50px", marginRight: "10px" }}
              alt=""
            />
            <div>
              <p className="fs-14px lh-1 mb-5px black weight-5">Akhtar Rasool</p>
              <p className="fs-12px lh-1 black weight-4">Cutomer Support</p>
            </div>
          </div>

          <div className={styles.messagesContainer} ref={messagesContainer}>
            {messages.map(({ name, msg, isAdmin = false }, index) => (
              <Message name={name} msg={msg} isAdmin={isAdmin} />
            ))}
          </div>

          <div className={styles.messageContainerFooter}>
            <form
              onSubmit={handleSubmit}
              className={`${styles.messageInput} mb-15px`}
            >
              <input
                type="text"
                placeholder="Type Here..."
                className="fs-14px gray-2 weight-4"
                autoFocus={true}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="pointer">
                <IoSendSharp />
              </button>
            </form>
            <p className="fs-12px gray-2 text-center">
              Powered By:{" "}
              <a href="#" className="gray-2">
                LiveAdmins
              </a>
            </p>
          </div>
        </div>
      ) : (
        ""
      )}

      <Footer />
    </div>
  );
}

export default Home;
