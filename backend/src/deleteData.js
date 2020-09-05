const mysql = require("mysql");
const Promise = require("Bluebird");

const db = require("./db-config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let SelectData = async () => {
  const database = await mysql.createConnection(db.dbconfig);
  let sql1 = "select * from userInfo";
  await database.connectAsync();
  var result = await database.queryAsync(sql1);
  await database.endAsync();
  console.group(result);
  //return results;
};

SelectData();

module.exports = { SelectData };
