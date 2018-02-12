var request = require("request");

function getBalance(x){
    request({
        url: "https://digiexplorer.info/api/addr/DNrZoSQcFz9BpWVxP4EbDVQTYjCoSFVhdJ?format=json",
        json: true
    }, function(err, res, body){
        var txApperances = body.txApperances;
        var addrStr = body.addrStr;
        x(txApperances, addrStr);
    });
};

function hello(){
    console.log("test");
};

getBalance(function(txApperances, addrStr){
    console.log(txApperances);
    console.log(addrStr);
    hello();
});
