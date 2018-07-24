const express = require('express');
const app = express();
const mocks = require('./mocks');

app.use(express.json());

const register = (method, list) => {
  let mock = undefined;
  if (Object.keys(list).length > 0){
    for (let url in list) {
      app[method.toLowerCase()](url, list[url]);
    }
  }
}

const iterate = (list) => {
  let mock = undefined;
  if (Object.keys(list).length > 0){
    for (let method in list) {
      register(method, list[method]);
    }
  }
}

let mock = undefined;
if (Object.keys(mocks).length > 0){
  for (let key in mocks) {
    iterate(mocks[key]);
  }
}

app.listen(3000, () => console.log('Listening on port 3000!'));
