import { getActiveMenuItem } from "./RecepeaHeader";

describe("getActiveMenuItem", () => {
  it("strips the first character off a path", () => {
    expect(getActiveMenuItem("/profile")).toBe("profile");
  });

  it("defaults to home for root path", () => {
    expect(getActiveMenuItem("/")).toBe("home");
  });
});
