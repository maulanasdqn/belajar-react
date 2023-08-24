import { describe, expect, test } from "vitest";
import { screen, render } from "@testing-library/react";
import { Navbar } from ".";

describe("Test Navbar Component Content", () => {
  test("Should Defined", () => {
    render(<Navbar />);
    expect(screen.getByRole("navbar")).toBeInTheDocument();
  });

  test("Should Have Text Flowbite", () => {
    render(<Navbar />);
    expect(screen.getByText("Flowbite")).toBeInTheDocument();
  });

  test("Should Have Open Main Menu", () => {
    render(<Navbar />);
    expect(screen.getByText("Open main menu")).toBeInTheDocument();
  });

  test("Should Have Text Home", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  test("Should Have Text About", () => {
    render(<Navbar />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  test("Should Have Text Services", () => {
    render(<Navbar />);
    expect(screen.getByText("Services")).toBeInTheDocument();
  });

  test("Should Have Text Contact", () => {
    render(<Navbar />);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("Should Have Text Pricing", () => {
    render(<Navbar />);
    expect(screen.getByText("Pricing")).toBeInTheDocument();
  });
});
