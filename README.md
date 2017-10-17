# expressjs-force-https
A simple express.js that redirects incoming unencrypted HTTP requests to HTTPS

## Installation

``` javascript
npm install openweathermap-node
```

## Usage
``` javascript
const express = require("express");
const forcehttps = require("expressjs-force-https");
const app = express();

app.use(forcehttps);

app.listen(3000, () => {
    console.log(`Server Running...`);
});
```
