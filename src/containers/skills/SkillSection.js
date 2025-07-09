import { useEffect, useState } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import Fade from "@mui/material/Fade";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import ScienceIcon from "@mui/icons-material/Science";

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box className="skills-tab-panel">{children}</Box>}
    </div>
  );
}

function SkillSection(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    setFadeIn(true); // Trigger fade-in animation once component mounts
  }, []);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const tabIcons = [<CodeIcon />, <CloudIcon />, <ScienceIcon />];

  return (
    <Box className="skills-tabs">
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        textColor="primary"
        indicatorColor="primary"
      >
        {skills.data.map((skill, index) => (
          <Tab
            key={index}
            label={skill.title}
            icon={tabIcons[index]}
            iconPosition="start"
            sx={{ color: theme.text }}
          />
        ))}
      </Tabs>
      {skills.data.map((skill, index) => (
        <TabPanel key={index} value={tabIndex} index={index}>
          <div className="skills-text-div">
            <Fade in={fadeIn} timeout={1000}>
              <div>
                <SoftwareSkill logos={skill.softwareSkills} />
              </div>
            </Fade>
            <Fade in={fadeIn} timeout={1500}>
              <ul className="skills-list" style={{ color: theme.primaryText }}>
                {skill.skills.map((sentence, idx) => (
                  <li key={idx} className="skills-text">
                    {sentence}
                  </li>
                ))}
              </ul>
            </Fade>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}

export default SkillSection;
