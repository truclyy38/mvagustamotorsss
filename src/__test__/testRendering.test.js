import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import {Hello} from "../function/hello";

let container = null;
beforeEach(() => {
  // cài đặt một DOM element như là target cho render
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // dọn dẹp lúc thoát
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without props", () => {
  act(() => {
    render(<Hello />, container);
  });
  expect(container.textContent).toBe("Hey, stranger");

  act(() => {
    render(<Hello name="Ly" />, container);
  });
  expect(container.textContent).toBe("Hello, Ly!");

  act(() => {
    render(<Hello name="Tan" />, container);
  });
  expect(container.textContent).toBe("Hello, Tan!");
  act(() => {
    render(<Hello name="Hieu" />, container);
  });
  expect(container.textContent).toBe("Hello, Hieu!");
});