import { styled } from "styled-components";

type Props = { title: string };

export const Title = (props: Props) => {
  const { title } = props;
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  font-size: 2em;
  color: white;
  text-align: center;
  text-shadow: 0 0 10px black;
  margin: 0;
`;
