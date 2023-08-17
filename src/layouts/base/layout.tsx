import { FC, ReactElement } from "react";
import { TBaseLayout } from "./types";

export const BaseLayout: FC<TBaseLayout> = ({ children }): ReactElement => {
  return <main className="">{children}</main>;
};
