var mongoose = require('mongoose');
const StockSchema = mongoose.Schema({
    Name:{
        type: String,
        require:true
    },
    Symbol:{
        type: String,
        require:true
    },
    LastPrice:{
        type:String,
        require:true
    },
    Tag:{
        type:String,
        require:true
    },
    Cap:{
        type:String,
        require:true
    }
})

module.exports = mongoose.model('StockSchema', StockSchema)