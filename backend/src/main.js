const cors = require("cors");
const express = require("express");
const app = express();
const selectQ = require("./selectData");
const insertQ = require("./insertData");

app.use(cors()); //allow cross-origin
app.use(express.json()); //To parse it to json

app.get("/readData", async (req, res) => {
  try {
    let data = req.query;
    let fun2 = await selectQ.SelectData1();
    console.log(fun2);
    res.json({ msg: "successfull" });
  } catch (err) {
    console.log("failed");
  }
});

app.post("/adduser", async (req, res) => {
  try {
    let data = req.body;
    //console.log(data);
    let result = await insertQ.insertData1(data);
    res.json({ msg: "successfull" });
    consol.log(result);
  } catch (err) {
    console.log("failed");
  }
});

app.post("/authr-user", async (req, res) => {
  try {
    let data = req.body;
    console.log(data);
    let result = await selectQ.SelectData1(data);
    //console.log("i1");
    console.log(result);
    if (result.length === 0) {
      return true;
    } else {
      return false;
    }
    //console.log("hii");
    res.json({ msg: "successfull" });
    // res.json(result);
  } catch (err) {
    console.log(err);
  }
});
app.listen(5000);
