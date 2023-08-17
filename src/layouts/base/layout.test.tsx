import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BaseLayout } from "./layout";

describe("Test Layout", () => {
  test("Should Have Text Halo Bang", () => {
    render(
      <BaseLayout>
        <div>Halo bang</div>
      </BaseLayout>,
    );
    expect(screen.getByText("Halo bang")).toBeInTheDocument();
  });
});
