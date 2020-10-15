import React from "react";
import styled from "styled-components";

const EightBallAnswer = styled.p`
    font-size: 2rem;
    font-weight: bold;

    .answerText {
        color: blue;
    }
`;

const Answer = props => {
    return (
        <EightBallAnswer>
            Magic 8 Ball Says: 
            <span className="answerText">
                 {props.answer}
            </span>
        </EightBallAnswer>
    )
}

export default Answer;