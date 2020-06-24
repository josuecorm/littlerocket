const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

// Serve js files
app.use('/js', express.static(path.join(__dirname, 'ui/js/')));
// Serve css files
app.use('/css', express.static(path.join(__dirname, 'ui/css/')));
app.use('/img', express.static(path.join(__dirname, 'ui/img/')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/ui/index.html'));
});

app.listen(port, () => console.log(`App running on port ${port}`));
