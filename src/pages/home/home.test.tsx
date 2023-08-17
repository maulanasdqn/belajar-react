import { describe, expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import { HomePages } from "./index";

describe("Test Home Page Content", () => {
  test("Should Have Text Halo Bang", () => {
    render(<HomePages />);
    expect(screen.getByText("Halo bang")).toBeInTheDocument();
  });
});
