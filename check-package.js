const fs = require('fs');
const path = './package.json';

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${path}:`, err);
    return;
  }
  try {
    JSON.parse(data);
    console.log(`${path} is valid JSON.`);
  } catch (parseErr) {
    console.error(`Error parsing ${path}:`, parseErr.message);
  }
});
