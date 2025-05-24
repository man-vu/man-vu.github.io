import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Fade from "@mui/material/Fade";
import { projectsHeader, projects } from "../../portfolio.js";
import "./Projects.css";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div id="projects" className="projects-main">
      <div className="basic-projects">
        <Fade in={fadeIn} timeout={2000}>
          <div className="projects-heading-div">
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader.description}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="repo-cards-div-main">
        {projects.data.map((repo, index) => (
          <ProjectCard key={index} repo={repo} theme={theme} />
        ))}
      </div>

      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/man-vu"
        target="_blank"
        rel="noopener noreferrer"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
