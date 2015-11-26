module.exports = function(app) {
    /**
     * This script autocreates some of the data needed to test out the application
     */
    app.datasources.mydb.automigrate('property', function(err) {
        if (err) throw err;

        /**
         * Create houses
         * @type {*[]}
         */
        var properties = [
            {
                address: 'john.doe@ibm.com'
            },
            {
                address: 'jane.doe@ibm.com'
            }
        ];

        properties.forEach(function(property) {
            app.models.Property.create(property, function(err, model) {
                if (err) throw err;

                console.log('Created:', model);
            });
        });
    });
};
