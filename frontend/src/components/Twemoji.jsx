import {Image} from "react-bootstrap";

let Twemoji = (props) => {

    let emojiValues = [];

    for(let i = 0; i < 10; i++){
        try{
            let code = props.emoji.codePointAt(i).toString(16);
            emojiValues.push(code);
            if(code.length !== 4){
                i++;
            }
        } catch(e){
            break;
        }
    }

    let emojiCode = emojiValues[0];

    for(let i = 1; i < emojiValues.length; i++){
        emojiCode += "-" + emojiValues[i];
    }

    return(
        <Image
            src={`https://twemoji.maxcdn.com/v/latest/svg/${emojiCode}.svg`}
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