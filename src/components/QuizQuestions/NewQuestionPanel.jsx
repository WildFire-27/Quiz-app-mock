import React, { useState } from "react";

import "./NewQuestionPanel.css";

import NewQuestionForm from "./NewQuestionForm";

const NewQuestionPanel = (props) => {
  const onsavequestionHandler = (enteredquestion) => {
    enteredquestion = { ...enteredquestion, id: Math.floor(Math.random()) };

    props.addquestion(enteredquestion);

    setIsEditable(false);
  };

  const [isEditable, setIsEditable] = useState(false);

  const startEditingHandler = () => {
    setIsEditable(true);
  };

  const stopEditHandler = () => {
    setIsEditable(false);
  };

  return (
    <div className="newquestionpanel">
      {!isEditable && (
        <button onClick={startEditingHandler}>Add New Question</button>
      )}

      {isEditable && (
        <NewQuestionForm
          onCancel={stopEditHandler}
          savequestion={onsavequestionHandler}
        />
      )}
    </div>
  );
};

export default NewQuestionPanel;
