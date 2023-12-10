import s from "./Title.module.scss";

type Props = { title: string };

export const Title = (props: Props) => {
  const { title } = props;
  return <h1 className={s.title}>{title}</h1>;
};
