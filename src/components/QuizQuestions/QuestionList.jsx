import React from "react";
import Home from "../Home/Home.jsx";

const QuestionList = (props) => {
  if (props.questions.length === 0) {
    return <div className="no-data-found">No Data Found</div>;
  } else {
    return (
      <div>
        {props.questions.map((bank, index) => {
          return (
            <div key={"panel" + bank.id}>
              <div className="section">
                <div className="question">Q: {bank.Question}</div>
                <div className="options-list">
                  <div className="answrap" key={"wrapone" + bank.id}>
                    <input
                      type="radio"
                      id={"option-1" + bank.id}
                      key={"Option-one" + bank.id}
                      name={bank.id}
                    />
                    <label
                      htmlFor={"option-1" + bank.id}
                      key={"Label-one" + bank.id}
                    >
                      {bank.option1}
                    </label>
                  </div>
                  <div className="answrap" key={"wraptwo" + bank.id}>
                    <input
                      type="radio"
                      id={"option-2" + bank.id}
                      key={"Option-two" + bank.id}
                      name={bank.id}
                    />
                    <label
                      htmlFor={"option-2" + bank.id}
                      key={"Label-two" + bank.id}
                    >
                      {bank.option2}
                    </label>
                  </div>
                  <div className="answrap" key={"wrapthree" + bank.id}>
                    <input
                      type="radio"
                      id={"option-3" + bank.id}
                      key={"Option-three" + bank.id}
                      name={bank.id}
                    />
                    <label
                      htmlFor={"option-3" + bank.id}
                      key={"Label-three" + bank.id}
                    >
                      {bank.option3}
                    </label>
                  </div>
                  <div className="answrap" key={"wrapfour" + bank.id}>
                    <input
                      type="radio"
                      id={"option-4" + bank.id}
                      key={"Option-four" + bank.id}
                      name={bank.id}
                    />
                    <label
                      htmlFor={"option-4" + bank.id}
                      key={"Label-four" + bank.id}
                    >
                      {bank.option4}
                    </label>
                  </div>
                </div>
                <div className="panelfooter">
                  {index + 1} of {props.questions.length}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default QuestionList;
