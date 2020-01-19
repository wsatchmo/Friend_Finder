var friendList = require("../data/friends.js"); //friends list dependency

module.exports = function(app){
    app.get("/api/friends", function(req, res) { //get the friends api
        res.json(friendList); //list of friend entries
        console.log("friendList: ", friendList)
    });

    app.post("/api/friends", function(req, res){ //post the friends api
        var input = req.body; //user input
        // console.log("Input: ");
        // console.log(JSON.stringify(input));

        var survey = input.scores; 
        //console.log(survey);

        var match;
        var matchImg;
        var scoresArr = [];

        for (var i = 0; i<friendList.length; i++){ //loop through items in friendslist --
            var diffInstance = 0;
            for (var j = 0; j < survey.length; j++){ //loop through user answers
                diffInstance += Math.abs(friendList[i].scores[j] - survey[j]); //subtract user answers from friendlist answers --
            };
            scoresArr.push(diffInstance); //converting them to absolute. push these to the acores array
        
            var min = Math.min(...scoresArr); //find lowest number in scoresArr -- the match
            console.log("scoresArr: ", scoresArr);
            console.log("Minimum Difference: ", min);
        
            if (scoresArr[i] === min){ //while looping, if you find the same score of min...
                match = friendList[i].name; //use the associated user information for the modal
                matchImg = friendList[i].photo; //★★★★★★★★★
                //console.log("match: ", match);
                //console.log("matchImg: ", matchImg);
                //post match & match image to modal -- this occurs in app.js
            }
        }        

        friendList.push(input); //adds user input to list
        console.log("friendList: ", friendList);
        res.json({status: "OK", match: match, matchImg: matchImg});
    })
}