import { AnswerModel } from "models/answer";
import { Container, Content, FrontCard, BackCard } from "./styles";

interface AnswerProps {
  answer: AnswerModel;
  indexAnswer: number;
  letterAlternative: string;
  backgroundColorLetterAlternative: string;
  onResponse: (index: number) => void;
}

export function Answer({
  answer,
  indexAnswer,
  letterAlternative,
  backgroundColorLetterAlternative,
  onResponse,
}: AnswerProps) {
  return (
    <Container onClick={() => onResponse(indexAnswer)}>
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
