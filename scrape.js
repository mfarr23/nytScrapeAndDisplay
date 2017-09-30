var url = "https://www.nytimes.com/";

var casper = require('casper').create({
    viewportSize: {
    width: 1440,
    height: 775
    }
});
var x = require('casper').selectXPath;

function loadWebsite() {	// Loads Website	
	casper.start(url);
};

function scrape() {         // scrape website
    casper.then(function() {
        var headline = casper.getElementInfo("#pr24promo > a > h2").text.trim();
        casper.echo(headline);

        var summary = casper.getElementInfo("#pr24promo > a > p").text.trim();
        casper.echo(summary);

        var articleURL = casper.getElementAttribute("#pr24promo > a", "href");
        casper.echo(articleURL);

        var photo = casper.getElementAttribute("#pr24promo > a > div.pr24fadingSS > div > div > div:nth-child(5) > img", "src");
        casper.echo(photo);
    })    
};

// ------------------ALL FUNCTIONS BELOW------------------

// increases wait timeout to 60 seconds
casper.options.waitTimeout = 60000; 

loadWebsite();
scrape();

// disregard below. need casper.run to make everything work.
casper.run(function() {
	casper.echo("Done.").exit();
});