import { AnswerModel } from "models/answer";

export function random(
  elements: never[] | AnswerModel[],
): never[] | AnswerModel[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map((obj) => obj.value);
}
