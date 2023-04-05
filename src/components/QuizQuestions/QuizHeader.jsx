import React from "react";

import Timer from "./Timer";

import "./QuizHeader.css"

import "./Timer.css"

const QuizHeader = (props) => {

    const { questionBank } = props;

    return (

        <div className="QuizHeader">

            <div className="totalques">Total Question: {questionBank.length}</div>

            <Timer />

        </div>

    )

}

export default QuizHeader