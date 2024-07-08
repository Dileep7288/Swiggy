import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Grouping the contact page", () => {
  test("component is rendered or not", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("button is present or not", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load input name from contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("to get all input boxes in the contact component", () => {
    render(<Contact />);

    //Quering
    const inputBox = screen.getAllByRole("textbox");

    //console.log(inputBox.length);

    //Assert
    expect(inputBox.length).toBe(2);
  });
});
