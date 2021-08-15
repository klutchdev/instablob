import { Suspense, lazy } from "react";
const Post = lazy(() => import("../Post"));

let posts = [
  {
    id: 0,
    owner: {
      username: "dude_man_guy",
      photoURL:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Hearts&eyebrowType=Default&mouthType=Twinkle&skinColor=Black",
    },
    likes: 1,
    liked: true,
    caption: "Chyeahh boi!!!",
    comments: 0,
    createdAt: "1 day ago",
    imageUrl:
      "https://i.picsum.photos/id/737/325/325.jpg?hmac=us_pSQxm_xa5MD_5CpFpvtDR6eheA7nHJmXrhAaqWao",
  },
  {
    id: 1,
    owner: {
      username: "lady_person",
      photoURL:
        // "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
        "https://i.picsum.photos/id/832/325/325.jpg?hmac=3xmaxj0yf1HY2C2LY-LW1IGMzykkAQC9H3QjxD7E-Ug",
    },
    likes: 3,
    liked: true,
    caption: "My first post 😊",
    comments: 0,
    createdAt: "2 days ago",
    imageUrl:
      "https://i.picsum.photos/id/516/325/325.jpg?hmac=AA9JByT6TsvwNCWtrvR9wUk15JJAbAEVvN3nR789hbI",
  },
  {
    id: 2,
    owner: {
      username: "dude_man_guy",
      photoURL:
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairSides&accessoriesType=Blank&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=Gray01&eyeType=Hearts&eyebrowType=Default&mouthType=Twinkle&skinColor=Black",
    },
    likes: 4,
    liked: false,
    caption: "Get it gurll! 🔥",
    comments: 0,
    createdAt: "2 days ago",
    imageUrl:
      "https://i.picsum.photos/id/836/325/325.jpg?hmac=0o85l4lVSRvWwZHq2DDERZkqxaFS5xWmT7YHn0hNcag",
  },
  {
    id: 3,
    owner: {
      username: "crazyCatLady",
      photoURL: "https://i.pravatar.cc/325?img=48",
    },
    likes: 9,
    liked: false,
    caption: "My new pet, Tuco!",
    comments: 0,
    createdAt: "5 days ago",
    imageUrl: "https://picsum.photos/id/1074/325/325",
  },
  {
    id: 4,
    owner: {
      username: "madScience",
      photoURL: "https://i.pravatar.cc/325?img=50",
    },
    likes: 1,
    liked: false,
    caption: "A distant, new.... planet?! 🚀",
    comments: 0,
    createdAt: "1 week ago",
    imageUrl: "https://picsum.photos/id/1002/325/325",
  },
];

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
