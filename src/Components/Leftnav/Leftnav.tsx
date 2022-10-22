import React from "react";
import { images } from "../../../src/Details/images";
import { Link } from "react-router-dom";
import {
  HeaderMain,
  Headerlist,
  Blogtext,
  Searchstyle,
  Navimage,
  Linknavhead,
  Profileimage,
  Headerone,Headertwo
} from "./leftnavStyle";
const Leftnav = () => {
  return (
    <HeaderMain>
      <Headerone>
        <Headerlist>
          <Profileimage>
            <Link to="/">
              <img src={images.profile}></img>
            </Link>
          </Profileimage>
        </Headerlist>
        <Headerlist>
          <li>
            <Navimage>
              <img src={images.search}></img>
              <Searchstyle>
                <Linknavhead to="/search">Search</Linknavhead>
              </Searchstyle>
            </Navimage>
          </li>
        </Headerlist>
        <Headerlist>
          <li>
            <Navimage>
              <img src={images.treanding}></img>
              <Searchstyle>
                <Linknavhead to="/trend">Trending</Linknavhead>
              </Searchstyle>
            </Navimage>
          </li>
        </Headerlist>
      </Headerone>
      <Headertwo>
        <Headerlist>
          <li>
            <Navimage>
              <img src={images.create}></img>

              <Searchstyle>
                <Linknavhead to="/create">create</Linknavhead>
              </Searchstyle>
            </Navimage>
          </li>
        </Headerlist>
      </Headertwo>
    </HeaderMain>
  );
};
export default Leftnav;
