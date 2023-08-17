import { FC, ReactElement } from "react";

export const HomeModule: FC = (): ReactElement => {
  return (
    <main className="flex items-start w-full">
      <header>
        <nav className="w-full flex justify-between p-4 gap-x-4">
          <span>Home</span>
          <span>Home</span>
          <span>Home</span>
        </nav>
      </header>
    </main>
  );
};
