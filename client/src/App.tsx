import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
// import Dashboard from "./pages/Dashboard";
// import Home from "./components/Home";
// import PrivateRoute from "./pages/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
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
