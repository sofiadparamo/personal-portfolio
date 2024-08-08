import {Image} from "react-bootstrap";
import twemoji from '@twemoji/api';

let Twemoji = (props) => {

    let emojiCode = twemoji.parse(props.emoji, {folder: "svg", ext: ".svg"});
    let parser = new DOMParser();
    let doc = parser.parseFromString(emojiCode, 'text/html');

    return(
        <Image
            src={doc.querySelector('img').src}
            alt={emojiCode}
            height={props.size}
            width={props.size}
            style={{marginTop: "-5px"}}
        />
    )
}

Twemoji.defaultProps = {
    size: 72,
};

export default Twemoji;