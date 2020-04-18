require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const cors = require('cors');


/*
    Config
*/

const server = express();
const port = process.env.PORT;

class ServerClass {
    init(){
        server.use(cors());
        // View engine configuration
        server.engine('html', require('ejs').renderFile);
        server.set('view engine', 'html');

        console.log(path.join(__dirname, 'dist'))
        // Static path configuration
        server.set( 'views', path.join(__dirname, 'dist') );
        server.use( express.static(path.join(__dirname, 'dist')));

        //=> Body-parser
            // pas plus de 10mb en json dans le body
        server.use(bodyParser.json({limit: '10mb'}));
            // pour avoir un beau rendu de l'objet json
        server.use(bodyParser.urlencoded({ extended: true }));

        // Routes server
        this.serverRoutes();
    }

    serverRoutes(){
        // Index
        server.get('/*', (req, res) => {
            res.render('index'); 
        })

        // Start server
        this.launch();
    }

    launch(){
        server.listen(port, () => console.log(`Server is running on port http://localhost:${port}/`))
    };
}

/*
Start server
*/
new ServerClass().init();