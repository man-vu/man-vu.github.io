import React, { useEffect, useState } from "react";
import "./DegreeCard.css";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { style } from "glamor";

function DegreeCard(props) {
  const { degree, theme } = props;

  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  const style_img = style({
    width: "220px",
    height: "auto",
    borderRadius: "50%",
    padding: "10px",
    border: `1px solid ${theme.accentColor}`,
    marginRight: "50px",
    boxShadow: `0px 0px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "#fff",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      marginLeft: "50px",
      marginBottom: "15px",
      width: "175px",
    },
  });

  const card_body = style({
    borderBottom: `1px solid ${theme.accentColor}`,
    borderLeft: `1px solid ${theme.accentColor}`,
    borderRight: `1px solid ${theme.accentColor}`,
    borderRadius: "7px",
    width: "100%",
    margin: "10px",
    boxShadow: `0px 1px 5px ${theme.accentColor}`,
    transition: "all 0.2s ease-in-out",
    ":hover": {
      color: "#fff",
      boxShadow: `0 5px 15px ${theme.accentColor}`,
    },
    "@media (max-width: 768px)": {
      width: "100%",
    },
  });

  const button_style = {
    textDecoration: "none",
    color: "#fff",
    background: theme.accentColor,
    padding: "15px 20px",
    marginTop: "25px",
    borderRadius: "50px",
    borderWidth: "0px",
    marginBottom: "20px",
    fontWeight: "bold",
    fontFamily: "Google Sans Regular",
    fontSize: "17px",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    textAlign: "center",
    display: "block",
  };

  return (
    <div className="degree-card">
<Slide direction="right" in={show} timeout={1000}>
  <div {...style_img} style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <img
      style={{
        width: "140px",     // set fixed or percentage size here
        height: "140px",    // same here
        objectFit: "contain",
      }}
      src={require(`../../assets/images/${degree.logo_path}`)}
      alt={degree.alt_name}
    />
    <div className="degree-badge">🎓</div>
  </div>
</Slide>



      <Fade in={show} timeout={1500}>
        <div {...card_body}>
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <h2 className="card-title" style={{ color: "#FFFFFF" }}>
                {degree.title}
              </h2>
              <h3 className="card-subtitle" style={{ color: "#FFFFFF" }}>
                {degree.subtitle}
              </h3>
            </div>
            <div className="body-header-duration">
              <h3 className="duration" style={{ color: "#FFFFFF" }}>
                {degree.duration}
              </h3>
            </div>
          </div>

          <div className="body-content">
            <ul className="content-list" style={{ color: theme.text }}>
              {degree.descriptions.map((sentence, index) => (
                <li key={index}>{sentence}</li>
              ))}
            </ul>

            <div className="education-item-footer">
              {degree.transcript_link && (
                <a
                  href={degree.transcript_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p className="education-btn" style={{ ...button_style }}>
                    Show Transcripts
                  </p>
                </a>
              )}

              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <p className="education-btn" style={{ ...button_style }}>
                    Visit Website
                  </p>
                </a>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
