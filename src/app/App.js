import React, {useState} from "react";
import {Button, Typography} from "@material-ui/core";
import {
    Base,
    HeaderContainer,
    NameText,
    NameUnderline, SectionContainer, SelectButton,
    SelectContainer
} from "./App.styles";
import data from "../data/cv.json"
import {ThemeProvider} from "@material-ui/core/styles"
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {StylesProvider} from "@material-ui/styles";
import {
    CV_MODE_CONTACT,
    CV_MODE_EDUCATION,
    CV_MODE_EXPERIENCE,
    CV_MODE_STUDENT_UNION
} from "./CV_modes";
import Contact from "../sections/contact/Contact";
import Education from "../sections/education/Education";
import Experience from "../sections/experience/Experience";
import StudentUnion from "../sections/studentUnion/StudentUnion";

const theme = createMuiTheme({
     palette: {
         primary: {
             main: '#646e96',
         },
         secondary: {
             main: '#2e7d32',
         },
     },
    overrides: {
        MuiButton: {
            outlined: {
                color: "white",
                borderColor: "white",
                fontWeight: "800",
                '&:hover': {
                    backgroundColor: "white",
                    color: "#646e96",
                    borderColor: "#646e96"
                }
            }
        }
    }
 });

function App() {
    const [mode, setMode] = useState(CV_MODE_CONTACT)

    return (
    <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
            <Base style={{backgroundColor: theme.palette.primary.main}}>
                <HeaderContainer>
                    <NameText>
                        {data.cv.contactData.firstName + " " + data.cv.contactData.lastName}
                    </NameText>
                    <NameUnderline/>
                    <SelectContainer>
                        <SelectButton
                            variant="outlined"
                            size="Large"
                            onClick={() => setMode(CV_MODE_CONTACT)}
                            disabled={mode === CV_MODE_CONTACT}
                        >
                            About me & Contact
                        </SelectButton>
                        <SelectButton
                            variant="outlined"
                            size="Large"
                            onClick={() => setMode(CV_MODE_EDUCATION)}
                            disabled={mode === CV_MODE_EDUCATION}
                        >
                            Education
                        </SelectButton>
                        <SelectButton
                            variant="outlined"
                            size="Large"
                            onClick={() => setMode(CV_MODE_EXPERIENCE)}
                            disabled={mode === CV_MODE_EXPERIENCE}
                        >
                            Experience
                        </SelectButton>
                        <SelectButton
                            variant="outlined"
                            size="Large"
                            onClick={() => setMode(CV_MODE_STUDENT_UNION)}
                            disabled={mode === CV_MODE_STUDENT_UNION}
                        >
                            Student Union
                        </SelectButton>
                    </SelectContainer>
                </HeaderContainer>
                <SectionContainer>
                {
                    getModeSection(mode)
                }
                </SectionContainer>
            </Base>
        </ThemeProvider>
    </StylesProvider>
    );
}

function getModeSection(mode) {
    switch (mode) {
        case CV_MODE_CONTACT:
            return <Contact/>
        case CV_MODE_EDUCATION:
            return <Education/>
        case CV_MODE_EXPERIENCE:
            return <Experience />
        case CV_MODE_STUDENT_UNION:
            return <StudentUnion />
        default:
            console.error("Invalid mode '" + mode + "'!")
            return <Typography>
                Something went wrong! Try reloading the page or contact the page administrator.
            </Typography>
    }
}

export default App;
