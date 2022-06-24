import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/MyProfile/MyProfile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MyProfile from './pages/MyProfile/MyProfile';
import FriendsProfile from './pages/FriendsProfile/FriendsProfile';
import NavBar from './components/NavBar/NavBar';
import SearchHome from './pages/SearchHome/SearchHome';

import "bootstrap-icons/font/bootstrap-icons.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <BrowserRouter>
      <NavBar />


      <Routes>


        <Route path="/" element={<SearchHome />} />
        <Route path="/test" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/friends-profile" element={<FriendsProfile />} />

      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
