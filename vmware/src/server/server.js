var express = require('express');

var app = express();

var cors = require('cors');


var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));

var mongoose=require('mongoose');

//MongoDB Connection String
mongoConnectionString = 'mongodb+srv://dbUser:dbUserPassword@cluster0-gcjjd.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoConnectionString, {useNewUrlParser: true, useUnifiedTopology: true});

//BooksSchema Import
const StockSchema = require('../models/stockSchema');

//Default API
app.get('/',(req,res)=>{
    res.status(200).send('Hi Welcome to Application Backend')
})

// Post Data Into Schema
app.post("/submitData",(req,res)=>{
    const data = new StockSchema({
        _id: new mongoose.Types.ObjectId(),
        Symbol : req.body.symbol,
        Tag : req.body.tag,
        Cap : req.body.cap,
        LastPrice : req.body.last_price,
        Name : req.body.name,
      });
      data
        .save()
        .then(resul => {
          res.send({
            code: 200,
            success: "Data Inserted sucessfully"
          });
        })
        .catch(err => {
        });
});


//Get Data
app.get('/viewStocks', async(req, res) => {
  if(req.query.filterVariable==="All"){
    var records = await StockSchema.find();
    res.send(records);
    }
    if (req.query.filterVariable){
      var filterVariable = req.query.filterVariable;
      var query = {Tag:filterVariable}
      var records = await StockSchema.find(query);
      res.send(records);
    }
   
    else{
      var records = await StockSchema.find();
      res.send(records);
    }
})

//Get More Data
app.get('/viewMoreData', async(req, res) => {
    var key = req.query.key;
    var query={Symbol:key};
    let records = await StockSchema.find(query);
    res.send(records);
})

//Server Running Port
app.listen(3001);
console.log("Server running 3001");
module.exports = app;