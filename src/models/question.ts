import { random } from "utils/arrays";
import { AnswerModel } from "./answer";

class QuestionModel {
  #id: number;
  #interrogation: string;
  #answers: AnswerModel[];
  #isCorrectlyAnswered: boolean;

  constructor(
    id: number,
    interrogation: string,
    answers: AnswerModel[],
    isCorrectlyAnswered = false,
  ) {
    this.#id = id;
    this.#interrogation = interrogation;
    this.#answers = answers;
    this.#isCorrectlyAnswered = isCorrectlyAnswered;
  }

  get id() {
    return this.#id;
  }

  get interrogation() {
    return this.#interrogation;
  }

  get answers() {
    return this.#answers;
  }

  get isCorrectlyAnswered() {
    return this.#isCorrectlyAnswered;
  }

  get isAnswered() {
    for (const answer of this.#answers) {
      if (answer.isRevealed) return true;
    }

    return false;
  }

  convertToObject() {
    return {
      id: this.#id,
      interrogation: this.#interrogation,
      isAnswered: this.isAnswered,
      isCorrectlyAnswered: this.#isCorrectlyAnswered,
      answers: this.#answers.map((resp) => resp.convertToObject()),
    };
  }

  randomAnswers() {
    const randomAnswers = random(this.#answers);

    return new QuestionModel(
      this.#id,
      this.#interrogation,
      randomAnswers,
      this.#isCorrectlyAnswered,
    );
  }

  answersWith(indexAnswer: number): QuestionModel {
    const isCorrectlyAnswered = this.#answers[indexAnswer]?.isCorrect;

    const answers = this.#answers.map((answer, i) => {
      const answerSelected = indexAnswer === i;
      const shouldReveal = answerSelected || answer.isCorrect;
      return shouldReveal ? answer.reveal() : answer;
    });

    return new QuestionModel(
      this.#id,
      this.#interrogation,
      answers,
      isCorrectlyAnswered,
    );
  }
}

export { QuestionModel };
