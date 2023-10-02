const express = require('express');
const { UserRouter } = require("./routes/users.route")
const { connection } = require("./config/db")
const cors= require('cors');
const { SavedFeedRouter } = require('./routes/saved.route');
require("dotenv").config()
const app = express();
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 8080;
app.use("/user", UserRouter )
app.use("/feed", SavedFeedRouter )
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post("/login", (req, res) => {
    res.send(req.body)
})

app.listen(port, async () => {
    try {
        await connection
        console.log("Connected to Database !!")
    } catch (error) {
        console.log("Error connecting to Database")
    }
    console.log(`App is running at http://localhost:${port}`)
})