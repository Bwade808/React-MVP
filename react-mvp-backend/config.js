module.exports = {
    dev: {
        connectionString: 'postgres://postgres:postgrespw@localhost:49153/chorebank',
        port: '3010'
    },
    production: {
        connectionString: process.env.POSTGRES_CONNECTION_STRING + "?ssl=true",
        port: process.env.PORT
    }
}

