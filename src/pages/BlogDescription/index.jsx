import React, { useState, useEffect } from "react";
import "./style.css";
//Importing firebase
import firebase from "../../firebase";
import 'firebase/firestore';
import 'firebase/auth';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaGooglePlusSquare,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { connect } from "react-redux";
import { get_seller_all_data } from '../../store/action/index';

function BlogDescription(props) {
    const [data, setData] = React.useState(null);

    const [firestoreData, setFirestoreData] = useState([]);
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [signedInUserData, setSignedInUserData] = useState({});

    const { blogId } = useParams();

    // const query = new URLSearchParams(useLocation().search);
    // const id = query.get("id");
    // const userEmail = query.get("userEmail");

    let navigate = useNavigate();

    // React.useEffect(() => {
    //     let result = BlogsData.find((data) => data.id === blogId);
    //     setData(result);
    // }, [blogId]);

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
                // navigate('/');
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
                            id: element.id,
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

    React.useEffect(() => {
        props.get_seller_all_data();

    }, []);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>

            <br />
            <br />
            <br />
            <br />

            <div className="container_custom">
                <h2 className="title_blog_description">{props.SELLER_DATA.BlogTitle}</h2>
                <p className="fs-18px gray weight-3 mb-50px">
                    By: <span className="weight-5">{props.SELLER_DATA.BlogAuthor}</span> · {props.SELLER_DATA.BlogSubmissionDate}
                </p>

                <img
                    alt={props.SELLER_DATA.BlogTitle}
                    title={props.SELLER_DATA.BlogTitle}
                    src={props.SELLER_DATA.BlogCoverImageUrl}
                />

                <div className="blog_paragraph" dangerouslySetInnerHTML={{ __html: props.SELLER_DATA.BlogDescription }} />

                <div className={`${`blog_analytics`} mb-50px`}>
                    <div className={`blog_analytics_left`}>
                        <p className="fs-16px gray weight-3 blog_category">Category: {props.SELLER_DATA.BlogCategory} </p>
                    </div>
                    <div className={`blog_analytics_right`}>
                        <p className="fs-16px gray weight-3 mb-15px">Share</p>

                        <div className={`blog_social_icons`}>
                            <a href="#">
                                <FaFacebookSquare size={30} />
                            </a>
                            <a href="#">
                                <FaTwitterSquare size={30} />
                            </a>
                            <a href="#">
                                <FaGooglePlusSquare size={30} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${`contact_wrapper`} mb-50px`}>
                    <div className={`contact_left`}>
                        <p className="fs-18px gray ">Comments:</p>

                        {data?.comments.map((data, index) => (
                            <div className={`comment`}>
                                <p className={`fs-18px gray weight-3 mb-20px`}>
                                    {data.from} · {data.on}
                                </p>
                                <p className={`fs-18px gray-2 weight-3 `}>{data?.comment}</p>
                            </div>
                        ))}
                    </div>
                    <div className={`contact_right`}>
                        <form action="">
                            <div className={`form_row mb-30px`}>
                                <input
                                    type="text"
                                    className="fs-16px gray-2"
                                    placeholder="Name"
                                    name=""
                                    id=""
                                />
                                <input
                                    type="text"
                                    className="fs-16px gray-2"
                                    placeholder="email"
                                    name=""
                                    id=""
                                />
                            </div>
                            <textarea
                                className="fs-16px gray-2 mb-20px"
                                placeholder="Comments"
                            ></textarea>

                            <button className="fs-18px weight-6 white" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className={`post_navigator mb-40px`}>
                    <button
                        onClick={goBack}
                        className="pointer fs-21px gray-2 weight-3 custom-underline"
                    >
                        Back to Posts
                    </button>
                    <Link to="/" className="fs-21px gray-2 weight-3 custom-underline">
                        Next Post
                    </Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.SELL,
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_seller_all_data: () => dispatch(get_seller_all_data())
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogDescription);