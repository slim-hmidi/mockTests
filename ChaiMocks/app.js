const express = require('express');
const { isValid } = require('./utils/index');

const config = require('./config.json')[process.env.NODE_ENV || 'development']


const app = express();

app.get('/', (req, res)=> {


    const url = config.url;
   try {
    const validUrl = isValid(url)
    .then(() => {
        return res.redirect(`https://${url}`);
    })
    .catch(() => {
        return res.status(400).send('Unable to redirect to the given url');
    })
   } catch(error) {
      return res.send('Internal Server Error') 
   }




})

const port = process.env.port || 3000;

const server = app.listen(port, ()=> {
    console.log('server listens on 127.0.0.1:3000');
})

module.exports = {server, app};