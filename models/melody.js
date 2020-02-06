const mongoose = require('./connection.js')

// define mogoose schema and create model collection
const MelodySchema = new mongoose.Schema({
    title: String,
    melody: [String]
})

const MelodyCollection = mongoose.model('Melodies', MelodySchema)

//function to query, create, update, and delete from collection
function getOneMelody(id) {
    console.log('model id recieved: ', id)
    return MelodyCollection.findById(id)
}

function getAllMelodies() {
    return MelodyCollection.find({})
}

function createMelody(body) {
    return MelodyCollection.create(body)
}

function updateMelody(body, id) {
    return MelodyCollection.find(body, { _id: id })
}


function deleteMelody(id) {
    return MelodyCollection.deleteOne({ _id: id })
}


module.exports = {
    getOneMelody,
    getAllMelodies,
    createMelody,
    updateMelody,
    deleteMelody
}