/**
 * This script auto-creates some of the data needed to test out the application
 * @param app
 */
module.exports = function (app) {
    /**
     * Auto-migrate properties (houses)
     */
    app.datasources.mydb.automigrate('property', function (err) {
        if (err) throw err;

        /**
         * Create houses
         * @type {Object}
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

    /**
     * Auto-migrate bookings
     */
    app.datasources.mydb.automigrate('booking', function (err) {
        if (err) throw err;

        /**
         * Create bookings
         * @type {Object}
         */
        var bookings = [
            {
                start: new Date(),
                end  : new Date(),
                //
                // FIX: Hardcoded
                //
                propertyId: 1
            },
            {
                start: new Date(),
                end  : new Date(),
                //
                // FIX: Hardcoded
                //
                propertyId: 2
            }
        ];

        bookings.forEach(function (booking) {
            app.models.Booking.create(booking, function (err, model) {
                if (err) throw err;

                console.log('Created:', model);
            });
        });
    });

    /**
     * Auto-migrate periods
     */
    app.datasources.mydb.automigrate('period', function (err) {
        if (err) throw err;

        /**
         * Create periods
         * @type {Object}
         */
        var periods = [
            {
                start: new Date(),
                end  : new Date(),
                type : "available",
                //
                // FIX: Hardcoded
                //
                propertyId: 2
            },
            {
                start: new Date(),
                end  : new Date(),
                type : "unavailable",
                //
                // FIX: Hardcoded
                //
                propertyId: 1
            }
        ];

        periods.forEach(function (period) {
            app.models.Period.create(period, function (err, model) {
                if (err) throw err;

                console.log('Created:', model);
            });
        });
    });
};
