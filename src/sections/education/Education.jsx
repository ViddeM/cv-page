import React from "react";
import {
    CenteredTitleText,
    CompanyIcon,
    CvEventCard, DateText,
    InformationContainer,
    TextIconContainer,
    TitleText,
    WideLine
} from "../../common/styles/Common.styles";
import data from "../../data/cv.json";
import {
    EducationContainer,
    EducationSubTitle
} from "./Education.styles";
import {Link, Typography} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {getSortedList} from "../../common/functions/SortByDate";

const Education = () => (
    <EducationContainer>
        <TitleText variant="h3">
            Education
        </TitleText>
        {
            getSortedList(data.cv.education).map(education => (
                <CvEventCard>
                    <CenteredTitleText>
                        {education.title}
                    </CenteredTitleText>
                    {education.subTitle && (
                        <EducationSubTitle align="center">
                            {education.subTitle}
                        </EducationSubTitle>
                    )}
                    <WideLine/>
                    <InformationContainer>
                        <TextIconContainer>
                            <ScheduleIcon />
                            <DateText align="center">
                                {education.start + " - " + education.end}
                            </DateText>
                        </TextIconContainer>
                        <TextIconContainer>
                            <LocationOnIcon/>
                            <Link href={education.universityUrl}>
                                <Typography>
                                    {education.university + ", " + education.location}
                                </Typography>
                            </Link>
                        </TextIconContainer>
                    </InformationContainer>

                    <InformationContainer>
                        <Link href={education.programUrl}>
                            <Typography>
                                {education.urlName}
                            </Typography>
                        </Link>
                        <CompanyIcon style={{
                            backgroundImage: 'url(' + education.universityLogo + ')',
                            width: "150px"
                        }} />
                    </InformationContainer>
                </CvEventCard>
            ))
        }
    </EducationContainer>
)

export default Education;
