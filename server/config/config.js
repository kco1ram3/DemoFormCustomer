var config = {
    database: {
        connectionString: "mongodb://localhost:27017/test",
        databaseName: "test"
    },
    debug: {
        database: {
            connectionString: "mongodb://localhost:27017/test-dev",
            databaseName: "test-dev"
        }
    }
};

module.exports = config;