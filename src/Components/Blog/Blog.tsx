import React, { useContext, useState } from "react";
import Blogpage from "./Blogpage/Blogpage";
import blogdetails from "../../Details/detail";
import BlogProvider, { AppContext, useAppContext } from "../../Blogprovider/BlogProvider";
import { Blogborder, Bloglatest, Latest, Content } from "./blogstyle";
const Blog = () => {
  const contextType=useContext(AppContext);
  console.log(contextType,'contexttype');

  return (
    <div>
      <Latest>
        
        <Blogborder></Blogborder>
        <Bloglatest>Latest</Bloglatest>
      </Latest>
      <Content>
        {contextType.BlogDetails.map((item:any,i)=>{
          return(
            <>
            <Blogpage
            key={i}
            blogDate={item.blogDateof}
            blogmonth={item.blogMonthof}
            blogEmail={item.blogEmailof}
            blogHeading={item.blogHeadingOf}
            blogDescription={item.blogDescriptionOf}
            blogTag1={item.blogTag1}
            blogTag2={item.blogTagg2}
            />
            </>
          )
        })}
        
        {/* {blogdetails.map((item:any, i) => {
          return (
            <>
              <Blogpage
                key={i}
                blogDate={item.blogDateof}
                blogmonth={item.blogMonthof}
                blogEmail={item.blogEmailof}
                blogHeading={item.blogHeading0f}
                blogDescription={item.blogDescription0f}
                blogTag1={item.blogTag1}
                blogTag2={item.blogTagg2}
              />
            </>
          );
        })} */}
      </Content>
    </div>
  );
};
export default Blog;
