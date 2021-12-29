import Navbar from "components/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
import { FaRegComment } from "react-icons/fa";
import { BlogsData } from "assets/Data/BlogsData";
import { FiChevronDown } from "react-icons/fi";

const BlogCard = ({ img, title, by, on, disc, comments }) => {
  return (
    <div className={styles.blog_card}>
      <Link to="/" className={styles.blog_card_img}>
        <img src={img} alt="" />
      </Link>
      <div className={styles.blog_card_right}>
        <Link to="/" className="fs-21px block gray-2 mb-25px">
          {title}
        </Link>
        <p className="fs-18px gray weight-3 mb-25px">
          By: <span className="weight-5">{by}</span> · {on}
        </p>

        {comments === 0 ? (
          ""
        ) : (
          <Link
            to={"/"}
            className={`mb-40px weight-3 fs-18px gray ${styles.blog_comments}`}
          >
            <FaRegComment /> <p>{comments} comments</p>
          </Link>
        )}

        <p className="fs-18px gray-2 weight-3 mb-35px">{disc}</p>

        <Link to="/" className="fs-18px weight-3 gray custom-underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

const DropdownItem = ({ title, onClick, selectedValue }) => {
  return (
    <div
      className={`${styles.dropdownBodyItem} ${
        selectedValue === title ? styles.active : ""
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

  return (
    <div>
      <Navbar hamburgerColor="black" />
      <div className="mt-120px mb-100px">
        <div className="container-wrapper relative">
          <div className={styles.dropdownWrapper}>
            <div
              onClick={() => setshowDropdown(!showDropdown)}
              className={`${styles.dropdownBtn} ${
                showDropdown ? styles.active : ""
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

          {BlogsData.map((data, index) => (
            <BlogCard
              img={data.img}
              title={data.title}
              by={data.by}
              on={data.on}
              disc={data.disc}
              comments={data.comments}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
