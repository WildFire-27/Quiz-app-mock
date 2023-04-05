import React, { useState } from "react";

const AddQuestion = (props) => {

    const [question, setQuestion] = useState({
        questionName: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
        category: "",
        answer: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setQuestion(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function addNewQuestion(event) {
        props.onAdd(question);
        setQuestion({
            questionName: "",
            optionOne: "",
            optionTwo: "",
            optionThree: "",
            optionFour: "",
            category: "",
            answer: "",
        });
        event.preventDefault();

        console.log(question)

    }
    function cancelButton() {
        document.getElementById("newQ").style.display = 'none'
    }

    return (
        <div id="newQ">
            <h4>Enter new Question and Options ??</h4>
            <div className='expensePlaceholder' id="cancelBTN">
                <input placeholder="Type new Question" type="text" id="questionName" name="questionName" onChange={handleChange} value={question.questionName} width="500" height="500" required></input>
                <div style={{ display: "flex" }}>
                    <div id="one">
                        <label for={question.optionOne}></label>
                        <input placeholder="Enter optionOne" type='text' id={question.optionOne} for="optionOne" name="optionOne" onChange={handleChange} value={question.optionOne} required></input>

                    </div>
                    <div id="one">
                        <label for={question.optionTwo}></label>
                        <input placeholder="Enter optionTwo" type='text' id={question.optionTwo} for="optionTwo" name="optionTwo" onChange={handleChange} value={question.optionTwo} required></input>

                    </div>
                </div>
                <div style={{ display: "flex" }}>

                    <div id="one">
                        <label for={question.optionThree}></label>
                        <input placeholder="Enter optionThree" type='text' id={question.optionThree} for="optionThree" name="optionThree" onChange={handleChange} value={question.optionThree} required></input>

                    </div>
                    <div id="one">
                        <label for={question.optionFour}></label>
                        <input placeholder="Enter optionFour" type='text' id={question.optionFour} for="optionFour" name="optionFour" onChange={handleChange} value={question.optionFour} required></input>

                    </div>
                </div>
                <div style={{ display: "flex" }}>

                    <div id="one">
                        <label for={question.answer}></label>
                        <input placeholder="Enter answer" type='text' id={question.answer} for="answer" name="answer" onChange={handleChange} value={question.answer}></input>

                    </div>
                    <div id="one">
                        <label for={question.category}></label>
                        <input placeholder="Enter category" type='text' id={question.category} for="category" name="category" onChange={handleChange} value={question.category} required></input>
                    </div>
                    
                </div>

            </div>

            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <button className='btnLeft' disabled={!question.category}  onClick={addNewQuestion}>New Question</button>
                <button className='btnLeft' onClick={cancelButton}>Cancel</button>
            </div>
            
        </div>
    )
}

export default AddQuestion;