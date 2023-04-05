import React from 'react';
// import DeleteCourse from './deleteCard';
// import UpdateCard from './updateCard';

const QuestionCard = (props) => {
    const {id, questionName, optionOne, optionTwo, optionThree, optionFour, answer } = props

    // function deleteClick() {
    //     props.onDelete(props.id);
    //   }


    return (
        <>

        <div className="card" >
        
            <div className="top">
                <h3 id="bg" className="name">{id + 1} {questionName} </h3>
            </div>
            <div className="bottom">
            <form>

                <div id="bg" >

                    <input type="radio" className="info" id={optionOne} name="optionOne"></input>
                    <label id="bg" > {optionOne} </label>

                </div>
                <div id="bg" >

                    <input type="radio" className="info" id={optionTwo} name="optionTwo"></input>
                    <label id="bg"  > {optionTwo} </label>

                </div>
                <div id="bg" >

                    <input type="radio" className="info" id={optionThree} name="optionThree"></input>
                    <label id="bg" > {optionThree} </label>

                </div>
                <div id="bg" >

                    <input type="radio" className="info" id={optionFour} name="optionFour"></input>
                    <label id="bg" > {optionFour} </label>

                </div>
                <div id="bg" >

                    <input style={{display:'none'}} type="radio" className="info" id={answer}></input>
                    <label id="bg"  style={{display:'none'}}> {answer} </label>

                </div>
                
                </form>

            </div>
{/* 
            <div className='buttonDiv'>
                <button>Delete</button>

            </div> */}
        </div>
        <hr/>
        </>
        
    );
}

export default QuestionCard;