const { taskOne, taskTwo } = require('./tasks');

async function main() {

  try {

    console.log('\n\n');
    console.time('Measuring time');

    const results = await Promise.all([
      taskOne(),
      taskTwo()
    ]);

    console.timeEnd('Measuring time');

    console.log('\nTask one returns: ', results[0]);
    console.log('Task two returns: ', results[1] + '\n');

  } catch (e) {
    console.log(e);
  }

}

main();
