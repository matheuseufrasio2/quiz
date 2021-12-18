import { Answer } from "components/Answer";
import { Interrogation } from "components/Interrogation";
import { QuestionModel } from "models/question";
import { alternatives } from "utils/alternatives";
import { Container } from "./styles";

interface QuestionProps {
  question: QuestionModel;
  onResponse: (index: number) => void;
}

export function Question({ question, onResponse }: QuestionProps) {
  return (
    <Container>
      <Interrogation text={question.interrogation} />
      {question.answers.map((answer, i) => (
        <Answer
          key={i}
          answer={answer}
          indexAnswer={i}
          letterAlternative={alternatives[i].value}
          backgroundColorLetterAlternative={alternatives[i].color}
          onResponse={onResponse}
        />
      ))}
    </Container>
  );
}
