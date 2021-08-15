import { Suspense, lazy } from "react";
import { posts } from "../../data";
const Post = lazy(() => import("../Post"));

const Loading = () => (
  <div
    style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      height: `100vh`,
      width: `100vw`,
    }}
  >
    <div className="loader" />
  </div>
);

const PostsFeed = () => {
  return (
    <>
      {posts.map((post) => {
        const { id, owner, likes, liked, caption, comments, createdAt, imageUrl } = post;

        return (
          <Suspense fallback={<Loading />}>
            <Post
              key={id}
              owner={owner}
              likes={likes}
              liked={liked}
              caption={caption}
              comments={comments}
              createdAt={createdAt}
              imageUrl={imageUrl}
            />
          </Suspense>
        );
      })}
    </>
  );
};

export default PostsFeed;
