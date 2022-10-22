import React, { useState,useContext } from "react";

import "./App.css";
import BlogProvider, { AppContext } from "./Blogprovider/BlogProvider";

import Routing from "./Routing";

function App() {
  // const [getBlog,setBlog]=useState({});
  console.log('ggg')
  return (
    // <Routing />
   
    <BlogProvider>
    <Routing />
    </BlogProvider>
    
    );
}

export default App;
