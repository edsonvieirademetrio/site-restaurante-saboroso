var conn = require('./db')


module.exports = {

    save(fields) {

        return new Promise((resolve, reject) => {

            conn.query(`
                INSERT INTO tb_contacts(name,email,message)
                VALUES(?, ?, ?)
            `, [
                fields.name,
                fields.email,
                fields.message
            ], (err, results) => {

                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            })

        })
    }
}