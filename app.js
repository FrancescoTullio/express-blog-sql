const express = require("express");
const postsRouter = require("./routers/posts")


const app = express();
const port = 3000;


app.get("/", (req, res) => {
    return res.json({
        status: "successo",
        messaggio: "Benvenuti nell'universita di Boolean!"
    })
})


app.use("/", postsRouter)

app.listen(port, () =>{
    console.log("server partito")
})