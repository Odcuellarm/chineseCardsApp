const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db'); //pool allows to write queries for postgres
const bodyParser = require('body-parser');

//middleware
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());


app.get("/cards", async (req, res) => {
    try {
      const id = [1, 2];
      //loop through the elements in the array
      id.forEach(()=>{
        const allcards = await pool.query("SELECT * FROM chinese_chars WHERE char_id = $1", [id]);
        console.log(allcards);
        res.json(allcards.rows); //What does this do exactly???
      })
    } catch (err) {
      console.error(err.message);
    }
});


//The only way to get data fromt he client, is to get it from the request.body object
app.use(express.json()); //This line gives access to request.body

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});