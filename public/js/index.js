var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  // console.log(message.from);
  // console.log(message.text);
  // //   document.getElementsByTagName('p')[0].innerText = message.text;
  // document.getElementById('div2').innerHTML =
  //   `<p>from:${message.from} text:${message.text}</p>` +
  //   document.getElementById('div2').innerHTML;
});
