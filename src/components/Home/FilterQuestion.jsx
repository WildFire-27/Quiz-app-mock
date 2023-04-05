import React, { useState } from 'react';
import QuestionCard from './QuestionCard';

const FilterQuestion = ({ question }) => {
    const [value, setValue] = useState("");


    const dropDownFilterCatch = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        // event.preventDefault()
        setValue(event.target.value);


    };

    return (
        <div className="note">
            <div className="year">
                <h5>Category Questions: {value.length}</h5>
                <select value={value} id='selectDate' onChange={dropDownFilterCatch}>
                    <option value="select">Category</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                {/* <button onClick={dropDownFilterCatch} className='btnLeft'>Filter</button> */}

            </div>
            {question
                .filter(questionItem => {
                    if (!value) return true;
                    if (questionItem.category.includes(value)) {
                        return true;
                    }
                    return false;
                })
                .map((quizItem, index) => {
                    return (
                        <QuestionCard
                            key={index}
                            id={index}
                            questionName={quizItem.questionName}
                            optionOne={quizItem.optionOne}
                            optionTwo={quizItem.optionTwo}
                            optionThree={quizItem.optionThree}
                            optionFour={quizItem.optionFour}
                            category={quizItem.category}
                            answer={quizItem.answer}
                        />

                    );
                })}

        </div>
    )
}

export default FilterQuestion;