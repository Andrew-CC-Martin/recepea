import { validateEmail } from ".";

describe("validateEmail", () => {
  it("should return true if email is valid", () => {
    expect(validateEmail("email@address.com")).toBe(true);
  });

  it("should return false if email is invalid", () => {
    expect(validateEmail("banana")).toBe(false);
  });
});
