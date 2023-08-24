import { FC, ReactElement } from "react";

export const BookLoading: FC = (): ReactElement => {
  return (
    <section className="flex items-start w-full justify-start p-4">
      <span className="text-green-600 font-semibold">Loading Book Data...</span>
    </section>
  );
};
