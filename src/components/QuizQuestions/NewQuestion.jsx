import React, { useState } from "react";

import NewQuestionForm from "./NewQuestionForm";

const NewQuestion = (props) => {
  const [isEditable, setIsEditable] = useState(false);

  const saveQuestionDataHandler = (enteredQuestion) => {
    enteredQuestion = {
      ...enteredQuestion,

      id: Math.floor(Math.random),
    };

    props.onAddQuestion(enteredQuestion);

    setIsEditable(false);
  };

  const startEditingHandler = () => {
    setIsEditable(true);
  };

  const stopEditHandler = () => {
    setIsEditable(false);
  };

  return (
    <div className="new-expense">
      {!isEditable && (
        <button onClick={startEditingHandler}>Add new Question</button>
      )}

      {isEditable && (
        <NewQuestionForm
          onSaveQuestionData={saveQuestionDataHandler}
          onCancel={stopEditHandler}
        />
      )}
    </div>
  );
};

export default NewQuestion;
