import { Answer } from "components/Answer";
import { Interrogation } from "components/Interrogation";
import { Timer } from "components/Timer";
import { IQuestion } from "interfaces/IQuestion";
import { alternatives } from "utils/alternatives";
import { Container } from "./styles";

interface QuestionProps {
  question: IQuestion;
}

export function Question({ question }: QuestionProps) {
  return (
    <Container>
      <Interrogation text={question.interrogation} />
      <Timer
        duration={10}
        timesUp={() => {
          console.log("TimesUp");
        }}
      />
      {question.answers.map((answer, i) => (
        <Answer
          indexQuestion={question.id}
          key={answer.value}
          answer={answer}
          letterAlternative={alternatives[i].value}
          backgroundColorLetterAlternative={alternatives[i].color}
        />
      ))}
    </Container>
  );
}
