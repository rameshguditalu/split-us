// import { Navigate } from "react-router-dom";
// import { useAuthStatus } from "../hooks/useAuth";
// import Spinner from "../components/Spinner";
// export default function PrivateRoute(props: { children: any }) {
//   const { loggedIn, checkingStatus } = useAuthStatus();
//   if (checkingStatus) {
//     return <Spinner />;
//   }
//   if (!loggedIn) {
//     return <Navigate to="/" />;
//   }
//   return props.children;
// }
