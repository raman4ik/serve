const express = require('express')
// const bodyParser = require('body-parser')
const errorMiddleware = require('./middlewares/errorMiddleware')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000/'
}))

//Import Routes
const product = require('./routes/productRoute')


app.use('/api/', product)

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/200.html"))
})

app.use(errorMiddleware)

module.exports = app