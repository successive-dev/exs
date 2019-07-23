const fs = require('fs');
const path = require('path');

function readFile(fileName) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, fileName), 'utf8'));
}

function retrieveSecret(obj) {
  const { stringData: { secrets } } = obj;
  return secrets;
}
function extractor(fileName, outFileName) {
  const file = readFile(fileName);
  const secrets = retrieveSecret(file);
  fs.writeFileSync(path.resolve(__dirname, outFileName), secrets);
}

module.exports = extractor;


