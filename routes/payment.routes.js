const express = require('express');

const Payments = require('../models/payment.js');

const payment = express.Router();


payment.get('/', async(req,res) => {
    try{
           const payments = await Payments.find()
           res.json(payments)
    }catch(err){
        res.send('Validation Failed ' + err)
    }
})

payment.post("/", async (req,res)=>{
    try {

            const registerEmployee = new Payments({
                country:req.body.country,
                name:req.body.name,
                detailadd:req.body.detailadd,
                number:req.body.number,
               
            });
            
            const registered = await registerEmployee.save()
            res.status(201).render("index");  
            console.log(registered)
    } catch (error) {
        res.status(400).send(error);
        
    }
});

module.exports = {payment}