import React, { useState } from "react";
import QuestionItem from "./QuestionItem";

const Questions = () => {
  const [state, setState] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
  });

  return (
    <div className="bg-[#E3F3FF] text-center py-12">
      <h2 className="h2">Frequently Asked Questions</h2>
      <div className="space-y-4 my-20 container">
        <QuestionItem
          name="btn1"
          click={state.btn1}
          setClick={setState}
          title="Question 1"
          question=""
        />
        <QuestionItem
          name="btn2"
          click={state.btn2}
          setClick={setState}
          title="Question 2"
          question=""
        />
        <QuestionItem
          name="btn3"
          click={state.btn3}
          setClick={setState}
          title="Question 3"
          question=""
        />
        <QuestionItem
          name="btn4"
          click={state.btn4}
          setClick={setState}
          title="Question 4"
          question=""
        />
        <QuestionItem
          name="btn5"
          click={state.btn5}
          setClick={setState}
          title="Question 5"
          question=""
        />
      </div>
    </div>
  );
};

export default Questions;
