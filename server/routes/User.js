const express = require('express');
const router = express.Router();

const cors =  require ('cors');

const db  = require('../config/db');
const mysql = require("mysql2");

// express.use(cors());
// express.use(express.json());
// express.use(bodyParser.urlencoded({ extended: true }));


router.post("/responses",(req,res)=> {
    const aqi = req.body.aqi;
    const no2 = req.body.no2;
    const o3 = req.body.o3;
    const so2 = req.body.so2;
  
    const sqlUpload =
    "INSERT INTO responses(aqi, no2, o3, so2) VALUES (?,?,?,?)";
  
    db.query(sqlUpload,
      [aqi, no2, o3, so2],
      (err, results)=>{
        console.log(err);
        res.send(results);
      }
    );
    
  });



module.exports = router;