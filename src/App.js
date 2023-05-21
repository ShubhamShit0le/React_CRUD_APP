import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddUsers from "./components/AddUsers";
import AllUsers from "./components/AllUsers";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUsers from "./components/EditUsers";
import PageNotFound from "./components/PageNotFound";


const App = (props) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <BrowserRouter>
    {showNav ? null : <NavBar />}
      <Routes>
        <Route path ="/" element={<Home funcNav={setShowNav} />}/>
        <Route path ="/allusers" element={<AllUsers />}/>
        <Route path ="/addusers" element={<AddUsers />}/>
        <Route path ="/editusers/:id" element={<EditUsers/> }/>
        <Route path="*" element={<PageNotFound funcNav={setShowNav}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
