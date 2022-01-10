import './styles.scss';
import data from './messages';
import {useEffect, useState} from "react";
import Twemoji from "../Common/Twemoji";

const GreetingAnimation = () => {

    let [currentText, setCurrentText] = useState('');
    let [emoji, setEmoji] = useState((<></>));

    let sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    };


    useEffect(() => {
        let animation = async () => {
            let currentTextLocal = '';
            for(let i = 0; i < data.messages.length; i++){
                if(i === 0){
                    for(let j = 0; j < data.messages[i].text.length; j++){
                        currentTextLocal += data.messages[i].text[j];
                        setCurrentText(currentTextLocal);
                        await sleep(50);
                    }
                }else{
                    for(let j = 0; j < data.messages[i].text.length; j++){
                        currentTextLocal += data.messages[i].text[j];
                        setCurrentText(currentTextLocal);
                        await sleep(50);
                    }
                    setEmoji((<Twemoji emoji={data.messages[i].emoji} size={"40px"}/>))
                }
                if(i !== 0){
                    await sleep(3000);
                }
                if(i !== data.messages.length - 1){
                    console.log('Cleared text');
                    currentTextLocal = data.messages[0].text;
                    setCurrentText(currentTextLocal);
                    setEmoji((<></>))
                }
            }
        };

        console.log('Start animation');
        animation().then(() => console.log("Finish animation"));
    }, []);

    return(
        <h1 className={"title-anim"}>
            {currentText}{emoji}<span className={"flickering-cursor"}>|</span>
        </h1>
    );
}

export default GreetingAnimation;