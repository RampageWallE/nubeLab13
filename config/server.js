require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes'); 
const fileUploader = require('express-fileupload');

class Server {
    constructor(){
        this.app = express();
        this.port = 3000;

        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.app.set('view engine', 'ejs')
        this.app.use(express.json());
        this.app.use(express.static('public'))
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(fileUploader({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            debug: true
        }))
    }
    routes(){
        this.app.use('/', routes)
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('THe server is ready to use')
        })
    }
}

module.exports = Server