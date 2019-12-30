var conn = require('./../inc/db')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    conn.query("SELECT * FROM tb_users ORDER BY name", (err, results) => {
        if (err) {
            res.send(err)
        } else {
            res.send(results)
        }
    })
});

module.exports = router;