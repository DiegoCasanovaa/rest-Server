const { response } = require('express')
 
 const userGet = (req, res = response) =>{ 

    const { q, nombre, apikey} = req.query;
     
                    res.json({
                    
                    msg: "put API desde el controlador",
                    q,
                    nombre,
                    apikey

                })

}
 const userPost = (req, res = response) =>{ 

        const { nombre, edad } = req.body;
     
                    res.json({
                    
                    msg: "Post API desde el controlador",
                    nombre,
                    edad

                })

}
 const userPut = (req, res = response) =>{ 

    const { id } = req.params.id;

                    res.json({
                    
                    msg: "Put API desde el controlador",
                    id

                })

}
 const userDelete = (req, res = response) =>{ 
     
                    res.json({
                    
                    msg: "Delete API desde el controlador"

                })

}
 const userPatch = (req, res = response) =>{ 
     
                    res.json({
                    
                    msg: "Patch API desde el controlador"

                })

}

module.exports = {

    userGet,
    userPost,
    userDelete,
    userPatch,
    userPut

}