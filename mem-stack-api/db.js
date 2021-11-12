const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/postManagerDB',{useNewUrlParser: true},
err => {
    if(!err)
    console.log('MongoDB connection succès.')
    else
    console.log('Erreur de connection à  mongoDB : ', JSON.stringify(err.undifined, 2))
})