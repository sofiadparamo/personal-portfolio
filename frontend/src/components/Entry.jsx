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

    return(
        <div className={"entry-container"}>
            <div className={"entry-image-container"}>
                <Image
                    className={"entry-image"}
                    src={props.image}
                    alt={props.title + " project image"}
                />
            </div>
            <div className={"entry-description-container"}>
                <h1 className={"entry-title"}>{props.title}</h1>
                <p className={"entry-description"}>
                    {props.description}
                </p>
                <div className={"button-container"}>
                    {demoButton()}
                    {codeButton()}
                    <Button className={"entry-button"} href={props.id}>
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Entry;