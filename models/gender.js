module.exports = (sequelize , type)=>{
    return sequelize.define('gender',{
        id:{
            type : type.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : type.STRING,
        imagen : type.STRING
        

    })
};