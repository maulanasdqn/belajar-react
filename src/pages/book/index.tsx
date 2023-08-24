import { BookLoading } from "@/modules";
import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { BookModule } = lazily(() => import("@/modules"));

export const BookPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<BookLoading />}>
      <BookModule />
    </Suspense>
  );
};
