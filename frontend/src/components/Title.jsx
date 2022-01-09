import './Title.scss';

let Title = (props) => {

    return(
        <div className={"title-container"}>
            <h1 className={"title-style"}>
                {props.title}
            </h1>
        </div>
    );
}

export default Title;