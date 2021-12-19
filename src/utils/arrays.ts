import { IAnswer } from "interfaces/IAnswer";

export function random(elements: IAnswer[]): IAnswer[] {
  return elements
    .map((value) => ({ value, random: Math.random() }))
    .sort((a, b) => a.random - b.random)
    .map((obj) => obj.value);
}
