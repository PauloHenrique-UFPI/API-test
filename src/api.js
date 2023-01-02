const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();



router.get('/info', (req, res) => {
    return res.json({
        'hello': 'hi!'
    });
});



app.use('/.netlify/functions/api',router);
module.exports=app;

module.exports.handler = serverless(app);