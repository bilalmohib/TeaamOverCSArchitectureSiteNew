import React from "react";
import styles from "./BlogModal.module.css";
import { BlogsData } from "assets/Data/BlogsData";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGooglePlusSquare,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import LazyLoad from "react-lazyload";

function BlogModal() {
  const [data, setData] = React.useState(null);
  const { blogId } = useParams();
  let navigate = useNavigate();

  React.useEffect(() => {
    let result = BlogsData.find((data) => data.id === blogId);
    setData(result);
  }, [blogId]);

  React.useEffect(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  const goBack = () => {
    document.body.style.overflowY = "scroll";
    navigate(-1);
  };

  return (
    <div className={styles.blog_details_modal_wrapper}>
      <div className={styles.blog_details_modal}>
        <IoCloseSharp
          onClick={goBack}
          className={`gray-2 pointer ${styles.close_modal}`}
          size={30}
        />

        <LazyLoad once={true}>
          <img
            src={data?.fullImg}
            className={`${styles.hero_img} mb-40px`}
            alt=""
          />
        </LazyLoad>

        <div className="container-wrapper">
          <p className="fs-21px block gray-2 mb-20px">{data?.title}</p>
          <p className="fs-18px gray weight-3 mb-50px">
            By: <span className="weight-5">{data?.by}</span> · {data?.on}
          </p>

          <div className={styles.blog_disc}>
            <div className={styles.blog_disc_left}>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                Most Hamptons houses are designed to fulfill client dreams of
                luxury and lifestyle, in a process that relies heavily on
                photos. But architecture is also an art, independent of
                photography, with the capacity to provoke thought. And you can’t
                see architectural thought in photos, really. You need to look at
                floor plans.
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                When I say this, my clients insist that they “can’t read plans.”
                This is no surprise, since we live in a world where even shelter
                magazines no longer print floor plans on their glossy pages. But
                plans do matter, because that’s where buildings are
                conceptualized – the napkin sketch. As the renaissance
                architect, Leon Battista Alberti, famously proclaimed:
                architects make drawings!
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                I assure my clients that plans are not difficult to read. They
                are just diagrams, little different from a subway map or the
                gameboard for Clue. But since my profession has been complicit
                in creating this disability, I also offer them this insight:
                architecture is not just a visual art, it is a narrative art as
                well. You can employ the very skills you acquired in school for
                analyzing books and movies to discover the art in our designs.
                If you know poetry, all the better.
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                Try this approach with the plans on this page. First, think of
                rooms as characters, then find the front door and start
                “walking” through the plans looking for clues about each space.
                We’ve purposely removed the easy clues, like furniture and
                cabinetry, so you will have to look closely. You’ll quickly see
              </p>
            </div>
            <div className={styles.blog_disc_right}>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                how easy this becomes.
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                Next, recognize that each path you take through a plan is like a
                plot, or subplot, in the lives of those who might live there.
                After all, every house will have lots of “readers.” Respect the
                fact that in a great story, even minor characters are essential.
                The passage from garage to kitchen, for instance, should be
                designed with as much care as the path from front door to living
                room. Houses are nothing if not evolving family epics.
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                I could write at length about narratives, but the plans on this
                page have another quality worth mentioning. They have an
                abstract and graphic beauty all their own. Like Moroccan tile
                patterns, great diagrams have the ability to trap us in their
                worlds. We might see symmetries at first, and think we
                understand their order. Then we discover asymmetrical moments
                that contradict, and metaphors emerge. Order vs. Chaos. Rules
                vs. License. Code vs. Mutation.
              </p>
              <p className="fs-16px gray-2 weight-3 mb-20px">
                In his first, and most provocative, book the noted architect
                Robert Venturi identified complexity and contradiction as the
                key to architectural thought – our poetics. Opinions will vary,
                but there can be no doubt that when viewed in this way,
                architecture has the capacity to produce pleasures well beyond
                the pleasures we associate with the images of luxury captured by
                photographs.
              </p>
            </div>
          </div>

          <div className={`${styles.blog_analytics} mb-50px`}>
            <div className={styles.blog_analytics_left}>
              <p className="fs-16px gray weight-3">Categories</p>
            </div>
            <div className={styles.blog_analytics_right}>
              <p className="fs-16px gray weight-3 mb-15px">Share</p>

              <div className={styles.blog_social_icons}>
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

          <div className={`${styles.contact_wrapper} mb-50px`}>
            <div className={styles.contact_left}>
              <p className="fs-18px gray ">Comments:</p>

              {data?.comments.map((data, index) => (
                <div className={styles.comment}>
                  <p className={`fs-18px gray weight-3 mb-20px`}>
                    {data.from} · {data.on}
                  </p>
                  <p className={`fs-18px gray-2 weight-3 `}>{data?.comment}</p>
                </div>
              ))}
            </div>
            <div className={styles.contact_right}>
              <form action="">
                <div className={`${styles.form_row} mb-30px`}>
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

          <div className={`${styles.post_navigator} mb-40px`}>
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
    </div>
  );
}

export default BlogModal;
