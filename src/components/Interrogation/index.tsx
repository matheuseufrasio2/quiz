import { Container } from "./styles";

interface InterrogationProps {
  text: string;
}

export function Interrogation({ text }: InterrogationProps) {
  return (
    <Container>
      <span>{text}</span>
    </Container>
  );
}
