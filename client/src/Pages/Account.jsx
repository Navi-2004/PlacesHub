// import { Navigate } from "react-router-dom";
// import { UserContext } from "../UserContext";
// import { useContext } from "react";
// export default function AccountPage() {
//     const {ready,user} = useContext(UserContext);
//     if(ready && user) return <Navigate to={'/login'} />;
//   return (

//     <div>
//       <h1>Account page here{user?.name} </h1>
//     </div>
//   )
// }

import {useContext, useState} from "react";
import {UserContext} from "../UserContext.jsx";
import {Link, Navigate, useParams} from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../Components/AccountNav.jsx";
import BookingsPage from "./BookingsPage.jsx";
import BookingPage from "./BookingPage.jsx";

export default function AccountPage() {
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('http://localhost:5000/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
      {subpage === 'places' && (
        <PlacesPage />
      )}
      {subpage==='account/bookings' && (
        <BookingsPage />
      )}  
      <BookingPage />
    </div>
  );
}