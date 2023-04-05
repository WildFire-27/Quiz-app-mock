import { useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import NewQuestionPanel from "../QuizQuestions/NewQuestionPanel";
import QuestionPanel from "../QuizQuestions/QuestionPanel";
import QuizHeader from "../QuizQuestions/QuizHeader";
import Panel from "../UI/panel/Panel";

const initial_questionbank = [
  {
    id: 1,
    Question: "React is a ........",
    category: "Reactjs",
    option1: "Web development Framework ",
    option2: "JavaScript Library",
    option3: "jQuery",
    option4: "Web Server",
    correct: "option2",
  },

  {
    id: 2,
    Question: "Which ReactJS function renders HTML to the web page?",
    category: "Reactjs",
    option1: "render()",
    option2: "ReactDOM.render()",
    option3: "renders()",
    option4: "ReactDOM.renders()",
    correct: "ReactDOM.render()",
  },
  {
    id: 3,
    Question: "Current Training going on.....",
    category: "Reactjs",
    option1: "React.Js",
    option2: "JavaScript",
    option3: "CSS",
    option4: "HTML",
    correct: "React.Js",
  },

  {
    id: 4,
    Question: "HTML stands for ........",
    category: "HTML",
    option1: "HyperText Markup Language",
    option2: "HyperText Preprocessor",
    option3: "HighText Language",
    option4: "None of the above",
    correct: "HyperText Markup Language",
  },
  {
    id: 5,
    Question: "What is gives the Structure to a Website ?",
    category: "HTML",
    option1: "HTML5",
    option2: "CSS",
    option3: "JavaScript",
    option4: "Java",
    correct: "HTML5",
  },
  {
    id: 6,
    Question: "What is gives the Behavior to a Website ?",
    category: "JavaScript",
    option1: "HTML5",
    option2: "CSS",
    option3: "JavaScript",
    option4: "Java",
    correct: "JavaScript",
  },
  {
    id: 7,
    Question: "Which one is Dynamic programming language?",
    category: "JavaScript",
    option1: "HTML5",
    option2: "CSS",
    option3: "JavaScript",
    option4: "Java",
    correct: "JavaScript",
  },
  {
    id: 8,
    Question: "What is gives the Style to a Website ?",
    category: "CSS",
    option1: "HTML5",
    option2: "CSS",
    option3: "JavaScript",
    option4: "Java",
    correct: "CSS",
  },
];

function Home() {
  const loggedInUserStatus = localStorage.getItem("isLoggedIn");
  const [questionBank, setQuestionBank] = useState(initial_questionbank);
  const addquestionHandler = (questionBank) => {
    setQuestionBank((prevquestion) => {
      return [questionBank, ...prevquestion];
    });
  };

  return (
    <div className="App">
      {loggedInUserStatus === "admin@gmail.com" ? <NewQuestionPanel addquestion={addquestionHandler} /> : ""}
      <Panel>
        <QuestionPanel questionBank={questionBank} />
      </Panel>
    </div>
  );
}
export default Home;
