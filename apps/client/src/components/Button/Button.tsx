import { HTMLAttributes } from "react";

import s from "./Button.module.scss";

type Props = HTMLAttributes<HTMLButtonElement>;
export const Button = (props: Props) => {
  return <button {...props} className={s.button} />;
};
