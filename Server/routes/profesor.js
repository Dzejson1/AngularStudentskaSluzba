const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection");
var jwt = require('jsonwebtoken');


//nadji sve korisnike(samo admin)
router.get("/nadjiPredmetZaProfesora:idStudent", (req, res) => {

    //res.send(req.params.idProfesor);
   // mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        mysqlConnection.query("SELECT pr.* from Predmet pr inner join Ispit is on pr.idPredmet=is.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})

router.get("/dajPredmete:idProfesor", (req, res) => {

    //res.send(req.params.idProfesor);
   // 
        
    mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.idPredmet where p.idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})

router.get("/studenti:idPredmet", (req, res) => {

    //res.send(req.params.idProfesor);
   // 
        
    mysqlConnection.query("SELECT * from Student s inner join PredmetStudenta p on s.idStudent=p.idStudent where p.idPredmet=?",[req.params.idPredmet],(err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'muuuuuuuuuuuuuuuu', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})




router.post("/login", (req, res) => {

    //res.send(req.params.idProfesor);
   // mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        mysqlConnection.query("SELECT * from Student where username=? AND password=?",[req.body.username,req.body.password],(err, rows, fields) => {
        
            if (!err) {
                var i = 0;
                for (var m in rows) {
                    i++;
                }
                if (i == 1) {
    
                    res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', 
                     obj: rows[0] ,
                    token: jwt.sign({ user: req.body.password }, 'SECRET')});
    
    
    
                }
                else {
                    mysqlConnection.query("SELECT * from Profesor where username=? AND password=?",[req.body.username,req.body.password],(err, rows1, fields) => {
        
                        if (!err) {
                            var ii = 0;
                            for (var mm in rows1) {
                                ii++;
                            }
                            if (ii == 1) {
                
                                res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', 
                                obj: rows1[0] ,
                                token: jwt.sign({ user: req.body.password }, 'SECRET')});
                
                
                
                            }
                            else {
                                
            
            
            
            
            
                                
                
                            }
                
                         
                        }
            
            
            
                })






    
                }
    
             
            }



    })


})


router.post("/sacuvajIzabraniPredmet", (req, res) => {

    //res.send(req.params.idProfesor);
   // mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        mysqlConnection.query("Insert into PredmetStudenta set idStudent=?, idProfesor=?, idPredmet=?",[req.body.idStudent,req.body.idProfesor,req.body.idPredmet],(err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})



router.get("/vratiFinansije:idStudent", (req, res) => {

    //res.send(req.params.idProfesor);
   // mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        mysqlConnection.query("SELECT * from Finansije where idStudent=?",[req.params.idStudent],(err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'aaaaaaaaaaaaasdddddd', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})













router.get("/vratiPredmetProfesor:brojSemestra", (req, res) => {

    //res.send(req.params.idProfesor);
   // mysqlConnection.query("SELECT * from Predmet pr inner join Predaje p on pr.idPredmet=p.Predmet_idPredmet where p.Profesor_idProfesor=?",[req.params.idProfesor],(err, rows, fields) => {
        
        mysqlConnection.query("SELECT n.* from Profesor n inner join Predaje p on n.idProfesor = p.idProfesor inner join Predmet pr on pr.idPredmet = p.idPredmet where pr.brojSemestra=?",[req.params.brojSemestra],(err, rows, fields) => {
        
        if (!err) {
            var profesori=rows;
        
            mysqlConnection.query("SELECT pr.* from Profesor n inner join Predaje p on n.idProfesor = p.idProfesor inner join Predmet pr on pr.idPredmet = p.idPredmet where pr.brojSemestra=?",[req.params.brojSemestra],(err, rows, fields) => {
        
            if (!err) {
              
                res.status(201).json({ message: 'aaaaaaaaaaaaaaaaaaaa', obj: profesori,obj1:rows });

             //res.status(201).json({mark:'asdasdasdasd'});
            }
             else {
                 res.status(500).json({
                 title: 'Greska',
                    error: err
            });
        }
    })






            //res.status(201).json({ message: 'aaaaaaaaaaaaaaaaaaaa', obj: rows });

            //res.status(201).json({mark:'asdasdasdasd'});
        }
        else {
            res.status(500).json({
                title: 'Greska',
                error: err
            });
        }
    })


})


module.exports = router;
