const psi = require("psi");
/**
 *
 * @param {string} URL The test URL
 * @param {string} strategy the strategy: desktop | mobile
 * @returns The PSI report
 */
module.exports.sendSpeedReportRequest = async (URL, strategy) => {
  try {
    const { data } = await psi(URL, { strategy });
    return data.lighthouseResult;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

/**
 *
 * @param {object} param0 The PS
 * @param {string} URL the test URL
 * @param {string} strategy the strategy: desktop | mobile
 * @returns
 */
module.exports.formatReportData = (
  {
    performance,
    cumulativeLayoutShift,
    firstMeaningfulPaint,
    largestContentfulPaint,
    speedIndex,
    resourceSummary,
  },
  URL,
  strategy
) => {
  if (!arguments.length || arguments.length < 3) return "";
  return `
 URL: ${URL}
 Strategy:                    ${strategy}
 Performance:                 ${performance}
 Cumulative Layout Shift      ${cumulativeLayoutShift}
 First Contentful Paint       ${firstMeaningfulPaint}
 Largest Contentful Paint     ${largestContentfulPaint}
 Speed Index                  ${speedIndex}
 Resource Summary             ${resourceSummary}
`;
};

module.exports.parseForReleventData = (data) => {
  return {
    performance: data.categories.performance.score,
    cumulativeLayoutShift: data.audits["cumulative-layout-shift"].displayValue,
    firstMeaningfulPaint: data.audits["first-meaningful-paint"].displayValue,
    largestContentfulPaint:
      data.audits["largest-contentful-paint"].displayValue,
    speedIndex: data.audits["speed-index"].displayValue,
    resourceSummary: data.audits["resource-summary"].displayValue,
  };
};

module.exports.getSpeedReports = async (url) => {
  const STRATEGIES = ["mobile", "desktop"];
  const res = await Promise.all(
    STRATEGIES.map((strategy) => this.sendSpeedReportRequest(url, strategy))
  );
  res.map((result) => this.parseForReleventData(result));
  return res;
};
