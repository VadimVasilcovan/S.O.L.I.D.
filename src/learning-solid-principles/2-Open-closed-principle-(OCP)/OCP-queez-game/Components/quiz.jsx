import React from "react";
import { useState } from "react";
import { quizData } from "../services/quiz-data";
import { checkAnswer } from "../utils/quiz-action";
import Question from "./question";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    if (checkAnswer(selectedAnswer, quizData[currentIndex].answer)) {
      setScore(score + 1);
    }

    if (currentIndex + 1 < quizData.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  return finished ? (
    <h1>
      Quiz Finished! Score: {score}/{quizData.length}
    </h1>
  ) : (
    <Question
      question={quizData[currentIndex].question}
      options={quizData[currentIndex].options}
      onAnswer={handleAnswer}
    />
  );
}

export default Quiz;
