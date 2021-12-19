/* eslint-disable prettier/prettier */
import styled from "styled-components";

interface FrontCardProps {
  backgroundColor: string;
}

export const Container = styled.button`
  display: flex;
  min-width: 500px;
  height: 100px;
  width: 80%;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 11px rgba(140,33,33,.2);
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: no-drop;
    filter: brightness(1);
    color: #000333;
  }

  & + button {
    margin-top: 15px;
  }
`;
export const Content = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex: 1;
`;

export const FrontCard = styled.div<FrontCardProps>`
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;

  align-items: center;
  border-radius: 12px;
  padding: 15px;

  background: #fff;
  color: #000;

  > div.letter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "yellow"};

    height: 40px;
    width: 40px;
    border-radius: 20px;

    font-size: 1.3rem;
    font-weight: bold;
    margin-right: 20px;
  }

  > div.value {
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const BackCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  position: absolute;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    border-radius: 12px;

    > p {
      font-size: 1.5rem;
      font-weight: bold;
      margin-top: 10px;
    }
  }

  div.isCorrect {
    background-color: #2baa6d;
  }
  div.isIncorrect {
    background-color: #e44a4e;
  }
`;
