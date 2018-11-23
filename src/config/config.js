module.exports = {
    developtment: {
        host:'localhost',
        port: '', 
        name:'spolier', 
        dialect: 'mssql', 
        user: '', 
        password:''
    },
    production:{
        database:{
            host: process.env.DB_HOST, 
            port: process.env.DB_PORT 
        }
    }
}