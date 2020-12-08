import React from "react";
import data from "../../data/cv.json";
import {
    ContactCard, ContactCardsContainer,
    ContactContainer,
    ContactEntry,
    ContactText, Left,
    StyledIconButton
} from "./Contact.styles";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import {GitHub, LinkedIn} from "@material-ui/icons";
import {
    CenteredTitleText,
    TitleText,
    WideLine
} from "../../common/styles/Common.styles";
import {Typography} from "@material-ui/core";
import {DutiesList} from "../experience/Experience.styles";
import Box from "@material-ui/core/Box";

const Contact = () => (
    <ContactContainer>
        <TitleText variant="h3">
            About me & Contact
        </TitleText>
        <ContactCardsContainer>
            <ContactCard>
                <CenteredTitleText>
                    Contact
                </CenteredTitleText>
                <WideLine/>
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
            <ContactCard>
                <CenteredTitleText>
                    About me
                </CenteredTitleText>
                <WideLine />
                <Left>
                    <Typography>
                        <Box fontWeight={700} fontSize={20}>
                            My top traits
                        </Box>
                    </Typography>
                </Left>
                <DutiesList>
                    {
                        data.cv.skills.general.map(skill => (
                        <li>
                            {skill}
                        </li>
                        ))
                    }
                </DutiesList>
                <WideLine />
                <Left>
                    <Typography>
                        <Box fontWeight={700} fontSize={20}>
                            My top programming langauges
                        </Box>
                    </Typography>
                </Left>
                <DutiesList>
                    {
                        data.cv.skills.programmingLanguages.map(lang => (
                        <li>
                            {lang}
                        </li>
                        ))
                    }
                </DutiesList>
                <WideLine />
                <Left>
                    <Typography>
                        <Box fontWeight={700} fontSize={20}>
                            Fluent languages
                        </Box>
                    </Typography>
                </Left>
                <DutiesList>
                    {
                        data.cv.skills.languages.map(lang => (
                        <li>
                            {lang}
                        </li>
                        ))
                    }
                </DutiesList>

            </ContactCard>
        </ContactCardsContainer>
    </ContactContainer>
)

export default Contact;