const mysql = require("mysql");
const Promise = require("Bluebird");

const db = require("./db-config");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let updatepass = async (input) => {
  try {
    let connection = mysql.createConnection(db.dbconfig);

    await connection.connectAsync();

    let sql2 = "update logindetails set psw=? where emailid=?";

    let result = await connection.queryAsync(sql2, [input.psw, input.emailid]);
    console.log(result);

    await connection.endAsync();

    return result;
  } catch (err) {
    console.log(err);
  }
};
SelectData();

module.exports = { SelectData };
