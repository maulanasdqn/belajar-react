import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { BookModule } = lazily(() => import("@/modules"));

export const BookPages: FC = (): ReactElement => {
  return (
    <main className="flex items-center justify-center w-full h-screen">
      <span className="text-2xl text-green-500">Book Pages</span>
      <Suspense fallback={"Load Book..."}>
        <BookModule />
      </Suspense>
    </main>
  );
};
