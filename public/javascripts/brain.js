
var express = require("express");
var app = express();
var request = require("request");
var bodyparser = require("body-parser");
var digibyte = require("digibyte");

app.use(express.static('public'));

app.use(bodyparser.urlencoded({
  extended: true
}));
app.use(bodyparser.json());

app.set("view engine", "ejs");

function brainWallet(uinput, callback){
  var input = new Buffer(uinput);
  var hash = digibyte.crypto.Hash.sha256(input);
  var bn = digibyte.crypto.BN.fromBuffer(hash);
  var pk = new digibyte.PrivateKey(bn).toWIF();
  var addr = new digibyte.PrivateKey(bn).toAddress();
  callback(pk, addr);
};


var request = require("request");

function getBalance(x){
    request({
        url: "https://digiexplorer.info/api/addr/DNrZoSQcFz9BpWVxP4EbDVQTYjCoSFVhdJ?format=json",
        json: true
    }, function(err, res, body){
        var balance = body.balance;
        var addrStr = body.addrStr;
        x(balance, addrStr);
    });
};

function hello(){
    console.log("test");
    
};


getBalance(function(balance, addrStr){
    console.log(balance);
    console.log(addrStr);
    hello();
});


request({
  url: "https://chainz.cryptoid.info/dgb/api.dws?q=getbalance&a=DNrZoSQcFz9BpWVxP4EbDVQTYjCoSFVhdJ&key=6b8e675d5b26&n=4600",
  json: true
}, function(err,res,body){
  getbalance = "DNrZoSQcFz9BpWVxP4EbDVQTYjCoSFVhdJ:" +  body 
  
});

app.get("/", function(req, res){
  res.render("index.ejs", {
    getbalance: getbalance
  });
});


app.post("/wallet-addr", function(req, res, body){
  var brainsrc = req.body.brainsrc;
  console.log(brainsrc);
  brainWallet(brainsrc, function(priv, addr){
    res.send("Digibyte brain wallet of: " + brainsrc + "<br>Address:"
    + addr + "<br>PrivateKey: " + priv);
  });
});




app.listen(80, function(){
    console.log("Up and running");
});
