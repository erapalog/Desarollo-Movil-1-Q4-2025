const {Sequelize}= require('sequelize')

const sequelize= new Sequelize(
    'universidad',
    'admin123',
    'admin123',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
        .then(()=> console.log('conexion establecida'))
        .catch((error)=> console.log('ocurrio un error'));

module.exports=sequelize;