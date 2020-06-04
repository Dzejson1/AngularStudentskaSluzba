const express = require("express");
const router = express.Router();
const mysqlConnection = require("../connection")
var jwt = require('jsonwebtoken');

//nadji sve korisnike(samo admin)
router.get("/", (req, res) => {



    mysqlConnection.query("SELECT * from User", (err, rows, fields) => {
        
        if (!err) {

            res.status(201).json({ message: 'Success on finding all of the users', obj: rows });

        }
        else {
            res.status(500).json({
                title: 'An error occurred attempting find all of the users',
                error: err
            });
        }
    })


})
