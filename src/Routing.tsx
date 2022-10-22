 import React, { useState } from "react";
import Create from '../src/Components/Blog/Create/create';
import Search from '../src/Components/Blog/Search/search'
import Leftnav from "./Components/Leftnav/Leftnav";
import Blog from "./Components/Blog/Blog";
import Trending from '../src/Components/Blog/Trending/Trending'
import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';
import Fullblog from "./Components/Fullblog/Fullblog";
import BlogProvider from "./Blogprovider/BlogProvider";


  const Routing =(props:any)=>{
    console.log(props,'routing');
  
    return(

  
        <Router>
          <div className="routingclass">
          <Leftnav/>
        <Routes>
      
          <Route path="/" element={<Blog/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/create" element={<Create />} />
          <Route path="/trend" element={<Trending/>} />
          <Route path="/fullblog" element={<Fullblog/>} />
          </Routes>
          </div>
      </Router>
     

    
        
    )
  }
  export default Routing;