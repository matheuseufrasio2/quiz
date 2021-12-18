import { Question } from "components/Question";
import { AnswerModel } from "models/answer";
import { QuestionModel } from "models/question";
import type { NextPage } from "next";
import { useState } from "react";
import { Container } from "styles/pages/home";

const mockedQuestion = new QuestionModel(1, "Qual é a melhor cor?", [
  AnswerModel.incorrectAnswer("Verde"),
  AnswerModel.incorrectAnswer("Amarelo"),
  AnswerModel.incorrectAnswer("Vermelho"),
  AnswerModel.correctAnswer("Preto"),
]);

const Home: NextPage = () => {
  const [question, setQuestion] = useState(mockedQuestion);

  function onResponse(index: number) {
    setQuestion(question.answersWith(index));
  }

  return (
    <Container>
      <Question onResponse={onResponse} question={question} />
    </Container>
  );
};

export default Home;
