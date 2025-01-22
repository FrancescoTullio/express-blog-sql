const connection = require("../data/db");

const index = (req, res) => {
    
    const sql = "SELECT *   FROM `posts`;";

    connection.query(sql, (err, postResults) => {
         if(err) {
            return res.status(500).json({
                messaggio: "ERRORE DEL SERVER",
                error: true
            })
         } else {
            return res.status(200).json({
                messaggio: "successo",
                data: postResults
            })
         }
    })

}



const show = (req, res) => {

    const postId = req.params.id;
    const sql =`SELECT * FROM posts WHERE id = ?`;

    connection.query(sql, [postId], (err, respPost) =>{
        if(err) {
            return res.status(500).json({
                messaggio: "ERRORE INTERNO DEL SERVER!"
            })
        }

        if (respPost.length === 0) {
            return res.status(404).json({
                messaggio: "POST NON TROVATO!"
            })
        } else {
            return res.status(200).json({
                messaggio:"successo",
                data: respPost[0]
            })
        }
    })


}

module.exports = {
    index,
    show
}