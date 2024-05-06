import React from "react";

function QuestionList({ questions }) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <h2>{question.prompt}</h2>
            <ul>
              {question.answers.map((answer, index) => (
                <li key={index}>{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
