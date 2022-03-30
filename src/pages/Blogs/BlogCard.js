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

import { connect } from "react-redux";
import { set_seller_data } from '../../store/action/index';

import { LazyLoadImage } from "react-lazy-load-image-component";

import { useNavigate } from "react-router-dom";

import "./style.css";

//Importing firebase
import firebase from "../../firebase";
import 'firebase/firestore';
import 'firebase/auth';

const BlogCard = (props) => {

    // uid={element.uid}
    // userEmail={element.userEmail}
    // BlogTitle-={element.BlogTitle}
    // BlogCategory={element.BlogCategory}
    // BlogDescription={element.BlogDescription}
    // BlogCoverImageUrl={element.BlogCoverImageUrl}
    // BlogCoverPara={element.BlogCoverPara}
    // BlogAuthor={element.BlogAuthor}
    // BlogSubmissionDate={element.BlogSubmissionDate}
    // BlogHashTagsArray={element.BlogHashTagsArray}

    const BlogData = {
        "uid": props.uid,
        "userEmail": props.userEmail,
        "BlogTitle": props.BlogTitle,
        "BlogCategory": props.BlogCategory,
        "BlogDescription": props.BlogDescription,
        "BlogCoverImageUrl": props.BlogCoverImageUrl,
        "BlogCoverPara": props.BlogCoverPara,
        "BlogAuthor": props.BlogAuthor,
        "BlogSubmissionDate": props.BlogSubmissionDate,
        "BlogHashTagsArray": props.BlogHashTagsArray
    }

    return (
        <div className={styles.blog_card}>
            <Link onClick={() => props.set_seller_data(BlogData)} to={props.uid} className={styles.blog_card_img}>
                <LazyLoadImage alt={props.uid} src={props.BlogCoverImageUrl} />
            </Link>
            <div className={styles.blog_card_right}>
                <Link onClick={() => props.set_seller_data(BlogData)} to={`/blogDetails/${props.uid}`} className="fs-21px block gray-2 mb-25px">
                    {props.BlogTitle}
                </Link>
                <p className="fs-18px gray weight-3 mb-25px">
                    By: <span className="weight-5">{props.BlogAuthor}</span> · {props.BlogSubmissionDate}
                </p>

                {props.BlogCoverPara.length === 0 ? (
                    ""
                ) : (
                    <Link
                        onClick={() => props.set_seller_data(BlogData)}
                        to={`/blogDetails/${props.uid}`}
                        className={`mb-40px weight-3 fs-18px gray ${styles.blog_comments}`}
                    >
                        <FaRegComment /> <p>1 comments</p>
                    </Link>
                )}

                <p id="blog_cover_para" className="fs-18px gray-2 weight-3 mb-35px" dangerouslySetInnerHTML={{ __html: props.BlogDescription }} />

                <br />

                <Link onClick={() => props.set_seller_data(BlogData)} to={`/blogDetails/${props.uid}`} className="fs-18px weight-3 gray custom-underline">
                    Read More
                </Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.Sell,
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    set_seller_data: (data) => dispatch(set_seller_data(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(BlogCard);