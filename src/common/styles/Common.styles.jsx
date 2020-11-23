import styled from "styled-components";
import Card from "@material-ui/core/Card";
import React from "react";
import {Typography} from "@material-ui/core";

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

const WideLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const WideLineLine = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  flex-grow: 1;
`;


export const WideLine = () => (
    <WideLineContainer>
        <WideLineLine/>
    </WideLineContainer>
);
export const CompanyIcon = styled.div`
  height: 50px;
  max-height: 50px;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CvEventCard = styled(HoveringCard)`
  padding: 20px;
  margin-bottom: 20px;
  width: 760px;
  max-width: 95%;
`;

export const DateText = styled(Typography)`
  margin-left: 5px;
`;


export const TextIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;