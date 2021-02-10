const net = require('net');
// establishes connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  //interpret incoming data as text
  conn.setEncoding('utf8');
  // message from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  conn.on('connect', () => {
    console.log('🐍 You are connected to the game server 🐍')
  })
  conn.on('connect', () => {
    conn.write('Name: HAN');
  });
// conn.on('connect', () => {
// //move commend upon connect
// });
  return conn;
}

module.exports = {connect};






//supported move commands
//sneks cannot instantly make a 180 turn
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)