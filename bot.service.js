/**
 *
 * @param {string} web
 * @param {string} text
 * @param {string} channel
 */
const postBotMessage = async (web, text, channel) => {
  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({ channel, text });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
  console.log("Message posted!");
};

module.exports = postBotMessage;
