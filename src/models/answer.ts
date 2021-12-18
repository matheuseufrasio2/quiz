class AnswerModel {
  #value: string;
  #isCorrect: boolean;
  #isRevealed: boolean;

  constructor(value: string, isCorrect: boolean, isRevealed = false) {
    this.#value = value;
    this.#isCorrect = isCorrect;
    this.#isRevealed = isRevealed;
  }

  static correctAnswer(value: string) {
    return new AnswerModel(value, true);
  }
  static incorrectAnswer(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }
  get isCorrect() {
    return this.#isCorrect;
  }
  get isRevealed() {
    return this.#isRevealed;
  }

  convertToObject() {
    return {
      value: this.#value,
      isCorrect: this.#isCorrect,
      isRevealed: this.#isRevealed,
    };
  }

  reveal() {
    return new AnswerModel(this.#value, this.#isCorrect, true);
  }
}

export { AnswerModel };
