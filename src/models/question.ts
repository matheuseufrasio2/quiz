import { random } from "utils/arrays";
import { AnswerModel } from "./answer";

class QuestionModel {
  #id: number;
  #interrogation: string;
  #answers: AnswerModel[];
  #isAnswered: boolean;
  #isCorrectlyAnswered: boolean;

  constructor(
    id: number,
    interrogation: string,
    answers: AnswerModel[],
    isAnswered = false,
    isCorrectlyAnswered = false,
  ) {
    this.#id = id;
    this.#interrogation = interrogation;
    this.#answers = answers;
    this.#isAnswered = isAnswered;
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
    return this.#isAnswered;
  }

  convertToObject() {
    return {
      id: this.#id,
      interrogation: this.#interrogation,
      isCorrectlyAnswered: this.#isCorrectlyAnswered,
      isAnswered: this.#isAnswered,
      answers: this.#answers.map((resp) => resp.convertToObject()),
    };
  }

  randomAnswers() {
    const randomAnswers = random(this.#answers);

    return new QuestionModel(
      this.#id,
      this.#interrogation,
      randomAnswers,
      this.#isAnswered,
      this.#isCorrectlyAnswered,
    );
  }

  answersWith(indexAnswer: number): QuestionModel {
    if (indexAnswer === -1) {
      return new QuestionModel(
        this.#id,
        this.#interrogation,
        this.#answers,
        this.#isAnswered,
        this.#isCorrectlyAnswered,
      );
    }

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
      true,
      isCorrectlyAnswered,
    );
  }
}

export { QuestionModel };
