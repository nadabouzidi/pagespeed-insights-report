const { getURL, isValidURL } = require("./utils");
const mockURL = "<https://melted-chocola.te>";
const mockURLs = `${mockURL} ${mockURL}"`;
const detectedMockURL = "https://melted-chocola.te";
describe("URL extraction", () => {
  it("Extracts url from message", () => {
    expect(getURL(mockURL)).toMatch(detectedMockURL);
  });

  it("Returns an empty string if there is no URL", () => {
    expect(getURL("")).toBe("");
  });

  it("Returns the first URL if two are supplied", () => {
    expect(getURL(mockURLs)).toBe(detectedMockURL);
  });
});

describe("URL validation", () => {
  it("Returns true if a URL is valid", () => {
    const validURLs = [
      "https://melted-chocola.te",
      "www.google.com",
      "http://theverge.com",
    ];
    validURLs.forEach((validURL) => expect(isValidURL(validURL)).toBe(true));
  });

  it("Returns false if a URL is invalid", () => {
    const invalidURLs = [
      "https:///melted-chocola.",
      "!google;com",
      "http:/theverge.m",
    ];
    invalidURLs.forEach((invalidURL) =>
      expect(isValidURL(invalidURL)).toBeFalsy()
    );
  });
});
