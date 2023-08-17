import { expect, test, describe, vi } from "vitest";
import { Button } from ".";
import { fireEvent, render, screen } from "@testing-library/react";

vi.mock("react-router-dom", () => ({
  Link: ({ children, to }: { children: React.ReactNode; to: string }) => (
    <a role="link" href={to}>
      {children}
    </a>
  ),
  useLocation: vi.fn(),
  useNavigate: vi.fn(),
}));

describe("Test Button Functionality", () => {
  test("Should Have Text Hello", () => {
    render(<Button>Hello</Button>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  test("Should click button", () => {
    const onClickFn = vi.fn();
    render(<Button onClick={onClickFn}>Hello</Button>);
    fireEvent.click(screen.getByRole("button"));
    expect(onClickFn).toHaveBeenCalled();
  });

  test("Should ignore click button when disabled", () => {
    const onClickFn = vi.fn();
    render(
      <Button onClick={onClickFn} disabled>
        Hello
      </Button>,
    );
    fireEvent.click(screen.getByRole("button"));
    expect(onClickFn).not.toHaveBeenCalled();
  });

  test("Should have loading state", () => {
    render(<Button loading>Hello</Button>);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Should have disabled state", () => {
    render(<Button disabled>Hello</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("Should have link when props to was provided", () => {
    render(<Button to="/test">Hello</Button>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "/test");
  });

  test("Should not have link when props to was not provided", () => {
    render(<Button>Hello</Button>);
    expect(screen.queryByRole("link")).toBeNull();
  });

  test("Should type submit when props type was submit", () => {
    render(<Button type="submit">Hello</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  test("Should type button when props type was button", () => {
    render(<Button type="button">Hello</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  test("Should type reset when props type was reset", () => {
    render(<Button type="reset">Hello</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "reset");
  });
});

describe("Test Button Style", () => {
  test("Should Have bg-blue-500 variant primary", () => {
    render(<Button variant="primary">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-blue-500 text-white px-4 py-2 rounded-lg");
  });

  test("Should Have bg-purple-500 variant secondary", () => {
    render(<Button variant="secondary">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-purple-500 text-white px-4 py-2 rounded-lg");
  });

  test("Should Have bg-red-500 variant danger", () => {
    render(<Button variant="danger">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-500 text-white px-4 py-2 rounded-lg");
  });

  test("Should Have bg-yellow-500 variant warning", () => {
    render(<Button variant="warning">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-yellow-500 text-white px-4 py-2 rounded-lg");
  });

  test("Should Have text-sm size sm", () => {
    render(<Button size="sm">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-sm px-4 py-2 rounded-lg");
  });

  test("Should Have text-base size md", () => {
    render(<Button size="md">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-base px-4 py-2 rounded-lg");
  });

  test("Should Have text-lg size lg", () => {
    render(<Button size="lg">Hello</Button>);
    expect(screen.getByRole("button")).toHaveClass("text-lg px-4 py-2 rounded-lg");
  });
});
