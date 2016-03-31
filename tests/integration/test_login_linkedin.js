var system = require('system');
var host = "http://localhost:7500";

casper.test.begin('Lastuser redirects to correct LinkedIn login page', 3, function (test){
    casper.start(host, function() {
        this.echo("Check for running server");
        test.assertHttpStatus(200, '200 OK');
    });

    login_url = host+"/login/linkedin";
    casper.thenOpen(login_url, function() {
        this.echo("Hit login endpoint");
        test.assertHttpStatus(200, "200 OK");
        this.echo("Check if redirected URL leads to LinkedIn");
        test.assertUrlMatch(/linkedin.com\/uas\/oauth2\/authorization\?/, 'Redirected to LinkedIn login successfully');
    });

    casper.run(function(){
        test.done();
    });
});
