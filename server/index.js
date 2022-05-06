const express = require('express');
const app = express();

const cors = require('cors');

const db  = require('./config/db');


app.use(cors());
app.use(express.json());
//express.use(bodyParser.urlencoded({ extended: true }));

app.post("/responses",(req,res)=> {
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


app.listen(3008, (req, res) => {
    console.log("Server running...3008");
  });
  