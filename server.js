const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 80;
const app = express();
app.use(favicon(__dirname + '/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port);