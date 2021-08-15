import { useState } from "react";
import { Dots } from "../../icons/dots";
// import PostImage from "../PostImage";
import { Heart, HeartActive } from "../../icons/heart";
import { Comment } from "../../icons/comment";

const Post = ({ owner, liked, likes, caption, comments, createdAt, imageUrl }) => {
  const [isLiked, setIsLiked] = useState(liked);
  const [likesCount, setLikesCount] = useState(likes);

  const toggleLike = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikesCount(likesCount + 1);
    } else {
      setIsLiked(false);
      setLikesCount(likesCount - 1);
    }
  };

  return (
    <div className="post-container">
      <div className="post">
        <PostTopBar owner={owner} />
        <img src={imageUrl} alt="" />
        <PostToolBar isLiked={isLiked} toggleLike={toggleLike} />
        <PostLiked likes={likesCount} />
        <PostCaption owner={owner} caption={caption} />
        <PostComments comments={comments} />
        <PostTime createdAt={createdAt} />
      </div>
    </div>
  );
};

const PostTopBar = ({ owner }) => {
  return (
    <div className="post-top-bar">
      <div
        style={{
          margin: "auto 1rem",
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
          src={owner.photoURL}
          alt=""
        />
      </div>
      <h3 className="post-top-bar-username">{owner.username}</h3>
      <Dots size="25" style={{ color: "#eeeeee" }} />
    </div>
  );
};

const PostToolBar = ({ isLiked, toggleLike }) => {
  return (
    <div className="post-tool-bar">
      {isLiked ? (
        <HeartActive style={{ color: "#ff3e3e" }} size="25" onClick={toggleLike} />
      ) : (
        <Heart size="25" onClick={toggleLike} />
      )}
      <Comment size="25" />
    </div>
  );
};

const PostLiked = ({ likes }) => {
  return (
    <div className="post-liked-bar">
      <h5>{likes} likes</h5>
    </div>
  );
};

const PostCaption = ({ caption, owner }) => {
  return (
    <div className="post-caption">
      <h5>
        <b style={{ fontWeight: 600, marginRight: "0.25rem", fontSize: "110%" }}>
          {owner.username}
        </b>
        <span
          style={{
            fontWeight: 200,
            fontSize: "100%",
            fontFamily: "sans-serif",
            letterSpacing: "0.5px",
          }}
        >
          {caption}
        </span>
      </h5>
    </div>
  );
};

const PostComments = ({ comments }) => {
  return comments ? (
    <div className="post-comments">
      <h5>View {comments} comments</h5>
    </div>
  ) : (
    <></>
  );
};

const PostTime = ({ createdAt }) => {
  return (
    <div className="post-time">
      <p style={{ fontSize: "75%", fontFamily: "sans-serif" }}>{createdAt}</p>
    </div>
  );
};

export default Post;
