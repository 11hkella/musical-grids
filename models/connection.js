const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/musical_grid"

mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log('mongoDB connected at: ', connectionString)
    })

export default mongoose