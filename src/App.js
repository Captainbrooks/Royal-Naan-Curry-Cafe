import { useSyncExternalStore } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import BookReservation from "./pages/BookReservation";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import AddFoodForm from "./components/AdminControls/AddFoodForm";
import Signup from "./pages/Signup";


import {selectIsAdmin, selectIsVerifiedAdmin, selectUser} from "./store/features/userSlice"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AllMenu from "./components/MenuList/AllMenu.js";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import useVerifyAdmin from "./Hook/useVerifyAdmin";
import { Nav } from "react-bootstrap";
import AdminDashBoard from "./pages/AdminDashBoard";
import NotAuthorized from "./pages/NotAuthorized";
import ViewUsers from "./components/AdminControls/ViewUsers";
import ForgotPassword from "./pages/forgotPassword";
import PasswordReset from "./pages/PasswordReset";
import Error from "./pages/Error";



function App() {




  const user=useSelector(selectUser);

const isAdmin=useSelector(selectIsAdmin);





  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/book-reservations" element={<BookReservation/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/forbidden" element={<NotAuthorized/>}></Route>

<Route path="/login" element={!user ? <Login /> : isAdmin ? <Navigate to="/admin-dashboard"/>:<Navigate to="/"/>} /> 


          
          <Route path="/signup" element={!user ? <Signup/>:<Navigate to="/"/>}></Route>
          <Route path="/order-online" element={<Menu/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={user  ?  <Checkout/> : <Navigate to="/"/>}></Route>
          <Route path="/view-users" element={isAdmin ? <ViewUsers/> : <Navigate to="/forbidden"/>}></Route>
          <Route path="/admin-dashboard" element={isAdmin ? <AdminDashBoard/> : <Navigate to="/forbidden"/>}></Route>
          <Route path="/forgot-passowrd" element={<ForgotPassword/>}></Route>
          <Route path="/reset-password" element={<PasswordReset/>}></Route>
          <Route path="/error" element={<Error/>}></Route>
       
        </Routes>
      </Router>

   
    </div>
  );
}

export default App;
