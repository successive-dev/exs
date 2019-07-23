#!/usr/bin/env node

const program = require('commander');
const extractor = require('./extractor');

program
  .version('1.0.1')
  .description('Extract secrets JSON file');

program
  .command('extract <fileName> <outFileName>')
  .alias('e')
  .description('Extract secrets')
  .action((fileName, outFileName) => {
    extractor(fileName, outFileName);
  });

program.parse(process.argv);
