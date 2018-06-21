const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mdAccess = require('./module-access.js');

app.listen(3000,"0.0.0.0", () => {
    console.log('listening at port 3000');
})

app.get("/", (req, res) => {
    res.send("Database sample application");
})

app.get('/api/flowerapplication', async (req, res) => {
    const result = await mdAccess.getFlowers();
    res.status(200).send(result);
})

app.get('/api/flowerapplication/:id', async (req, res) => {
    const id = req.params.id;
    const result = await mdAccess.getFlowerById(id);
    if (result) {
        res.status(200).send(result);
    } else {
        res.sendStatus(404);
    }
})

app.get('/api/flowerapplication', async (req,res)=>{
    const body = req.body;
    try{
    const result= await mdAccess.addFlower(body);
    res.status(201);
    }catch(error){
       res.status(500).send(error); 
    }
})