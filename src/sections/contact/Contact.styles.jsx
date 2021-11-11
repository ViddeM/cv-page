import styled from "styled-components"
import IconButton from "@material-ui/core/IconButton";
import {Typography} from "@material-ui/core";
import {HoveringCard} from "../../common/styles/Common.styles";

export const ContactCard = styled(HoveringCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    border-radius: 0;
    //box-shadow: none;
    margin-left: 0px;
    margin-right: 0px;
    width: 100vw;
  }
`;

export const ContactCardInner = styled.div`
  padding: 10px;
`;

export const ContactEntry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`;

export const StyledIconButton = styled(IconButton)`
  padding: 5px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),
              0px 2px 2px 0px rgba(0,0,0,0.14),
              0px 1px 5px 0px rgba(0,0,0,0.12);
`

export const ContactText = styled(Typography)`
  margin-left: 10px
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContactCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }
`;

export const Left = styled.div`
  align-self: flex-start;
`;
