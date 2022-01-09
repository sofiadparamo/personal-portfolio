import './Entry.scss';
import {Button, Image} from "react-bootstrap";

const Entry = (props) => {
    let demoButton = () => {
        if(props.demo){
            return (
                <Button className={"entry-button"} href={props.demo}>
                    Watch Demo
                </Button>
            )
        } else {
            return <></>
        }
    }

    let codeButton = () => {
        if(props.code){
            return (
                <Button className={"entry-button"} href={props.code}>
                    See Code
                </Button>
            )
        } else {
            return <></>;
        }
    }

    let livePreview = () => {
        if(props.live){
            return (
                <iframe
                    title={"Live preview for pedagog website"}
                    src={props.image}
                    className={"entry-image iframe-demo"}
                    style={{width: "200%", height: "200%"}}
                />
            );
        } else {
            return (
                <Image
                    className={"entry-image"}
                    src={props.image}
                    alt={props.title + " project image"}
                />
            );
        }
    }

    return(
        <div className={"entry-container"}>
            <div className={"entry-image-container"}>
                {livePreview()}
            </div>
            <div className={"entry-description-container"}>
                <h1 className={"entry-title"}>{props.title}</h1>
                <p className={"entry-description"}>
                    {props.description}
                </p>
                <div className={"button-container"}>
                    {demoButton()}
                    {codeButton()}
                </div>
            </div>
        </div>
    )
}

export default Entry;