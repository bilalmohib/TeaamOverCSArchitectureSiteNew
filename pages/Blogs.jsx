import React, { useState, useEffect } from "react";

import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/layouts/Footer/Footer";
import IndividualBlogs from "../src/components/IndividualBlogs";

//Importing firebase
import firebase from "../src/firebase/index";
import "firebase/firestore";
import "firebase/auth";

const Blogs = () => {
  const [firestoreData, setFirestoreData] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signedInUserData, setSignedInUserData] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setStatus(true);
        setSignedInUserData(user);
        console.log("........... User email is equal to : ", user.email);
        // loadData();
      } else {
        setStatus(false);
        setSignedInUserData(null);
        //Will work on the login part later on
        // router.push('/');
      }
    });

    console.log("All the data in the Blog is: ", firestoreData);

    const db = firebase.firestore();
    db.collection(`Blogs`)
      .get()
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((element) => {
          data.push(
            Object.assign(
              {
                id: element.id,
                uid: element.uid,
                BlogAuthor: element.BlogAuthor,
                BlogCategory: element.BlogCategory,
                BlogCoverImageUrl: element.BlogCoverImageUrl,
                BlogCoverPara: element.BlogCoverPara,
                BlogDescription: element.BlogDescription,
                BlogHashTagsArray: element.BlogHashTagsArray,
                BlogSubmissionDate: element.BlogSubmissionDate,
                BlogTitle: element.BlogTitle,
                uid: element.uid,
                userEmail: element.userEmail,
              },
              element.data()
            )
          );
        });
        console.log("data of blogs from cloud is equal to ==> ", data);

        if (firestoreData.length !== data.length) {
          setFirestoreData(data);
          setLoading(false);
          console.log("Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  }, [firestoreData]);

  return (
    <div>
      <div className="darkMode">
        <Navbar darkMode={true} />

        <div className="container darkMode">
          <h1 className="text-white blogHeader">Blogs</h1>
          <p className="text-white blogInfo">
            We write on a variety of topics ranging from technology to politics
            to architect.
          </p>
          <div className="blogContainer darkMode">
            {loading ? (
              <h1 className="text-white">Loading ...</h1>
            ) : (
              <>
                {firestoreData.length === 0 ? (
                  <h1 className="text-white">No Blogs Found</h1>
                ) : (
                  <>
                    {firestoreData.map((data, i) => {
                      return (
                        <div key={i}>
                          <IndividualBlogs
                            key={data.id}
                            BlogAuthor={data.BlogAuthor}
                            BlogCategory={data.BlogCategory}
                            BlogCoverImageUrl={data.BlogCoverImageUrl}
                            BlogCoverPara={data.BlogCoverPara}
                            BlogDescription={data.BlogDescription}
                            BlogHashTagsArray={data.BlogHashTagsArray}
                            BlogSubmissionDate={data.BlogSubmissionDate}
                            BlogTitle={data.BlogTitle}
                            uid={data.uid}
                            userEmail={data.userEmail}
                          />
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Blogs;
