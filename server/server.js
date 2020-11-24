const express = require('express');
const app=express();
const bodyParser=require('body-parser');

//========================================================================================
//* MIDLEWARES */
//========================================================================================


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

//========= API SERVICES =================================================================
//PAYLOAD: The Payload of an API Module is the body of your request and response message. 
//It contains the data that you send to the server when you make an API request. 
//You can send and receive Payload in different formats, for instance JSON.
//========================================================================================


// get data from server
app.get('/usuario', (req,res)=>{
    
    res.json('hello get usuario')
});

// create a new record on db for example
app.post('/usuario', (req,res)=>{
    
    let body=req.body;
    if ( body.name === undefined ){
        res.status(400);
        res.json({
            ok: false,
            message:'name field is missing'
        })
    } else {
        res.status(200);
        res.json({body});
    }
 
});


// id of the usre required
app.put('/usuario/:id', (req,res)=>{
    
    let id=req.params.id;
    let url=req.url;

    res.json({
        id,
        url
    });
    res.status(200);
   
});



app.delete('/usuario', (req,res)=>{
    
    res.status(200);
    res.send('hello delete');
   
});



app.listen(3000, ()=>{
    console.log('escuchando en el puerto 3000');
});
