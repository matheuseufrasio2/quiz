import { Question } from "components/Question";
import { IQuestion } from "interfaces/IQuestion";
import type { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import api from "services/api";
import { useQuestionsData } from "stores/useQuestionsData";
import { Container } from "styles/pages/home";
import { random } from "utils/arrays";

interface HomeProps {
  allQuestions: IQuestion[];
}

const Home: NextPage<HomeProps> = ({ allQuestions }) => {
  const { isLoading, questions, onChangeIsLoading, setQuestions } =
    useQuestionsData();

  useEffect(() => {
    setQuestions(allQuestions);
    onChangeIsLoading(false);
  }, [allQuestions, onChangeIsLoading, setQuestions]);

  if (isLoading) {
    return (
      <Container>
        <h1>Is Loading...</h1>
      </Container>
    );
  }

  return (
    <Container>
      <Question question={questions[0]} />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/questions");

  const allQuestions: IQuestion[] = data.map((question: IQuestion) => {
    return {
      ...question,
      answers: random(question.answers),
    };
  });

  return {
    props: {
      allQuestions,
    },
  };
};

export default Home;
