import { Dots } from "../../icons/dots";
// import PostImage from "../PostImage";
import { Heart } from "../../icons/heart";
import { Comment } from "../../icons/comment";
import avatarImg from "../../img/avatarImg.png";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post">
        <PostTopBar name="Klutch" />
        <img src="https://via.placeholder.com/325/151718/cccccc%20" alt="" />
        <PostToolBar />
        <PostLiked />
        <PostCaption />
        <PostComments />
        <PostTime />
      </div>
    </div>
  );
};

const PostTopBar = ({ name }) => {
  return (
    <div className="post-top-bar">
      <div
        style={{
          margin: "auto 1rem",
          // width: "25%",
          // height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "30px",
            height: "30px",
            margin: "0 auto 0 auto",
            borderRadius: "50%",
            boxShadow: "1px 1px 12px #030303aa",
          }}
          src={avatarImg}
          alt=""
        />
      </div>
      <h3 className="post-top-bar-username">{name}</h3>
      <Dots size="25" style={{ color: "#eeeeee" }} />
    </div>
  );
};

const PostToolBar = () => {
  return (
    <div className="post-tool-bar">
      <Heart size="25" />
      <Comment size="25" />
    </div>
  );
};

const PostLiked = () => {
  return (
    <div className="post-liked-bar">
      <h5>6 likes</h5>
    </div>
  );
};

const PostCaption = () => {
  return (
    <div className="post-caption">
      <h5>
        <b style={{ fontWeight: 600, marginRight: "0.25rem", fontSize: "110%" }}>
          Klutch
        </b>
        <span
          style={{
            fontWeight: 200,
            fontSize: "100%",
            fontFamily: "sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          This is a caption!
        </span>
      </h5>
    </div>
  );
};

const PostComments = () => {
  return (
    <div className="post-comments">
      <h5>View 1 comments</h5>
    </div>
  );
};

const PostTime = () => {
  return (
    <div className="post-time">
      <p style={{ fontSize: "75%", fontFamily: "sans-serif" }}>1 day ago</p>
    </div>
  );
};

export default Post;
