var express = require('express');
var app = express();
var request = require('request');
app.get('/getdata/:food_name', function (req, res) {
    var result={
        'food_details': [],
    };

    request('https://api.nutritionix.com/v1_1/search/'+req.params.food_name+'?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=83ba9cee&appKey=bcfe1b582101919c0b9323b94bedb70c', function (error,response,body) {
        if (error) {
            return console.log('Error:', error);
        }

        if (response.statusCode !== 200) {
            return console.log('Invalid Status Code Returned:', response.statusCode);//AIzaSyCiEAghxNPBCezObULXyrAr9wITclR0Ajc
        }
        body = JSON.parse(body);
        var food_values = body.hits;

        request('https://kgsearch.googleapis.com/v1/entities:search?query='+req.params.food_name+'&key=AIzaSyCiEAghxNPBCezObULXyrAr9wITclR0Ajc&limit=1&indent=True', function (error,response,body1) {
            if (error) {
                return console.log('Error:', error);
            }

            if (response.statusCode !== 200) {
                return console.log('Invalid Status Code Returned:', response.statusCode);
            }
            body1 = JSON.parse(body1);
            var fooddescription = body1.itemListElement[0].result;
            result.food_details.push({"food_detail": fooddescription,"food_nutrition":food_values});

            res.contentType('application/json');
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.write(JSON.stringify(result));
            res.end();
        });
    });
    console.log(result);
});


var server = app.listen(8081,"localhost", function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server Running at http://%s:%s", host, port)
});