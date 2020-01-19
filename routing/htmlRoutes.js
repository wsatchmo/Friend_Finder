var path = require("path"); //path dependency

module.exports = function(app){
    app.get('/', function(req, res){ //homepage
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function(req, res){ //survey page
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    });
};