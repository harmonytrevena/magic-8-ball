import React, { useState } from "react";

import Answer from "./Answer";

const EightBall = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const _handleChange = (question) => {
    setQuestion(question);
  };

  const _handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://8ball.delegator.com/magic/JSON/${question}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log("the answer is: ", data);
    
    setAnswer(data.magic.answer);

  };

  return (
    <>
      <h1>What Do You Want To Know?</h1>
      <form onSubmit={(event) => _handleSubmit(event)}>
        <input
         type="text"
         value={question}
         onChange={(event) => _handleChange(event.target.value)}
        />
        <button type="submit">Ask the Magic 8 Ball</button>
      </form>
      {!!answer ? <Answer answer={answer} /> : null}
    </>
  );
};

export default EightBall;
