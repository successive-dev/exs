const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

function readFile(fileName) {
  return JSON.parse(fs.readFileSync(path.resolve(fileName), 'utf8'));
}

function retrieveSecret(obj) {
  const { stringData: { secrets } } = obj;
  return secrets;
}
function extractor(fileName, outFileName) {
  let file = '';
  // if fileName is not a file but the whole file instead
  if (fileName.length <= 200) {
    file = readFile(fileName);
  } else {
    file = JSON.parse(fileName);
  }
  const secrets = retrieveSecret(file);
  try {
    var doc = yaml.safeLoad(secrets);
    // console.log(doc);
  } catch (e) {
    console.log(e);
  }
  const yamldoc = yaml.safeDump(doc, {
    'styles': {
      '!!null': 'canonical' // dump null as ~
    }
  });


  fs.writeFileSync(path.resolve(outFileName), yamldoc);
}

module.exports = extractor;


