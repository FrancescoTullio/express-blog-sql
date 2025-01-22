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

module.exports = {
    index
}