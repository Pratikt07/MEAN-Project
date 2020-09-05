const mysql = require("mysql");
const Promise = require("Bluebird");

const db = require("./db-config");
const { json } = require("express");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let SelectData1 = async (input) => {
  //console.log(input);
  const database = await mysql.createConnection(db.dbconfig);
  // let info = json.parse(inupt);
  // console.log(info);
  let sql2 = "select * from userInfo where emailid = ? and psw = ?";
  await database.connectAsync();
  var result = await database.queryAsync(sql2, [input.emailid, input.psw]);
  await database.endAsync();
  console.log(result);
  return result;
};
module.exports = { SelectData1 };
