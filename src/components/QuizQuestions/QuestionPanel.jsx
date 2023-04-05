import React, { useState } from "react";

import QuizFooter from "./QuizFooter";

import "./QuizFooter.css";

import "./QuestionPanel.css";

import NewQuestionFilter from "./NewQuestionFilter";

import QuestionList from "./QuestionList";
import QuizHeader from "./QuizHeader";
import owl from '../Login/owl.svg';

const QuestionPanel = (props) => {
  const { questionBank } = props;

  const [filterValue, setfilterValue] = useState("Reactjs");

  const filterchangeHandler = (selected) => {
    setfilterValue(selected);
  };

  const filterQuestions = questionBank.filter((bank) => {
    return bank.category === filterValue;
  });

  return (
    <div>
    <div id="owldiv">
    <img src={owl} alt="owl" id='imgowl'></img>

    </div>
      <NewQuestionFilter
        onFilterChange={filterchangeHandler}
        selected={filterValue}
      />
      <QuizHeader questionBank={questionBank} />

      <form>
        <QuestionList questions={filterQuestions} />

        <QuizFooter />
      </form>
    </div>
  );
};

export default QuestionPanel;
