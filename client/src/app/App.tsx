import Landing from "../pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignIn from "../features/profile/SignIn";
import SignUp from "../features/profile/SignUp";
// const SignIn = lazy(() => import("./pages/SignIn"));
// const SignUp = lazy(() => import("./pages/SignUp"));
// import Dashboard from "./pages/Dashboard";
// import Home from "./components/Home";
// import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder={true} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route
            path="/dashboard/"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          >
            <Route index element={<Home />} />
            <Route path="expenses/*" element={<Expenses />} />
            <Route path="friends" element={<Friends />} />
            <Route path="settings" element={<Settings />} />
            <Route path="add-friend/:userId" element={<AddFriend />} />
            <Route path="profile" element={<Profile />} />
            <Route path="groups/*" element={<Groups />} />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
