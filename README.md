# expressjs-force-https
A simple express.js middleware that redirects incoming unencrypted HTTP requests to HTTPS.

## Installation

``` javascript
npm install expressjs-force-https
```

## Usage

``` javascript
const express = require("express");
const forceHTTPS = require("expressjs-force-https").forceHTTPS;
const app = express();

//Redirecting incoming unencrypted http requests
app.use(forceHTTPS);

app.listen(3000, () => {
    console.log(`Server Running...`);
});
```

### To force HTTPS on a Node App Service on Azure:
``` javascript
const forceAzureHTTPS = require("expressjs-force-https").forceAzureHTTPS;

app.use(forceAzureHTTPS);
```
