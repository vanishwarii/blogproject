import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../Blogprovider/BlogProvider";
import blogdetails from "../../Details/detail";
import {Blogmain,Bloghead,Blogname,BlogDes} from '../Fullblog/Fullblogstyle'
const Fullblog=()=>{
    const { state } = useLocation();
    const contextType=useContext(AppContext);
    return(
        <>
   {contextType.BlogDetails.map((item, i) => {
        return (
          <>
        
            {state.name === item.blogEmailof && (
              <Blogmain>
                   <Bloghead>{item.blogHeadingOf}</Bloghead>
                  <Blogname>Written By&nbsp;{item.blogEmailof}</Blogname>
                  <Blogname>on{item.blogDateof}&nbsp;{item.blogMonthof}&nbsp;{item.blogYear}</Blogname>
                  <BlogDes>{item.blogDescriptionOf}</BlogDes>
                
              </Blogmain>
            )}
          </>
        );
      })}
        </>
    )
}
export default Fullblog;