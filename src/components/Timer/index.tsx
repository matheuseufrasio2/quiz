import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { Container } from "./styles";

interface TimerProps {
  duration: number;
  timesUp: () => void;
}

export function Timer({ duration, timesUp }: TimerProps) {
  return (
    <Container>
      <CountdownCircleTimer
        size={120}
        duration={duration}
        isPlaying
        onComplete={timesUp}
        colors={[
          ["#bce596", 0.33],
          ["#f7b801", 0.33],
          ["#ed827a", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </Container>
  );
}
