loadDigi();

   function loadDigi() {
        var url="https://api.coinmarketcap.com/v1/ticker/digibyte/";
        $.getJSON(url, function(data) {
            $('#getbalance').html(data[0].balance);
            $('#digipriceusd').html(data[0].price_usd);
            $('#marketcap').html(data[0].market_cap_usd);
            $('#supply').html(data[0].total_supply);   
            $('#percertchangeone').html(data[0].percent_change_1h);  
            $('#percertchangetwentyfour').html(data[0].percent_change_24h);
            $('#percertchangesevendays').html(data[0].percent_change_7d);    
        });
            setInterval("loadDigi()", 10000);
   }

       function getTotalPriceUSD() {
            var usd1 = parseFloat(document.getElementById('digipriceusd1').value);
            var totaldigis = parseFloat(document.getElementById('totaldigis').value);


            var total = usd1 * totaldigis;

            
            var display=document.getElementById('total');
            

            display.innerHTML= total;

        }