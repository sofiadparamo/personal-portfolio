import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let Footer = () => {
  return (
    <footer className="footer">
        <div className={"footer-container"}>
            <FontAwesomeIcon icon={["fab","twitter"]} size={"2x"} className={"social-distance"}/>
            <FontAwesomeIcon icon={["fab","github"]} size={"2x"} className={"social-distance"}/>
            <FontAwesomeIcon icon={["fab","discord"]} size={"2x"}/>
        </div>
        <div className={"signature"}>
            Created with <FontAwesomeIcon icon={["fas","heart"]} size={"1x"}/> by SweetSofiMC. OpenSource on <a href="https://github.com/SweetSofiMC/personal-portfolio">GitHub</a>
        </div>
    </footer>
  );
}

export default Footer;