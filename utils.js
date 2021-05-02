module.exports.isValidURL = (URL) => {
  if (!URL.length) return false;
  const matches = URL.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  console.log(matches);
  return matches && matches.length > 0;
};
module.exports.getURL = (text) => {
  const matches = text.match(/<(.*?)>/);
  console.log(matches);
  return matches && matches.length ? matches[0].slice(1, -1) : "";
};
