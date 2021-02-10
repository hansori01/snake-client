const stdin = process.stdin;
const setupInput = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  // handleUserInput();
  return stdin;
};
const handleUserInput = stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w'){
    console.log('up')
  };
  if (key === 's'){
    console.log('down')
  };
  if (key === 'a'){
    console.log('left')
  };
  if (key === 'd'){
    console.log('right')
  };

});




module.exports = {setupInput};