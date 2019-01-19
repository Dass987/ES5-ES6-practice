const { taskOne, taskTwo } = require('./tasks');

async function main() {

  try {

    console.log('\n\n');
    console.time('Measuring time');

    const valueOne = await taskOne();
    const valueTwo = await taskTwo();

    console.timeEnd('Measuring time');

    console.log('\nTask one returns: ', valueOne);
    console.log('Task two returns: ', valueTwo + '\n');

  } catch (e) {
    console.log(e);
  }

}

main();
