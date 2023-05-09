const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize = new Sequelize("nodelearn", "student", "student123", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define('user',{
    username :{
        type :DataTypes.STRING,
        allowNull:false
    },
    age :{
        type :DataTypes.STRING,
        allowNull:false
    },
    marrid :{
        type :DataTypes.BOOLEAN,
        defaultValue: false
    },
})
const Comment = sequelize.define('comment',{
    userid :{
        type :DataTypes.INTEGER,
        allowNull:false
    },
    comment :{
        type :DataTypes.STRING,
        allowNull:false
    },
})
sequelize.sync({force:true})
.then((result)=>{ console.log("데이터베이스 생성됨"+result); })
.catch((e)=>{ console.log("데이터베이스 생성 실패"+e); })

module.exports = {User,Comment}