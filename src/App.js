import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthState } from "klutch-fire-hooks/auth";
import { auth } from "./firebase/init";
import BottomNavigation from "./components/BottomNavigation";
import ShowErr from "./components/ShowErr";
import Home from "./pages/Feed";
import SignInPage from "./pages/SignIn";
import ProfilePage from "./pages/Profile";
import SearchPage from "./pages/Search";
import ActivityPage from "./pages/Activity";
import AddPostPage from "./pages/AddPost";

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
    <h1
      style={{
        margin: `auto`,
        fontWeight: 500,
        fontFamily: "Grand Hotel",
        fontSize: "250%",
        color: "#eeeeee",
        transition: "all 400ms ease",
      }}
    >
      Loading...
    </h1>
  </div>
);

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ShowErr err={error} />;
  } else {
    return user ? (
      // <Suspense fallback={<Loading />}>
      <Router>
        <BottomNavigation />
        <Switch>
          <Route component={ActivityPage} exact path="/activity" />
          <Route component={AddPostPage} exact path="/add-post" />
          <Route component={ProfilePage} exact path="/profile" />
          <Route component={SearchPage} exact path="/search" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    ) : (
      // </Suspense>
      // <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route component={SignInPage} path="/" />
        </Switch>
      </Router>
      // </Suspense>
    );
  }
};

export default App;
