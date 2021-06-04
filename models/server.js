const express = require('express');

const cors = require('cors')

class Server{ 

    constructor(){ 

        this.app = express();        
        this.port = process.env.PORT;
        this.usuerRoutePath = '/api/users';

        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }

    routes(){ 

        this.app.use( this.usuerRoutePath , require('../routes/user.routes'))

    }

    listen(){

        this.app.listen(this.port, () => { 
        console.log('Servidor corriendo en puerto:', this.port)
        });

    }

    middlewares(){
        
        // CORS
        this.app.use( cors() )

        
        // lectura y parseo del body
        this.app.use( express.json() );
        

        // Directorio publico
        this.app.use(express.static('public'));

    }

}

module.exports = Server;