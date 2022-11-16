const express = require('express') 
var cors = require('cors');
const { conecxionBaseDatos } = require('./db/db.config');

class Server{  
    
    constructor(){ 
        this.app= express(); 
        this.port= process.env.PORT;
        this.parquearPath= '/parquear'
        this.dbConection();
        this.middlewares();
        this.routes(); 
    }

    middlewares(){
        this.app.use(cors());
        this.app.use( express.json() );
    }

    async dbConection(){
        await conecxionBaseDatos()
    }

    routes(){

       this.app.use( this.parquearPath, require('./routers/parquear') );
    }

    listen(){ 
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo', this.port);
        
        })
    }
}

module.exports=Server;