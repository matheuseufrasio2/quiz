import { AnswerModel } from "models/answer";
import { QuestionModel } from "models/question";

const questions: QuestionModel[] = [
  new QuestionModel(201, "Qual bicho transmite a doença de chagas?", [
    AnswerModel.incorrectAnswer("Abelha"),
    AnswerModel.incorrectAnswer("Barata"),
    AnswerModel.incorrectAnswer("Pulga"),
    AnswerModel.correctAnswer("Barbeiro"),
  ]),
  new QuestionModel(202, 'Qual fruta é conhecida no nordeste como "jerimum?"', [
    AnswerModel.incorrectAnswer("Caju"),
    AnswerModel.incorrectAnswer("Côco"),
    AnswerModel.incorrectAnswer("Chuchu"),
    AnswerModel.correctAnswer("Abóbora"),
  ]),
  new QuestionModel(203, 'Qual o coletivo de "cães?"', [
    AnswerModel.incorrectAnswer("Manada"),
    AnswerModel.incorrectAnswer("Alcateia"),
    AnswerModel.incorrectAnswer("Rebanho"),
    AnswerModel.correctAnswer("Matilha"),
  ]),
  new QuestionModel(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      AnswerModel.incorrectAnswer("Equilátero"),
      AnswerModel.incorrectAnswer("Isóceles"),
      AnswerModel.incorrectAnswer("Trapézio"),
      AnswerModel.correctAnswer("Escaleno"),
    ],
  ),
];

export default questions;
