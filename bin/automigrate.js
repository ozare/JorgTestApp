/**
 * This script autocreates some of the data needed to test out the application
 */
var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mydb;
ds.automigrate('property', function(err) {
    if (err) throw err;

    var properties = [
        {
            address: 'john.doe@ibm.com'
        },
        {
            address: 'jane.doe@ibm.com'
        }
    ];
    var count = properties.length;
    properties.forEach(function(property) {
        app.models.Property.create(property, function(err, model) {
            if (err) throw err;

            console.log('Created:', model);

            count--;
            if (count === 0)
                ds.disconnect();
        });
    });
});