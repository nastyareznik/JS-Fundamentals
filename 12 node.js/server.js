const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60); 
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  fs.readFile('template.html', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading template file:', err);
      res.end('Server Error');
      return;
    }

    const responseHTML = data
      .replace('{{username}}', username)
      .replace('{{osType}}', osType)
      .replace('{{uptime}}', uptime)
      .replace('{{currentDir}}', currentDir)
      .replace('{{serverFileName}}', serverFileName);

    res.end(responseHTML);
  });
});

server.listen(5000, () => {
  console.log('Server is running...');
});


//

