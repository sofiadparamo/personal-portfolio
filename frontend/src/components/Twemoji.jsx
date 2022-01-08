import {Image} from "react-bootstrap";

let Twemoji = (props) => {
    return(
        <Image
            src={`https://twemoji.maxcdn.com/v/latest/svg/${props.emoji.codePointAt(0).toString(16)}.svg`}
            height={props.size}
            width={props.size}
            alt={props.emoji}
            style={{marginTop: "-5px"}}
        />
    )
}

Twemoji.defaultProps = {
    size: 72,
};

export default Twemoji;