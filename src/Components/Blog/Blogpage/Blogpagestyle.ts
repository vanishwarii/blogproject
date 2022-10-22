import styled from "styled-components";
import { Link } from "react-router-dom";
export const Blogmain = styled.div`
  margin: 20px 0px 20px 50px;
`;

export const Blogdiv = styled.div`
  gap: 17px;
  display: flex;
`;

export const Blogleft = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
min-width: 80px;
 align-items: flex-end;
    
}
`;

export const Blogdate = styled.p`
font-weight: bold;
margin-top: 0px;
margin-bottom: 0px;
font-family: LexendaBold;
font-size: 30px;
`;
export const Blogmonth = styled.p`
font-weight: bold;
margin-top: 0px;
margin-bottom: 0px;
font-family: LexendaBold;
font-size: 30px;
`;
export const Blogemail = styled.p`
  display: flex;

  margin-top: 40px;
  margin-right: -35px;

  transform: rotate(270deg);
  font-family: LexendaRegular;
  font-size: 16px;
`;
export const Blogborder = styled.h3`
  margin-bottom: 0px;
  margin-left: 8px;
  margin-top: 0px;
  width: 20px;
  border-top: 3px solid green;
`;
export const Bloglatest = styled.p`
  margin: 0px;
`;
export const Blogcontent = styled.div`
  margin-top: -5px;
  max-width: 920px;
`;
export const Blogcontenthead = styled.p`
  color: green;
  font-family: Serif;
  font-size: 32px;
  margin-top: 10px;
  margin-bottom: 0px;
`;
export const Blogcontents = styled.p`
  font-size: 20px;
  margin-top: 5px;
  font-family: LexendaRegular;
`;
export const Blogtags = styled.div`
  display: flex;
  gap: 10px;
`;
export const Blogtagbutton = styled.button`
  background-color: white;
  border-radius: 20px;
  border: 2px solid green;
  height: 30px;
  padding: 2px 10px 2px 10px;
  min-width: 80px;
`;

export const Linkreadmore = styled(Link)`
  color: green;
  text-decoration: none;
`;
