import React from "react";
import data from "../../data/cv.json";
import {
    ContactCard,
    ContactContainer,
    ContactEntry,
    ContactText,
    StyledIconButton
} from "./Contact.styles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {GitHub, LinkedIn} from "@material-ui/icons";
import {TitleText} from "../../common/styles/Common.styles";

const Contact = () => (
    <ContactContainer>
        <TitleText variant="h3">
            About me & Contact
        </TitleText>
        <ContactCard>
            <ContactEntry>
                <StyledIconButton href={"mailto: " + data.cv.contactData.email}>
                    <MailOutlineIcon fontSize="large"/>
                </StyledIconButton>
                <ContactText style={{marginLeft: "10px"}}>
                    {data.cv.contactData.email}
                </ContactText>
            </ContactEntry>
            <ContactEntry>
                <StyledIconButton href={data.cv.contactData.linkedIn.full}>
                    <LinkedIn fontSize="large" style={{color: "#0077bf"}}/>
                </StyledIconButton>
                <ContactText>
                    {data.cv.contactData.linkedIn.short}
                </ContactText>
            </ContactEntry>
            <ContactEntry>
                <StyledIconButton href={data.cv.contactData.github.full}>
                    <GitHub fontSize="large" style={{color: "#24292e"}}/>
                </StyledIconButton>
                <ContactText>
                    {data.cv.contactData.github.short}
                </ContactText>
            </ContactEntry>
        </ContactCard>
    </ContactContainer>
)

export default Contact;