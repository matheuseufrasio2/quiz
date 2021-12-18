import type { NextApiRequest, NextApiResponse } from "next";

import questions from "../questionsStorage";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const idSelected = +request.query.id;

  const question = questions.find((question) => question.id == idSelected);

  if (question) {
    const questionWithRandomAnswers = question.randomAnswers();

    response.status(200).json(questionWithRandomAnswers.convertToObject());
  } else {
    response.status(404).json({ error: "Not Found" });
  }
};
