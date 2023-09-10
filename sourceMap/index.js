const { SourceMapConsumer } = require('source-map');

const rawSourceMap = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourceRoot: 'http://example.com/www/js/',
  mappings:
    'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA',
};

async function main() {
  const whatever = await SourceMapConsumer.with(rawSourceMap, null, (consumer) => {
    // console.log(
    //   consumer.originalPositionFor({
    //     line: 2,
    //     column: 28,
    //   })
    // );
    // { source: 'http://example.com/www/js/two.js', line: 2, column: 10, name: 'n' }

    // console.log(
    //   consumer.generatedPositionFor({
    //     source: 'http://example.com/www/js/two.js',
    //     line: 2,
    //     column: 10,
    //   })
    // );
    // { line: 2, column: 28 }

    consumer.eachMapping(function (m) {
      // This function will be called for each mapping in the source map.
      // You can perform actions on each mapping here.
      console.log(m);
    });

    return computeWhatever(); // Replace this with your actual computation logic
  });

  // Replace the following line with your desired logic
//   console.log('Computed Whatever:', whatever);
}

async function computeWhatever() {
  // Replace this function with your actual computation logic
  return 'Computed Data';
}

main()

