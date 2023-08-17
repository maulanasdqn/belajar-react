import { FC, ReactElement } from "react";
import { useGetBooks } from "./hook";

export const BookModule: FC = (): ReactElement => {
  const { data } = useGetBooks("mock");
  console.log(data);
  return (
    <section className="flex items-start w-full justify-start p-4">
      <span className="text-green-600 font-semibold">Book Module</span>
    </section>
  );
};
