const express = require('express');
const app = express();

const conversaoRoutes = require('./routes/conversaoRoutes');

app.use(express.json());
app.use('/api', conversaoRoutes);

if (process.env.NODE_ENV !== 'test') {
    app.listen(8080, () => {
        console.log('Rodando em http://localhost:8080');
    });
}

module.exports = app; 
