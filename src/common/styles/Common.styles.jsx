import styled from "styled-components";
import Card from "@material-ui/core/Card";

export const TitleText = styled.h1`
  color: rgba(0, 0, 0, 0.7);
  font-family: 'Bree Serif', serif;
  font-size: 40px;
  margin: 0 0 20px;
  //text-decoration: underline;
  //text-shadow: 3px 2px 4px rgba(255,255,255,0.1);
  text-shadow: 3px 2px 3px rgba(255,255,255,.1);
`;

export const CenteredTitleText = styled(TitleText)`
  margin: 0px;
  text-align: center;
`;

export const HoveringCard = styled(Card)`
  -webkit-box-shadow: 3px 3px 10px 1px #202020; 
  box-shadow: 3px 3px 10px 1px #202020;
`;