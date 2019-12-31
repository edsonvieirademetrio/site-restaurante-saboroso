var conn = require('./db')

const titleSite = 'Restaurante Saboroso - O mais saboroso da cidade!'

module.exports={
    render(req, res, error, success){
        res.render('reservations', {
            title: titleSite,
            backgroundHeader: 'images/img_bg_2.jpg',
            titlePage: 'Faça sua reserva!',
            body: req.body,
            error,
            success
        })
    },

    save(fields){

        return new Promise((resolve, reject)=>{

            let date = fields.date.split('/')
            fields.date = `${date[2]}-${date[1]}-${date[0]}`

            conn.query(`
                INSERT INTO tb_reservations(name,email,people,date,time)
                VALUES(?, ?, ?, ?, ?)
            `,[
                fields.name,
                fields.email,
                fields.people,
                fields.date,
                fields.time
            ], (err, results)=>{
                
                if(err){
                    reject(err)
                }else{
                    resolve(results)
                }
            })

        })
    }
}