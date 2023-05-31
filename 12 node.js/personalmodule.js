function getUser(username) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting;
  
    if (currentHour < 12) {
      greeting = 'Доброго ранку';
    } else if (currentHour < 18) {
      greeting = 'Доброго дня';
    } else if (currentHour < 22) {
      greeting = 'Доброго вечора';
    } else if (currentHour < 5) {
        greeting = 'Доброї ночі';
    }
  
    const message = `${greeting}, ${username}!`;
  
    return message;
  }
  
  module.exports = {
    getUser: getUser
  };

  // Node.js сервер, який з використанням функціоналу розробленого модуля повертає наступну сторінку

  const http = require('http');
  const personalmodule = require('./personalmodule');
  
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    const username = 'user'; 
  
    const greeting = personalmodule.getUser(username);
  
    const responseHTML = `
      <h1>Greeting</h1>
      <p>${greeting}</p>
    `;
  
    res.end(responseHTML);
  });
  
  server.listen(5000, () => {
    console.log('Server is running...');
  });
  