// import dependencies
const express = require('express')
const app = express()

//import routers from controllers
const { MelodyRouter } = require('./controllers/melody.js')

// register middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))

//add router for application use
app.use('/api/melody', MelodyRouter)

//catch all to serve up built react app
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

//set port for server and start listener
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})