import fs from 'fs';

import fetch from 'node-fetch';

const filename = 'src/_generated.ts';
const fileUrl = 'http://0.0.0.0:8000/generated';

export const getTypes = () => {
  fetch(fileUrl, { method: 'GET' })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.body;
    })
    .then((body) => {
      const writer = fs.createWriteStream(filename);
      body.pipe(writer);

      writer.on('finish', () => {
        fs.readFile(filename, function (err, data) {
          if (err) {
            throw err;
          }
          const theFile = data.toString().split('\n');
          theFile.splice(5, 68);
          fs.writeFile(filename, theFile.join('\n'), function (err) {
            if (err) {
              return console.log(err);
            }
          });
        });

        console.log(
          '\x1b[32m%s\x1b[0m',
          'The _generated file has been successfully saved'
        );
      });
    })
    .catch((error) => {
      // throw new Error('Error when receiving the response: ', error);
    });
};
