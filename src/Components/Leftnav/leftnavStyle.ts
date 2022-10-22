import styled from "styled-components";
import { Link } from "react-router-dom";
export const HeaderMain = styled.div`
 
  display: flex;
  min-height: 600px;
  border-right: 2px solid green;
  flex-direction: column;
`;
export const Headerone = styled.div`
 margin-top:70px;
`;
export const Headertwo = styled.div`
margin-top:90px;
 
`;
export const Headerlist = styled.ul`
  padding-left: 10px;
  list-style: none;
  padding-right: 10px;
`;
export const Blogtext = styled.h1`
  background: green;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  align-items: center;
  text-align: center;
  border-radius: 50%;
`;
export const Searchstyle = styled.h6`
  margin-top: 0px;
`;
export const Navimage = styled.div`
  margin-left: 15px;
`;
export const Linknavhead = styled(Link)`
  font-family: LexendaRegular;
  font-size: 16px;
  text-decoration: none;
  color: black;
`;
export const Profileimage = styled.li`
  margin-left: 5px;
`;