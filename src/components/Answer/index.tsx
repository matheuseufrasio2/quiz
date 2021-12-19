import { IAnswer } from "interfaces/IAnswer";
import { useQuestionsData } from "stores/useQuestionsData";
import { Container, Content, FrontCard, BackCard } from "./styles";

interface AnswerProps {
  answer: IAnswer;
  indexQuestion: number;
  letterAlternative: string;
  backgroundColorLetterAlternative: string;
}

export function Answer({
  answer,
  indexQuestion,
  letterAlternative,
  backgroundColorLetterAlternative,
}: AnswerProps) {
  const { onResponse } = useQuestionsData();

  return (
    <Container
      disabled={answer.isRevealed}
      type="button"
      onClick={() => {
        onResponse(indexQuestion, answer.value);
      }}
    >
      <Content>
        {!answer.isRevealed ? (
          <FrontCard backgroundColor={backgroundColorLetterAlternative}>
            <div className="letter">{letterAlternative}</div>
            <div className="value">{answer.value}</div>
          </FrontCard>
        ) : (
          <BackCard>
            {answer.isCorrect ? (
              <div className="isCorrect">
                <span>A resposta certa é...</span>
                <p>{answer.value}</p>
              </div>
            ) : (
              <div className="isIncorrect">
                <span>A resposta informada está errada...</span>
                <p>{answer.value}</p>
              </div>
            )}
          </BackCard>
        )}
      </Content>
    </Container>
  );
}
