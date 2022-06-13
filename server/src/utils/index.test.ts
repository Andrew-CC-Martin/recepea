import { validateEmail, validatePassword } from ".";

describe("validateEmail", () => {
  it("should return true if email is valid", () => {
    expect(validateEmail("email@address.com")).toBe(true);
  });

  it("should return false if email is invalid", () => {
    expect(validateEmail("banana")).toBe(false);
  });
});

describe("validatePassword", () => {
  it("should return true if password is valid", () => {
    expect(validatePassword("Passw0rd1!")).toBe(true);
  });

  it("should return false if less than 8 chars", () => {
    expect(validatePassword("Pw0rd1!")).toBe(false);
  });

  it("should return false if contains no numbers", () => {
    expect(validatePassword("PasswOrd!")).toBe(false);
  });

  it("should return false if contains no uppercase", () => {
    expect(validatePassword("passw0rd1!")).toBe(false);
  });

  it("should return false if contains no special chars", () => {
    expect(validatePassword("Passw0rd1")).toBe(false);
  });
});
