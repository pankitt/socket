export default function createConnection(url){
  return new WebSocket(`wss://www.favbet.com/${url}`);
}

// import io from 'socket.io-client';
//
// const socket = io('wss://www.favbet.com/bullet');
//
// socket.on('connect', function(){
//   console.log('connect');
//   return socket.send('Hi Server...');
// });
// socket.on('event', function(data){
//   return console.log('event', data);
// });
// socket.on('disconnect', function(){
//   return console.log('disconnect');
// });
//
// socket.connect();