<<<<<<< HEAD
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Trying to render <App />", () => {
  render(<App />);
=======
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
>>>>>>> 21abcfe527747fa81344cad542002a2e90b1fd56
});
