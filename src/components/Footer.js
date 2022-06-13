import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Icon, IconButton } from "@material-ui/core";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <IconButton
          onClick={() =>
            window.open("https://www.podinario.rs/")
          }
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            window.open(
              "https://www.podinario.rs/"
            )
          }
        >
          <FacebookIcon />
        </IconButton>

        <IconButton>
          <LinkedInIcon
            onClick={() =>
              window.open(
                "https://www.podinario.rs/"
              )
            }
          />
        </IconButton>
      </div>
      <p> &copy; 2022 Milos Mijajlovic</p>
    </div>
  );
}
