import './styles.scss';

let Title = (props) => {

    return(
        <div className={"title-container"} style={props.style}>
            <h1 className={"title-style"}>
                {props.title}
            </h1>
        </div>
    );
}

export default Title;