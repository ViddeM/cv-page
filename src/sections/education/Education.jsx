import React from "react";
import {TitleText} from "../../common/styles/Common.styles";
import data from "../../data/cv.json";
import {EducationContainer} from "./Education.styles";
import Card from "@material-ui/core/Card";
import {Link, Typography} from "@material-ui/core";

const Education = () => (
    <EducationContainer>
        <TitleText variant="h3">
            Education
        </TitleText>
        {
            data.cv.education.map(education => (
                <Card>
                    <Typography>
                        {education.title}
                    </Typography>
                    <Typography>
                        {education.start + " - " + education.end}
                    </Typography>
                    { education.subTitle && (
                        <Typography>
                            {education.subTitle}
                        </Typography>
                        )
                    }
                    <Typography>
                        {"at " + education.university + ", " + education.location}
                    </Typography>
                    <Link href={education.url}>
                        <Typography>
                            {education.urlName}
                        </Typography>
                    </Link>
                </Card>
            ))
        }
    </EducationContainer>
)

export default Education;


// "start": "Aug 2020",
// "end": "Present",
// "subTitle": "With a focus on security and distributed systems",
// "university": "Chalmers University of Technology",
// "location": "Gothenburg Sweden",
// "url": "https://www.chalmers.se/en/education/programmes/masters-info/Pages/Computer-systems-and-networks.aspx",
// "url_name": "Link to program"