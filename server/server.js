require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const cors = require('cors');
const MongoDB = require('./services/db.service');
const strategy = require('./services/auth.service');
const passport = require('passport');

/*
    Config
*/

const server = express();
const port = process.env.PORT;

// authentification & cookies
server.use(cookieParser(process.env.JWT_SECRET));
strategy.authJWT(passport);

class ServerClass {
    init(){
        server.use(cors());
        // View engine configuration
        server.engine('html', require('ejs').renderFile);
        server.set('view engine', 'html');

        // Static path configuration
        server.set( 'views', path.join(path.resolve(__dirname, '..'), 'client','dist') );
        server.use( express.static(path.join(path.resolve(__dirname, '..'), 'client','dist')));

        //=> Body-parser
            // pas plus de 10mb en json dans le body
        server.use(bodyParser.json({limit: '10mb'}));
            // pour avoir un beau rendu de l'objet json
        server.use(bodyParser.urlencoded({ extended: true }));

        // Routes server
        this.serverRoutes();
    }

    serverRoutes(){
        // API
        const ApiRouterClass = require('./router/api.router');
        const AuthRouterClass = require('./router/auth.router');

        const ApiRouter = new ApiRouterClass();
        server.use('/api', ApiRouter.init());

        const AuthRouter = new AuthRouterClass();
        server.use('/api/auth', AuthRouter.init())
        
        // Index
        server.get('/*', (req, res) => {
            res.render('index'); 
        })

        // Start server
        this.launch();
    }

    launch(){
        MongoDB.initClient()
        .then(db => {
            server.listen(port, () => console.log(`Server is running on port http://localhost:${port}/`))
        })
        .catch(dberror => {
            console.log(dberror)
        })
    };
}

/*
Start server
*/
new ServerClass().init();