const IndividualBlogs = ({ BlogCoverImageUrl, BlogCoverPara, BlogTitle }) => {
  return (
    <>
      <div className="blog">
        <img
          width={"100%"}
          height={"350px"}
          title={BlogTitle}
          src={BlogCoverImageUrl}
          alt={BlogTitle}
        />
        <div className="blogText">
          <h1 className="text-white">{BlogTitle}</h1>
          <p
            className="text-white"
            dangerouslySetInnerHTML={{ __html: BlogCoverPara }}
          />
        </div>
      </div>
    </>
  );
};
export default IndividualBlogs;
