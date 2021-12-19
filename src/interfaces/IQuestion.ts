import { IAnswer } from "./IAnswer";

interface IQuestion {
  id: number;
  interrogation: string;
  answers: IAnswer[];
  isAnswered: boolean;
  isCorrectlyAnswered: boolean;
}

export type { IQuestion };
