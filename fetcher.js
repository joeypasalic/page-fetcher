const axios = require('axios'); //did some googling and i found this, it's a better way to do things
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

axios.get(url, { responseType: 'arraybuffer' })
  .then(response => {
    const data = Buffer.from(response.data, 'binary');
    fs.writeFile(filePath, data, (err) => {

      if (err) {
        console.log('Error saving file:', err);
      } else {
        console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
      }
    });
  })
  .catch(error => {

    console.log('Error downloading file:', error);
  });



