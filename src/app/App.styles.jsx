import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {TitleText} from "../common/styles/Common.styles";

export const Base = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameContainer = styled.div`
  
`;

export const NameText = styled(TitleText)`
  font-size: 90px;
`

export const NameUnderline = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 10px;
  box-shadow: 3px 2px 3px rgba(255, 255, 255, .1);
  border-radius: 5px;
`;

export const SelectContainer = styled.div`
  margin-top: 50px;
`;

export const SelectButton = styled(Button)`
  margin: 0 10px;
`

export const SectionContainer = styled.div`
  margin-top: 50px;
`;