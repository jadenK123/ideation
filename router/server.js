const http = require('http');
const url = require('url');

module.exports = function(app)
{

    //메인
    app.use('/ideation/IDEA01000S.dev',function(req,res){
        res.render('CM01000S.html');
    });
        

}

