/**
 * This script auto-creates some of the data needed to test out the application
 * @param app
 */
module.exports = function (app) {
    app.datasources.mydb.automigrate('property', function (err) {
        if (err) throw err;

        /**
         * Create houses
         * @type {*[]}
         */

        var properties = [
            {
                address    : "High str.",
                postcode   : "asdad",
                city       : "New York",
                province   : "NY",
                country    : "USA",
                archived_at: new Date()
            },
            {
                address    : "Low str.",
                postcode   : "adsas",
                city       : "New York",
                province   : "NY",
                country    : "USA",
                archived_at: new Date()
            }
        ];

        properties.forEach(function (property) {
            app.models.Property.create(property, function (err, model) {
                if (err) throw err;

                console.log('Created:', model);
            });
        });
    });
};
