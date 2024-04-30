import BTN from "./BTN";

import LanguageIcon from "@mui/icons-material/Language";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="externalLinks">
          <BTN
            className="btn"
            href="https://carlston325.github.io/personal-website/"
          >
            <LanguageIcon />
            <p>My Website</p>
          </BTN>

          <BTN className="btn" href="https://twitter.com/CarlstonR22238">
            <XIcon />
            <p>Twitter</p>
          </BTN>

          <BTN
            className="btn"
            href="https://www.instagram.com/carlston_rebelo/"
          >
            <InstagramIcon />
            <p>Instagram</p>
          </BTN>

          <BTN
            className="btn"
            href="https://www.facebook.com/profile.php?id=100007858426723"
          >
            <FacebookIcon />
            <p>Facebook</p>
          </BTN>
        </div>

        <div className="copyright">
          <CopyrightIcon />
          <p>Weather{year}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
