var conn = require('./db')

const titleSite = 'Restaurante Saboroso - O mais saboroso da cidade!'

module.exports = {

    render(req, res, error, sucess) {
        res.render('contacts', {
            title: titleSite,
            backgroundHeader: 'images/img_bg_3.jpg',
            titlePage: 'Está em contato conosco!',
            body: req.body,
            error,
            sucess
        })
    },

    save(fields) {

        return new Promise((resolve, reject) => {

            /*Query chama a conexão com o banco para inserção
             *2º argumentos - campos digitados
             *3º argumento é: callback de sucesso ou erro
             */
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