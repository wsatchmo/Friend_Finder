var path = require("path"); //path dependency [NEED THIS???]

var friendList = require("../data/friends.js"); //friends list dependency

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friendList); //list of friend entries
    });

    app.post("/api/friends", function(req, res){
        var input = req.body; //user input
        // console.log("Input: ");
        // console.log(JSON.stringify(input));

        var survey = input.scores;
        //console.log(survey);

        var match;
        var matchImg;
        var scoresArr = [];

        for (var i = 0; i<friendList.length; i++){
            var diffInstance = 0;
            for (var j = 0; j < survey.length; j++){
                diffInstance += Math.abs(friendList[i].scores[j] - survey[j]);
                scoresArr.push(diffInstance);
            }
        
            var min = Math.min(...scoresArr); //find lowest number in scoresArr -- the match
            console.log(scoresArr, "Minimum Difference: ", min)
      
            if (scoresArr[i] === min){ //THIS MAY BE COMPLETELY WRONG, NOT SURE
                match = friendList[i].name;
                matchImg = friendList[i].photo; //★★★★★★★★★
                console.log("match: ", match);
                console.log("matchImg: ", matchImg);
                return match, matchImg;
            }
        }

        friendList.push(input);//adds user input to list
        console.log("friendList: " + friendList);
        res.json({status: "OK", match: match, matchImg: matchImg});
    })
}