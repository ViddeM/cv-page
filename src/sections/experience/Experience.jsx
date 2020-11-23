import {DutiesList, ExperienceContainer} from "./Experience.styles";
import React from "react";
import data from "../../data/cv.json";
import {getSortedList} from "../../common/functions/SortByDate";
import {
    CenteredTitleText, CompanyIcon,
    CvEventCard,
    DateText,
    InformationContainer,
    TextIconContainer,
    TitleText,
    WideLine
} from "../../common/styles/Common.styles";
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Typography, Link} from "@material-ui/core";

const Experience = () => (
    <ExperienceContainer>
        <TitleText variant="h3">
            Experience
        </TitleText>
        {
            getSortedList(data.cv.experience).map(elem => (
                <CvEventCard>
                    <CenteredTitleText>
                        {elem.title}
                    </CenteredTitleText>
                    <WideLine/>
                    <InformationContainer>
                        <TextIconContainer>
                            <ScheduleIcon />
                            <DateText>{elem.start + " - " + elem.end}</DateText>
                        </TextIconContainer>
                        <TextIconContainer>
                            <LocationOnIcon />
                            <Link href={elem.companyUrl}>
                                <Typography>
                                    {elem.company + ", " + elem.location}
                                </Typography>
                            </Link>
                        </TextIconContainer>
                    </InformationContainer>
                    <InformationContainer>
                        <DutiesList style={{marginTop: "0px"}}>
                            { elem.tasks.map(task => (
                            <li>{task}</li>
                            ))}
                        </DutiesList>
                        <CompanyIcon style={{
                            backgroundImage: 'url(' + elem.companyLogoName + ')',
                            width: "150px",
                            backgroundPosition: "right"
                        }} />
                    </InformationContainer>
                </CvEventCard>
            ))
        }
    </ExperienceContainer>
);

export default Experience;