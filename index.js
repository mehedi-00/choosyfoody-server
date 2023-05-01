const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello Server is Running' });
});


app.listen(port, () => {
    console.log(`Server is runnig port: ${port}`);
});