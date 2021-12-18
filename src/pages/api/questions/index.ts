import { NextApiRequest, NextApiResponse } from "next";
import { random } from "utils/arrays";

import questions from "../questionsStorage";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const ids = random(questions.map((question) => question.id));

  response.status(200).json(ids);
};
