import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Blogmain,
  Blogdiv,
  Blogleft,
  Blogdate,
  Blogmonth,
  Blogemail,
  Blogborder,
  Bloglatest,
  Blogcontent,
  Blogcontenthead,
  Blogcontents,
  Blogtags,
  Blogtagbutton,
  Linkreadmore,
} from "./Blogpagestyle";
import { AppContext } from "../../../Blogprovider/BlogProvider";
type Detail = {
  blogDate: string;
  blogmonth: string;
  blogEmail: string;
  blogHeading: string;
  blogDescription: string;
  blogTag1: string;
  blogTag2: string;
};
export const Blogpage: React.FC<Detail> = ({
  blogDate,
  blogmonth,
  blogEmail,
  blogHeading,
  blogDescription,
  blogTag1,
  blogTag2,
}) => {
  const [isReadmoreShow, setReadmoreshow] = useState(false);
  
  return (
    <Blogmain>
      <Blogdiv>
        <Blogleft>
          <Blogdate>{blogDate}</Blogdate>
          <Blogmonth>{blogmonth}</Blogmonth>
          <Blogemail>{blogEmail}</Blogemail>
        </Blogleft>
        <Blogcontent>
          <Blogcontenthead>{blogHeading}</Blogcontenthead>
          <Blogcontents>
            {isReadmoreShow
              ? blogDescription
              : blogDescription.substring(0, 500)}
              {/* {blogDescription} */}
            <Linkreadmore to="/fullblog" state={{ name: blogEmail }}>.....read more</Linkreadmore>
          </Blogcontents>
          <Blogtags>
            <Blogtagbutton>{blogTag1}</Blogtagbutton>
            <Blogtagbutton>{blogTag2}</Blogtagbutton>
          </Blogtags>
        </Blogcontent>
      </Blogdiv>
    </Blogmain>
  );
};
export default Blogpage;
