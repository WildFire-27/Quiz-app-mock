import React, { useState } from "react";
import "./NewQuestionForm.css";
const NewQuestionForm = (props) => {
  const [Question, setQuestion] = useState("");
  const questionchangeHandler = (event) => {
    setQuestion(event.target.value);
  };
  const [category, setcategory] = useState("");
  const categorychangeHandler = (event) => {
    setcategory(event.target.value);
  };

  const [option1, setOption1] = useState("");
  const option1changeHandler = (event) => {
    setOption1(event.target.value);
  };
  const [option2, setOption2] = useState("");
  const option2changeHandler = (event) => {
    setOption2(event.target.value);
  };
  const [option3, setOption3] = useState("");
  const option3changeHandler = (event) => {
    setOption3(event.target.value);
  };
  const [option4, setOption4] = useState("");
  const option4changeHandler = (event) => {
    setOption4(event.target.value);
  };
  const [correct, setCorrect] = useState("");
  const correctchangeHandler = (event) => {
    setCorrect(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newQuestion = {
      Question: Question,
      category: category,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      correct: correct,
    };

    console.log(newQuestion);
    props.savequestion(newQuestion);
    setQuestion("");

    setcategory("");

    setOption1("");

    setOption2("");

    setOption3("");

    setOption4("");

    setCorrect("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-question-outer">
        <div className="new-question-inner">
          <label>Question:</label>
          <textarea
            rows="4"
            cols="45"
            type="text"
            value={Question}
            onChange={questionchangeHandler}
          />
        </div>
        <div className="new-question-inner">
          <label>Select category:</label>

          <select
            className="txt"
            id="mySelect"
            value={category}
            onChange={categorychangeHandler}
          >
            <option>select</option>
            <option value="Reactjs">Reactjs </option>
            <option value="Javascript">Javascript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>
        </div>
        <div className="new-question-inner">
          <label>Option 1:</label>
          <input type="text" value={option1} onChange={option1changeHandler} />
        </div>

        <div className="new-question-inner">
          <label>Option 2:</label>
          <input type="text" value={option2} onChange={option2changeHandler} />
        </div>
        <div className="new-question-inner">
          <label>Option 3:</label>
          <input type="text" value={option3} onChange={option3changeHandler} />
        </div>
        <div className="new-question-inner">
          <label>Option 4:</label>
          <input type="text" value={option4} onChange={option4changeHandler} />
        </div>

        <div className="new-question-inner">
          <label>Correct Answer:</label>
          <select
            className="txt"
            value={correct}
            onChange={correctchangeHandler}
          >
            <option>select</option>
            <option value="java">option1 </option>
            <option value="php">option2</option>
            <option value="angular">option3</option>
            <option value="apple">option4</option>
          </select>
        </div>

        <div className="new-question-inner">
          <button onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Question</button>
        </div>
      </div>
    </form>
  );
};

export default NewQuestionForm;
