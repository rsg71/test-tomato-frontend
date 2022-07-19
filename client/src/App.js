import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Profile from './pages/MyProfile/MyProfile';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MyProfile from './pages/MyProfile/MyProfile';
import FriendsProfile from './pages/FriendsProfile/FriendsProfile';
import SearchHome from './pages/SearchHome/SearchHome';
import Example from './pages/Example/Example';
import './App.css';


function App() {


  


  return (
    <div>

      <NavBar />


      <Routes>


        <Route path="/" element={<SearchHome />} />
        <Route path="/test" element={<Profile />} />
        <Route path="/example" element={<Example />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/friends-profile" element={<FriendsProfile />} />

        <Route path="/user-home" element={<FriendsProfile />} />

      </Routes>
    </div>
  );
}

export default App;
