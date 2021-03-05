import React, {useState} from "react";

export default function Question(props) {

    const {el} = props;
    const [userAnswer, setUserAnswer] = useState('');

    console.log(el, el.userAnswer);

    return (
        <div key={el.serialNumber}>
            {el.serialNumber}) {' '}
            {el.firstNumber} {' '}
            {el.sign} {' '}
            {el.secondNumber} {' '} = {' '}

            {!el.userAnswer &&
            <>
                <input type="number"
                       value={userAnswer} onChange={(e) => setUserAnswer(+e.target.value)}/>

                <button onClick={ () => props.getAnswer(el.serialNumber, userAnswer) }> OK </button>
            </>
            }
            {el.userAnswer}

            <button disabled={props.el.userAnswer === undefined} onClick={ props.getQuestion }> Next </button>

        </div>
    )
}