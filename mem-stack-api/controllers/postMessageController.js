const express = require('express')
var router  = express.Router()
var ObjectID = require('mongoose').Types.ObjectId

var {PostMessage } = require('../models/postMessage')

router.get('/',(req,res) => {
    PostMessage.find((err,docs)=>{
        if(!err) res.send(docs)
        else console.log(' Erreur de récupération des données : ', JSON.stringify(err,undefined,2))
    })
})

router.post('/',(req,res)=>{
    var newRecord = new  PostMessage({
        title: req.body.title,
        message: req.body.message
    })

    newRecord.save((err,docs)=>{
        if(!err) res.send(docs)
        else console.log(" Erreur lors d'énrégistrement : ", + JSON.stringify(err,undefined,2))
    })
})

router.put('/:id', (req,res)=>{
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('Aucun message ayant cet id :', + req.params.id)

        var updateRecord ={
            title: req.body.title,
            message: req.body.message
        }

    PostMessage.findByIdAndUpdate(req.params.id,{$set: updateRecord},{new:true}, (err,docs)=>{

        if(!err) res.send(docs)
        else console.log(' Erreur lors de la mise à jour : ',+ JSON.stringify(err,undefined,2))

    } )
})


router.delete('/:id',(req,res)=>{
    if (!ObjectID.isValid(req.params.id))
    return res.status(400).send('Aucun message ayant cet id:', + req.params.id)

    PostMessage.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err) res.send(docs)
        else console.log(' Erreur de suppression : ',+ JSON.stringify(err,undefined,2))

    })

})

module.exports = router