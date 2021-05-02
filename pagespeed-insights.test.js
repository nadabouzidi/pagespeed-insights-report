const {
  formatReportData,
  parseForReleventData,
} = require("./pagespeed-insights");
const {
  fakeDesktopLighthouseData,
  fakeMobileLighthouseData,
  strategies,
} = require("./testData");

const fakeReportData = fakeDesktopLighthouseData;
const mockURL = "https://www.theverge.com";
const extractedFakeReportData = {
  performance: 0.61,
  cumulativeLayoutShift: "0.113",
  firstMeaningfulPaint: "1.0 s",
  largestContentfulPaint: "2.3 s",
  speedIndex: "2.8 s",
  resourceSummary: "411 requests • 3,865 KiB",
};
const fakeFormattedReport = `
 URL: ${mockURL}
 Strategy:                    ${strategies.DESKTOP}
 Performance:                 ${extractedFakeReportData.performance}
 Cumulative Layout Shift      ${extractedFakeReportData.cumulativeLayoutShift}
 First Contentful Paint       ${extractedFakeReportData.firstMeaningfulPaint}
 Largest Contentful Paint     ${extractedFakeReportData.largestContentfulPaint}
 Speed Index                  ${extractedFakeReportData.speedIndex}
 Resource Summary             ${extractedFakeReportData.resourceSummary}
`;
describe("Data report formatting", () => {
  it("Returns a formatted Report", () => {
    expect(
      formatReportData(extractedFakeReportData, mockURL, strategies.DESKTOP)
    ).toBe(fakeFormattedReport);
  });
});

describe("Data extraction", () => {
  it("Extracts relevant report data", () => {
    expect(parseForReleventData(fakeReportData)).toStrictEqual(
      extractedFakeReportData
    );
  });
});
