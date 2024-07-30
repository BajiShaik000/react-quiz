// https://opentdb.com/api.php?amount=10&type=multiple

import React from "react";

type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
          <button disabled={Boolean(userAnswer)} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
