import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Navbar from "../../../../src/components/Navbar/Navbar";
import IndividualBlogs from "../../../../src/components/IndividualBlogs";

//Importing firebase
import firebase from "../../../../src/firebase/index";
import "firebase/firestore";
import "firebase/auth";

const BlogsDescription = () => {
  const router = useRouter();
  const { category, title, id } = router.query;

  const [firestoreData, setFirestoreData] = useState([]);
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signedInUserData, setSignedInUserData] = useState({});

  useEffect(() => {
    if (typeof window != "undefined") {
      if (
        typeof category != "undefined" ||
        title != "undefined" ||
        id != "undefined"
      ) {
        console.log("Category is : ", category);
        console.log("Title is : ", title);
        console.log("Id is : ", id);
      }
    }

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
          <h1 className="text-white blogHeader">Blogs Description</h1>
          <p className="text-white blogInfo">
            Vegan Citrus Olive Oil Cake Recipe - A delicious vegan cake recipe
            that is made with fresh, organic, and natural ingredients.
          </p>
          {/* <div className="blogContainer darkMode">
            {loading ? (
              <h1 className="text-white">Loading ...</h1>
            ) : (
              
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default BlogsDescription;
