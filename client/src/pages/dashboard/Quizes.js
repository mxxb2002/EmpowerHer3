import React, { useState } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";
import { allQuizzes } from "./Demodata";

export default function Quizes({ onLogout }) {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(allQuizzes[currentQuizIndex].quizzes.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [incorrectlyAnswered, setIncorrectlyAnswered] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [allQuizzesCompleted, setAllQuizzesCompleted] = useState(false);
  const quizzes = allQuizzes[currentQuizIndex].quizzes;

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = optionIndex;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    let currentScore = score;
    let currentCorrectAnswers = correctAnswers;
    let currentWrongAnswers = wrongAnswers;
    let currentIncorrectlyAnswered = [...incorrectlyAnswered];

    selectedOptions.forEach((selectedOption, index) => {
      const currentQuiz = quizzes[index];
      if (selectedOption !== null) {
        if (selectedOption === currentQuiz.correctAnswer) {
          currentScore++;
          currentCorrectAnswers++;
        } else {
          currentWrongAnswers++;
          currentIncorrectlyAnswered.push({
            question: currentQuiz.question,
            correctAnswer: currentQuiz.options[currentQuiz.correctAnswer],
          });
        }
      }
    });

    setScore(currentScore);
    setCorrectAnswers(currentCorrectAnswers);
    setWrongAnswers(currentWrongAnswers);
    setIncorrectlyAnswered(currentIncorrectlyAnswered);
    setSelectedOptions(new Array(quizzes.length).fill(null));
    setQuestionNumber(1);

    // Check if minimum 5 quizzes have been answered
    const answeredQuizCount = selectedOptions.reduce(
      (count, option) => (option !== null ? count + 1 : count),
      0
    );
    if (answeredQuizCount >= 5) {
      if (currentQuizIndex >= allQuizzes.length - 1) {
        setAllQuizzesCompleted(true);
      } else {
        setCurrentQuizIndex(currentQuizIndex + 1);
      }
    }
  };
  const handleSkip = () => {
    if (currentQuizIndex < allQuizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedOptions(new Array(quizzes.length).fill(null));
      setQuestionNumber(1);
    } else {
      setAllQuizzesCompleted(true);
    }
  };

  return (
    <div>
      <div className="pt-16 lg:ml-[250px] bg-dash-bg bg-cover bg-no-repeat min-h-screen overflow-y-auto fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-0"></div>
        <div className="text-black mt-10 text-center relative z-10 items-center justify-center flex flex-col">
          {!allQuizzesCompleted && (
            <div>
              <h2 className="font-quicksand text-[44px] stm:text-[24px] text-rose-700 text-center">
                Empowerment Quizzes
              </h2>

              <div className="text-black mt-5 w-[800px] stm:w-[360px] lsm:w-[340px] bg-white/75 py-5 px-10 stm:px-3 lsm:px-1 mb-5">
                <h2 className="font-quicksand text-[26px] text-rose-400 text-center font-bold mb-5">
                  {allQuizzes[currentQuizIndex].name}
                </h2>
                {quizzes.map((quiz, index) => (
                  <div
                    key={index}
                    className="bg-yellow-100 rounded-[5px] shadow-md my-8 px-2 py-3"
                  >
                    <h2 className="text-[15px] font-semibold font-poppins text-left">
                      {index + 1} : {quiz.question}
                    </h2>
                    <div className="flex flex-col items-start  ">
                      {quiz.options.map((option, optionIndex) => (
                        <label
                          key={optionIndex}
                          className="flex flex-row items-center my-3 text-[14px]"
                        >
                          <input
                            type="radio"
                            value={optionIndex}
                            checked={selectedOptions[index] === optionIndex}
                            onChange={() =>
                              handleOptionChange(index, optionIndex)
                            }
                            className="mr-2 w-[20px] h-[20px]"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex flex-row items-center justify-end">
                  {/* skip button */}
                  <button
                    onClick={handleSkip}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
                  >
                    Skip
                  </button>
                  {/* submit button */}
                  <button
                    onClick={handleSubmit}
                    disabled={
                      selectedOptions.filter((option) => option !== null)
                        .length < 5
                    }
                    className={
                      selectedOptions.filter((option) => option !== null)
                        .length < 5
                        ? "bg-rose-300 opacity-50"
                        : "bg-rose-700 opacity-100"
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Results Section */}
          {allQuizzesCompleted && (
            <div className="text-black mt-5 w-[800px] bg-white/75 py-5 px-10 mb-5">
              <div className="flex flex-row items-center justify-center">
                <i className="fa-solid fa-clipboard-check mr-2 text-rose-700 text-[44px]"></i>
                <h2 className="font-quicksand text-[44px] text-rose-700 text-center">
                  Quiz completed!
                </h2>
              </div>
              <div className="flex flex-col justify-center bg-pink-200 px-3 py-5 my-4">
                <div className="flex flex-row items-center justify-between font-bold">
                  <p className="text-yellow-600">
                    Total Questions Answered: {correctAnswers + wrongAnswers}
                  </p>
                  <p className="text-blue-600">Score: {score}</p>
                  <p className="text-green-600">
                    Correct Answers: {correctAnswers}
                  </p>
                  <p className="text-red-600">Wrong Answers: {wrongAnswers}</p>
                </div>
              </div>

              <div>
                <h3 className="bg-cyan-800 text-white font-bold mx-48 py-1 mb-4 mt-8">
                  Incorrectly Answered Questions
                </h3>
                <ul>
                  {incorrectlyAnswered.map((item, index) => (
                    <li
                      key={index}
                      className="bg-yellow-100 rounded-[5px] shadow-md my-8 px-2 py-3 text-left"
                    >
                      <div className="flex flex-row items-start my-2">
                        <p className="bg-rose-600 rounded-[3px] px-1 mr-3 text-white">
                          Question:
                        </p>
                        <p>{item.question}</p>
                      </div>
                      <div className="flex flex-row items-start my-2">
                        <p className="bg-green-300 rounded-[3px] px-1 mr-3 ">
                          Correct Answer:{" "}
                        </p>
                        <p>{item.correctAnswer}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
