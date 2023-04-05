import React, { useState } from 'react';
import AddQuestion from './AddQuestion';
import questionData from './questionData';

const Admin = () => {
    const [question, setQuestion] = useState(questionData);
    const [show, setShow] = useState(false)

    function addNote(newCard) {
        setQuestion(prevCard => {
            return [newCard, ...prevCard];
        });
    }
    // function filterCard(id) {
    //     setQuestion(prevCard => {
    //         return prevCard.filter((cardItem, index) => {
    //             return index !== id;
    //         });
    //     });
    // }

    const toShowFirst = () => {
        setShow(!show)
    }
    return (
        <div>
            <button className='btnLeft' id="closeBtn" onClick={toShowFirst}>Click here to add new question</button>

            {show === true ? <AddQuestion onAdd={addNote} /> : ""}

        </div>
    );
}

export default Admin;
