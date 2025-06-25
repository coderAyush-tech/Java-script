const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter the number: ', n => {
  console.log(n);
  readline.close();
});

