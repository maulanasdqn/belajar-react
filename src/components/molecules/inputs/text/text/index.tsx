import { FC, ReactElement } from "react";

export const TextField: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-y-2">
      <label
        htmlFor="large-input"
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        Large input
      </label>
      <input
        type="text"
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
