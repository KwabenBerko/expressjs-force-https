# expressjs-force-https
A simple express.js middleware that redirects incoming unencrypted HTTP requests to HTTPS.

## Installation

``` javascript
npm install expressjs-force-https
```

## Usage
``` javascript
const express = require("express");
const forcehttps = require("expressjs-force-https");
const app = express();

//Redirecting incoming unencrypted http requests
app.use(forcehttps);

app.listen(3000, () => {
    console.log(`Server Running...`);
});
```
