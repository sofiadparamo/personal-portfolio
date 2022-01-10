import './styles.scss';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from "./data";
import {Badge, Image} from "react-bootstrap";

let ProjectPage = () => {

    let params = useParams();

    if(!data.projects[params.id]) {
        window.location.href = "/";
    }

    let github = () => {
        if(data.projects[params.id].github){
            return (
                <p>
                    <a href={data.projects[params.id].github} target={"_blank"} rel={"noreferrer"}>
                        <FontAwesomeIcon icon={["fab","github"]} size={"2x"} />
                    </a>
                </p>
            );
        } else {
            return <></>;
        }


    }

    return(
        <div className={"project-page-container"}>
            <h1>{data.projects[params.id].title}</h1>
            <Image
                src={data.projects[params.id].media[0].src}
                alt={data.projects[params.id].media[0].alt}
                className={"project-page-image"}
            />
            <p><Badge bg={"dark"}>{data.projects[params.id].date}</Badge></p>
            {data.projects[params.id].skills.map(skill => (
                <Badge bg={"success"} style={{marginLeft: "0.5rem"}} key={skill}>
                    {skill}
                </Badge>
            ))}
            <p className={"project-page-content project-page-description"}>{data.projects[params.id].description}</p>
            {github()}
        </div>
    );

}

export default ProjectPage;