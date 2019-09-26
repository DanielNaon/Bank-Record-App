const express  = require('express')
const router = express.Router()
const Transaction = require('../model/transactionSchema')

router.get('/transcations',(req, res)=>{
    Transaction.find({}, function(err, response){
        console.log(response)
        res.send(response)
    })
})
router.post('/transcations', (req, res)=>{
    const newMoneySpend =new Transaction (req.body)
    console.log(req.body)
    newMoneySpend.save()
    res.send()
    
})


module.exports = router