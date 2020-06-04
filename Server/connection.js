const mysql=require("mysql");

var mysqlConncetion=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Priboj_98",
    database:"StudentskaSluzba",
    multipleStatements:true
    
}) 
mysqlConncetion.connect((err)=>{
    if(!err){
        console.log("connected") 
    }else{
       console.log(err)
    }
    //console.log(err);
})

module.exports=mysqlConncetion;
