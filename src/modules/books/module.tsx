import { FC, ReactElement } from "react";
import { useGetBooks } from "./hook";

export const BookModule: FC = (): ReactElement => {
  const { data } = useGetBooks("mock");
  console.log(data);
  return <section className="flex items-center justify-center">Book Module</section>;
};
