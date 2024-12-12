import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";

let container;

beforeEach(() => {
  container = render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  ).container;
});

test('wraps content in a div with "navbar" class', () => {
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test("renders a Home <NavLink>", () => {
  const link = screen.getByText("Home");

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/");

  fireEvent.click(link);

  expect(link.classList).toContain("active");
});

test("renders an Actors <NavLink>", () => {
  const link = screen.getByText("Actors");

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/actors");

  fireEvent.click(link);

  expect(link.classList).toContain("active");
});

test("renders a Directors <NavLink>", () => {
  const link = screen.getByText("Directors");

  expect(link).toBeInTheDocument();
  expect(link.tagName).toBe("A");
  expect(link.href).toContain("/directors");

  fireEvent.click(link);

  expect(link.classList).toContain("active");
});
