/**
 * @vitest-environment happy-dom
 */

import { test, expect } from "vitest";
import { screen } from "@testing-library/dom";

test("prevent default should prevent form navigation on submit", () => {
  document.body.innerHTML = `
    <form action="https://does-not-exist-abcd-123.com/">
      <button type="submit">Submit</button>
    </form>
  `;

  const button = screen.getByRole("button");
  const form = button.closest("form")!;

  form.addEventListener("submit", (e) => {
    console.debug("Prevent default has been called");
    e.preventDefault();
  });

  button.click();

  expect(document.location.href).toBe("http://localhost:3000/");
  expect(document.location.href).not.toBe("https://does-not-exist-abcd-123.com/");
});
