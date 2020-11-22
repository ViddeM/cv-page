import styled from "styled-components";
import {Typography} from "@material-ui/core";
import {HoveringCard} from "../../common/styles/Common.styles";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DateText = styled(Typography)`
  margin-left: 5px;
`;


export const EducationCard = styled(HoveringCard)`
  padding: 20px;
  margin-bottom: 20px;
  width: 760px;
  max-width: 95%;
`;

export const EducationSubTitle = styled(Typography)`
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EducationTextIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;