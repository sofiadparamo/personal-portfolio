import './styles.scss';
import data from './messages';
import {useEffect, useState} from "react";

const GreetingAnimation = () => {

    let [currentText, setCurrentText] = useState('');
    let [ticks, setTicks] = useState(0);
    let [currentLine, setCurrentLine] = useState(0);
    let [pauseTime, setPauseTime] = useState(0);
    let [breakLine, setBreakLine] = useState(false);

    useEffect(() => {
        const interval = setInterval(() =>{
            if(pauseTime > 0){
                setPauseTime(pauseTime - 1);
                return;
            } else if(currentLine !== data.messages.length -1 && breakLine){
                setCurrentText(data.messages[0].text);
                setCurrentLine(currentLine + 1);
                setTicks(0);
                setBreakLine(false);
                return;
            }

            let nextIncrease = 1;

            if(ticks < data.messages[currentLine].text.length) {
                let newValue = currentText;
                if(data.messages[currentLine].text[ticks] === ' '){
                    newValue += ' ';
                    nextIncrease = 2;
                }

                setCurrentText(newValue + data.messages[currentLine].text[ticks + nextIncrease - 1]);
                setTicks(ticks + nextIncrease);
            } else {
                if(currentLine !== 0){
                    setCurrentText(currentText + data.messages[currentLine].emoji);
                    if(currentLine === data.messages.length - 1){
                        console.log("Trying to clear interval" + interval)
                        clearTimeout(interval);
                    }
                    setPauseTime(5);
                }
                setBreakLine(true);
            }

        }, 70);

        return () => {
            clearInterval(interval);
        };
    }, [ticks, currentText, currentLine, pauseTime, breakLine]);

    return(
        <h1 className={"title-anim"}>
            {currentText}<span className={"flickering-cursor"}>|</span>
        </h1>
    );
}

export default GreetingAnimation;