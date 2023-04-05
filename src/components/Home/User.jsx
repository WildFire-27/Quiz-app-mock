import React,{useState} from 'react';
import FilterQuestion from './FilterQuestion';
import questionData from './questionData';

const User = () => {
    const [question, setQuestion] = useState(questionData);

    return (
        <div>
            <h1 style={{margin:"20px auto"}}>Quiz App 🤔💭</h1>
            <div id="bgbg">
                <h3>Total Questions:{question.length}</h3>
                <h3>Score: 0</h3>
                <h3>Time Left⌚:20</h3>
            </div>
            <FilterQuestion question={question} />
            <br/>
            <button className='btnLeft' style={{padding:"20px 50px"}}>Submit</button>
        </div>
    );
}

export default User;
