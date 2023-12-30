import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumDetailsPage from "./Components/AlbumDetails/AlbumDetailsPage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import HomePage from "./Components/HomePage/HomePage";
import NavigationBar from "./Components/Navbaar/NavigationBar";
import SearchPage from "./Components/SearchBar/SearchPage";
import SuggetionPage from "./Components/SuggetionPage/SuggetionPage";

import SongsSeeAll from "./Components/SeeAllComponents/SongsSeeAll";
import AleartPage from "./Components/AleartPage/AleartPage";
import PodCasts from "./Components/PodCasts/PodCasts";

const App = () => {
  return (
    <>
    <NavigationBar />
      <Routes>
        <Route exact path="/"  element={<HomePage />} />
        <Route exact path="/albumDetailsPage" element={<AlbumDetailsPage />} />
        <Route path="/songsSeeAll/:query" element={<SongsSeeAll/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="search/:query" element={<SuggetionPage />} />
        <Route path="/aleartPage" element={<AleartPage />} />
        <Route path="/podCasts" element={<PodCasts />} />
      </Routes>
    </>
  );
};

export default App;
