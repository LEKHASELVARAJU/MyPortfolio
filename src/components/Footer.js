import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <a href="https://www.instagram.com/crazy__kaizz/?next=%2F"> <InstagramIcon /></a>
        <a href="https://twitter.com/settings/account?lang=en"><TwitterIcon /></a>
        <a href="https://www.facebook.com/login/"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/login"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 anuvarshini@gmail.com</p>
    </div>
  );
}

export default Footer;