import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUsers from "./components/EditUsers";
import PageNotFound from "./components/PageNotFound";

const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path ="/" element={<Home />}/>
        <Route path ="/allusers" element={<AllUsers />}/>
        <Route path ="/addusers" element={<AddUsers />}/>
        <Route path ="/editusers/:id" element={<EditUsers/> }/>
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
