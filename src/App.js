import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";

// import ShowErr from "./components/ShowErr";
import Home from "./pages/Feed";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ResetPasswordPage from "./pages/ResetPassword";
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
    <h1 style={{ margin: `auto`, fontWeight: 500 }}>Loading...</h1>
  </div>
);

const App = () => {
  // const { user, loading, error } = useAuthState(auth);
  // const isDesktop = useMedia("(min-width: 1080px)");
  // const isLandscape = useMedia("(max-width: 1080px) and (max-height: 600px)");

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <ShowErr err={error} />;
  // } else {
  return (
    <Suspense fallback={<Loading />}>
      {/* <TopNavigation
        title="instaBlob"
        leftIcon={<Camera size="25" />}
        rightIcon={<Share size="25" />}
      /> */}
      {/* <StoryTray /> */}
      <BottomNavigation />
      <Footer />
      <Router>
        <Switch>
          <Route component={ActivityPage} exact path="/activity" />
          <Route component={AddPostPage} exact path="/add-post" />
          <Route component={ProfilePage} exact path="/profile" />
          <Route component={ResetPasswordPage} exact path="/reset-password" />
          <Route component={SearchPage} exact path="/search" />
          <Route component={SignInPage} exact path="/sign-in" />
          <Route component={SignUpPage} exact path="/sign-up" />
          <Route component={Home} path="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
