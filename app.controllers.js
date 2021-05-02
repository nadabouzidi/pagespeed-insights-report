const { WebClient } = require("@slack/web-api");
const postBotMessage = require("./bot.service");

module.exports.getHello = (req, res) => {
  console.log("HELLO FROM PAGESPEED INSIGHTS REPORT");
  res.sendStatus(200);
};

module.exports.getPSIReport = async (req, res) => {
  const web = new WebClient(process.env.SLACK_TOKEN);
  const options = req.body.text.split(" ");
  const url = getUrl(options[0]);
  await postBotMessage(
    web,
    "Your insights report is getting prepared...",
    req.body.channel_id
  );
  const results = await getSpeedReports(url);
  results.forEach(async (report) => {
    await postBotMessage(web, report, req.body.channel_id);
  });
  return res.sendStatus(200);
};
