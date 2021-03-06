const express = require('express');
const next = require('next');


const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});

const handle = app.getRequestHandler();

app.prepare()
.then(() => {
    const server = express();

    server.get('/user/:name',(req,res) => {
        app.render(req,res,'/user', {name : req.params.name} )
    });

    server.get('/placeholder/:id',(req,res) => {
        app.render(req,res,'/placeholder/Todo',{id : req.params.id})
    });


    server.get('*',(req,res) => {
        return handle(req,res)
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log(" Ready on https://localhost:3000");
    })
})
.catch(ex => {
    console.error(ex.stack);
    process.exit(1)
});
