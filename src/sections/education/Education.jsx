import React from "react";
import {CenteredTitleText, TitleText} from "../../common/styles/Common.styles";
import data from "../../data/cv.json";
import {
    DateText,
    EducationCard,
    EducationContainer,
    EducationSubTitle,
    EducationTextIconContainer, InformationContainer
} from "./Education.styles";
import {Link, Typography} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';

const Education = () => (
    <EducationContainer>
        <TitleText variant="h3">
            Education
        </TitleText>
        {
            data.cv.education.map(education => (
                <EducationCard>
                    <CenteredTitleText>
                        {education.title}
                    </CenteredTitleText>
                    {education.subTitle && (
                        <EducationSubTitle align="center">
                            {education.subTitle}
                        </EducationSubTitle>
                    )}

                    <InformationContainer>
                        <EducationTextIconContainer>
                            <ScheduleIcon />
                            <DateText align="center">
                                {education.start + " - " + education.end}
                            </DateText>
                        </EducationTextIconContainer>
                        <EducationTextIconContainer>
                            <LocationOnIcon/>
                            <Link href={education.universityUrl}>
                                <Typography>
                                    {education.university + ", " + education.location}
                                </Typography>
                            </Link>
                        </EducationTextIconContainer>
                    </InformationContainer>

                    <Link href={education.programUrl}>
                        <Typography>
                            {education.urlName}
                        </Typography>
                    </Link>
                </EducationCard>
            ))
        }
    </EducationContainer>
)

export default Education;
