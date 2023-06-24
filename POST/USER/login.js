const connection = require("../../db");

const loginCheck = (req, res) => {
    let result = {};
    let body = req.body;
    console.log(body);
 
    connection.query(`SELECT id, nickname, email, token from LOGIN WHERE id="${body.id}" and pw="${body.pw}"`, (error, rows, fields) => {
        if (error) {
            result = {
                message: error.message,
                data: error.errno
            }
            return res.send(result);
        } else {
            if(rows.length === 0) {
                result = {
                    message: "200 OK",
                    data: {}
                }
            }
            else if(rows.length === 1) {
                result = {
                    message: "200 OK",
                    data: rows[0]
                };    
            } else {
                result = {
                    message: "400 Bad Request",
                    data: {}
                }
            }
            return res.send(result);
        }
    });
}

module.exports = {
    loginCheck
}