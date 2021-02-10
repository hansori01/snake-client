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
  return conn;
}

module.exports = {connect};