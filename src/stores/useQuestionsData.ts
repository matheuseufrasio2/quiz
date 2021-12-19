import { IQuestion } from "interfaces/IQuestion";
import create from "zustand";

interface QuestionsHook {
  questions: IQuestion[];
  isLoading: boolean;
  onChangeIsLoading: (change: boolean) => void;
  setQuestions: (questions: IQuestion[]) => void;
  onResponse: (questionId: number, key: string) => void;
}

export const useQuestionsData = create<QuestionsHook>((set) => ({
  isLoading: true,
  questions: [],
  onChangeIsLoading: (change) => set(() => ({ isLoading: change })),
  setQuestions: (questions) => set(() => ({ questions })),
  onResponse: (questionId, key) =>
    set((state) => {
      const answerChosen = state.questions[questionId - 1].answers.find(
        (answer) => answer.value === key,
      );

      if (answerChosen === undefined) {
        throw new TypeError("The value was promised to always be there!");
      }

      return {
        questions: state.questions.map((question) => {
          if (question.id === questionId) {
            return {
              ...question,
              isAnswered: true,
              isCorrectlyAnswered: answerChosen.isCorrect,
              answers: question.answers.map((answer) => {
                if (
                  answer.value === answerChosen.value ||
                  answer.isCorrect === true
                ) {
                  return {
                    ...answer,
                    isRevealed: true,
                  };
                }
                return answer;
              }),
            };
          }
          return question;
        }),
      };
    }),
}));
