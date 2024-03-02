import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button, OverlayTrigger, Popover} from "react-bootstrap";

let Footer = () => {
    const onDiscordClick = (event) => {
        event.preventDefault();
    }

    const onDiscordConfirmation = (event) => {
        window.open("https://discord.sweetsofimc.dev/");
    }

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Warning</Popover.Header>
            <Popover.Body>
                Personal content ahead! This is a <strong>personal space of mine</strong>, join at your own discretion.
                <br/>
                <Button size={"sm"} variant={"success"} onClick={onDiscordConfirmation}>Continue</Button>
                <br/>
                Tap again on the Discord logo to close this warning.
            </Popover.Body>

        </Popover>
    );

    return (
        <footer className="footer">
            <div className={"footer-container"}>
                <a href={"https://twitter.com/sofiadparamo/"} target={"_blank"} rel={"noreferrer"} className={"footer-social twitter"}>
                    <FontAwesomeIcon icon={["fab","twitter"]} size={"2x"} className={"social-distance"}/>
                </a>
                <a href={"https://github.com/SweetSofiMC/"} target={"_blank"} rel={"noreferrer"} className={"footer-social github"}>
                    <FontAwesomeIcon icon={["fab","github"]} size={"2x"} className={"social-distance"}/>
                </a>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <a href={"https://discord.sweetsofimc.dev/"} target={"_blank"} rel={"noreferrer"} className={"footer-social discord"} onClick={onDiscordClick}>
                        <FontAwesomeIcon icon={["fab","discord"]} size={"2x"}/>
                    </a>
                </OverlayTrigger>
            </div>
            <div className={"signature"}>
                Created with <FontAwesomeIcon icon={["fas","heart"]} className={"heart"} size={"1x"}/> by SweetSofiMC. OpenSource on <a href="https://github.com/SweetSofiMC/personal-portfolio">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;
