import React, { useState, useEffect } from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import { FaRegComment } from "react-icons/fa";
import { BlogsData } from "assets/Data/BlogsData";
import { FiChevronDown } from "react-icons/fi";
import { Outlet } from "react-router-dom";
import LatestCardsWrapper from "components/Cards/LatestCardsWrapper/LatestCardsWrapper";
import blogsAndNewsData from "assets/Data/blogsAndNewsData.json";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { useNavigate } from "react-router-dom";

import BlogCard from "./BlogCard";

import "./style.css";

//Importing firebase
import firebase from "../../firebase";
import 'firebase/firestore';
import 'firebase/auth';

const DropdownItem = ({ title, onClick, selectedValue }) => {
  return (
    <div
      className={`${styles.dropdownBodyItem} ${selectedValue === title ? styles.active : ""
        } fs-18px gray weight-3 pointer`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

function Blogs() {
  const [showDropdown, setshowDropdown] = React.useState(false);
  const [selectedValue, setselectedValue] = React.useState("Categories");

  const menuItemHandler = (value) => {
    setselectedValue(value);
    setshowDropdown(false);

    if (value === selectedValue) {
      setselectedValue("Categories");
    }
  };

  const navigate = useNavigate();

  const [firestoreData, setFirestoreData] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signedInUserData, setSignedInUserData] = useState({});

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setStatus(true);
        setSignedInUserData(user);
        console.log("........... User email is equal to : ", user.email)
        // loadData();
      }
      else {
        setStatus(false)
        setSignedInUserData(null);
        navigate('/');
      }
    })

    console.log("All the data in the staff component is: ", firestoreData);

    if (status) {
      //SendNotifications();
      const db = firebase.firestore();
      db.collection(`Blogs`)
        .get()
        .then(snapshot => {
          // uid: this.state.signedInUserData.uid,
          // userEmail: this.state.signedInUserData.email,
          // BlogTitle: this.state.BlogTitle,
          // BlogCategory: this.state.BlogCategory,
          // BlogDescription: this.state.BlogDescription,
          // BlogCoverImageUrl: this.state.BlogFrontImageURL,
          // BlogCoverPara: this.state.FrontParaBlog,
          // BlogAuthor: this.state.BlogAuthor,
          // BlogSubmissionDate: dateTime,
          // BlogHashTagsArray: this.state.BlogHashTagsArray
          let data = [];
          snapshot.forEach(element => {
            data.push(Object.assign({
              "id": element.id,
              "uid": element.uid,
              "userEmail": element.userEmail,
              "BlogTitle": element.BlogTitle,
              "BlogCategory": element.BlogCategory,
              "BlogDescription": element.BlogDescription,
              "BlogCoverImageUrl": element.BlogCoverImageUrl,
              "BlogCoverPara": element.BlogCoverPara,
              "BlogAuthor": element.BlogAuthor,
              "BlogSubmissionDate": element.BlogSubmissionDate,
              "BlogHashTagsArray": element.BlogHashTagsArray,
            }, element.data()))
          })
          console.log("data of blogs from cloud is equal to ==> ", data)
          ///////////////////////////////Here is the code for sending notifications
          ///////////////////////////////Here is the code for sending notifications

          ///////////////////////////////Here is the code for sending notifications
          ///////////////////////////////Here is the code for sending notifications

          if (firestoreData.length !== data.length) {
            setFirestoreData(data);
            setLoading(true);
            console.log("Updated")
          }
        }).catch(err => {
          console.log(err)
        })
    }
  })

  return (
    <div>
      <Navbar hamburgerColor="black" />

      <div className="mt-120px mb-100px">
        <Outlet />
        <div className="container-wrapper relative">
          <div className={styles.dropdownWrapper}>
            <div
              onClick={() => setshowDropdown(!showDropdown)}
              className={`${styles.dropdownBtn} ${showDropdown ? styles.active : ""
                } fs-18px weight-3 black pointer`}
            >
              {selectedValue} <FiChevronDown />
            </div>

            <div className={styles.dropdownBody}>
              <DropdownItem
                selectedValue={selectedValue}
                title="All"
                onClick={() => menuItemHandler("All")}
              />
              <DropdownItem
                selectedValue={selectedValue}
                title="Stories"
                onClick={() => menuItemHandler("Stories")}
              />
              <DropdownItem
                selectedValue={selectedValue}
                title="Theory"
                onClick={() => menuItemHandler("Theory")}
              />
            </div>
          </div>

          <div className={styles.content_container}>
            <div className={styles.blogCard_wrapper}>
              {firestoreData.map((element, index) => (
                <div key={index}>
                  <BlogCard
                    uid={element.uid}
                    userEmail={element.userEmail}
                    BlogTitle={element.BlogTitle}
                    BlogCategory={element.BlogCategory}
                    BlogDescription={element.BlogDescription}
                    BlogCoverImageUrl={element.BlogCoverImageUrl}
                    BlogCoverPara={element.BlogCoverPara}
                    BlogAuthor={element.BlogAuthor}
                    BlogSubmissionDate={element.BlogSubmissionDate}
                    BlogHashTagsArray={element.BlogHashTagsArray}
                  />
                </div>
              ))}
            </div>
            <div className={styles.right_content}>
              <div style={{ position: "sticky", top: "100px", left: 0 }}>
                <LatestCardsWrapper
                  data={blogsAndNewsData}
                  title="Table of Contents"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
