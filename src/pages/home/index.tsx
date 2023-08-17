import { FC, ReactElement, Suspense } from "react";
import { lazily } from "react-lazily";

const { HomeModule } = lazily(() => import("@/modules"));

export const HomePages: FC = (): ReactElement => {
  return (
    <main className="flex items-start w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <HomeModule />
      </Suspense>
    </main>
  );
};
