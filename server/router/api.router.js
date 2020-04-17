const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');

class ApiRouterClass {
    constructor(){

    }

    routes(){
        router.get('/:endpoint', passport.authenticate('jwt', { session: false }), (req, res)=>{
            console.log('Secure route')
        })
    }

    init(){
        this.routes()
        return router
    }
}

module.exports = ApiRouterClass;