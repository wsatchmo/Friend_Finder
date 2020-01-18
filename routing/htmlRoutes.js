var path = require("path"); //path dependency

module.exports = function(app){
    app.get('/', function(res){ //homepage
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(res){ //survey
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
};