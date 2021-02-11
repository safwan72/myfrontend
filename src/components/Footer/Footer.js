import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-4 col-sm-6 col-xs-12 segment-one">
              <h3>Liked Quotes</h3>
              <p>
                <q>
                  Great web design without functionality is like a sports car
                  with no engine.
                </q>
                &nbsp;<em>- Paul Cookson </em>
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 segment-two">
              <h2>Links</h2>
              <ul>
                <li>
                  <Link to="/home">Home </Link>
                </li>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 segment-three">
              <h2>Contact Me</h2>
              <p>Please Follow Me On My Social Media Links</p>
              <a
                href="https://www.facebook.com/safwan.48728939/"
                target="blank"
              >
                <span className="span1">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
              <a href="https://twitter.com/safwan_4872" target="blank">
                <span className="span2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/md-ibne-safwan-ali/"
                target="blank"
              >
                <span className="span4">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
              <a href="https://www.github.com/safwan72" target="blank">
                <span className="span3">
                  <FontAwesomeIcon
                    icon={faGithubAlt}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
              <a
                href="mailto: safwan4872@gmail.com"
                title="safwan4872@gmail.com"
                target="blank"
              >
                <span className="span5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
              <a href="/" title="+880-1739783322">
                <span className="span6">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    style={{ marginRight: "0.5rem", fontSize: "1.5rem" }}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="footer-bottom-text">
        All Rights Reserved By &copy;SafwanAli
      </p>
    </footer>
  );
};
export default Footer;
