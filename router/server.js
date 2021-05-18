const http = require('http');
const url = require('url');

module.exports = function(app)
{

    //메인
    app.use('/ideation/',function(req,res){
        res.render('main.html');
    });
        

}

