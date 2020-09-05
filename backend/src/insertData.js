const mysql = require("mysql");
const Promise = require("Bluebird");

const db = require("./db-config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let insertData1 = async (input) => {
  const database = await mysql.createConnection(db.dbconfig);
  let sql1 =
    "Insert into  userInfo (firstname,lastname,emailid ,psw) values(?,?,?,?)";
  await database.connectAsync();
  var result = await database.queryAsync(sql1, [
    input.firstname,
    input.lastname,
    input.emailid,
    input.psw,
  ]);
  await database.endAsync();
  console.group(result);
  //return results;
};

module.exports = { insertData1 };
