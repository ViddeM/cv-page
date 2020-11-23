import {ExperienceContainer} from "../experience/Experience.styles";
import React from "react";
import {
    CenteredTitleText, CenterRow, CompanyIcon,
    CvEventCard, DateText, InformationContainer, TextIconContainer,
    TitleText, WideLine
} from "../../common/styles/Common.styles";
import data from "../../data/cv.json";
import {Typography, Link} from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import {getSortedList} from "../../common/functions/SortByDate";
import {ContactEntry, StyledIconButton} from "../contact/Contact.styles";
import {GitHub} from "@material-ui/icons";
import {HSpace, StudentUnionLogo} from "./StudentUnion.styles";

const StudentUnion = () => (
    <ExperienceContainer>
        <TitleText variant="h3">
            {data.cv.studentUnion.title}
        </TitleText>
        <CvEventCard>
            <CenterRow>
                <StudentUnionLogo style={{
                    backgroundImage: 'url(' + data.cv.studentUnion.union_logo_url + ')'
                }} />
            </CenterRow>
            <Typography>
                {
                    data.cv.studentUnion.description
                }
            </Typography>
            <Link href={data.cv.studentUnion.url}>
                <Typography>
                    {
                        data.cv.studentUnion.url_description
                    }
                </Typography>
            </Link>
        </CvEventCard>
        {
            getSortedList(data.cv.studentUnion.positions).map(position => (
                <CvEventCard>
                    <CenteredTitleText>
                        {position.title}
                    </CenteredTitleText>
                    <WideLine />
                    <TextIconContainer>
                        <ScheduleIcon />
                        <DateText>
                            {position.start + " - " + position.end}
                        </DateText>
                    </TextIconContainer>
                    <Typography>
                        {position.description}
                    </Typography>
                    {
                        position.url !== "" && (
                        <CenterRow>
                                <StyledIconButton href={position.url}>
                                    <GitHub fontSize="large" style={{color: "#24292e"}}/>
                                </StyledIconButton>
                            <HSpace/>
                            <Link>
                                <Typography>
                                    {position.url_description}
                                </Typography>
                            </Link>
                          </CenterRow>
                        )
                    }
                </CvEventCard>
            ))
        }
    </ExperienceContainer>
);

export default StudentUnion;