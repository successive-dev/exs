#!/usr/bin/env node

const program = require('commander');
const extractor = require('./extractor');
let prompt = require('co-prompt');

var stdin = '';


program
  .version('1.0.1')
  .description('Extract secrets JSON file');

program
  .arguments('<outputfile>')
  .option('-f, --inputfile <inputfile>', 'The input json secret file')
  .description('Extract secrets')
  .action((outFileName) => {
    // extractor(fileName, outFileName);
    let { inputfile } = program;
    if (stdin) {
      inputfile = stdin;
    }
    // console.log(inputfile, outFileName);
    extractor(inputfile, outFileName);
  });

if (process.stdin.isTTY) {
  program.parse(process.argv);
}
else {
  process.stdin.on('readable', function () {
    // console.log(this.read());
    var chunk = this.read();
    if (chunk !== null) {
      stdin += chunk;
    }
  });
  process.stdin.on('end', function () {
    program.parse(process.argv);
  });
}
