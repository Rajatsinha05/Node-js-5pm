const { Sequelize } = require("sequelize");

const db=new Sequelize("nodejs","root","Admin@123",{
    host:"localhost",
    dialect:"mysql",
    logging:false,
})
module.exports = db