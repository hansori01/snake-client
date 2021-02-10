const stdin = process.stdin;
//stores the active TCP connect object.
let connection;
const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w'){
  connection.write('Move: up');
};
  if (key === 's'){
    connection.write('Move: down');
  };
  if (key === 'a'){
    connection.write('Move: left');
  };
  if (key === 'd'){
    connection.write('Move: right');
  };
  if (key === 'm'){
    connection.write('Say: is this plane?');
  };
};




module.exports = {setupInput};