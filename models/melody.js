const mongoose = require('./connection.js')

// define mogoose schema and create model collection
const MelodySchema = new mongoose.Schema({
    title: String,
    melody: Number
})

const MelodyCollection = mongoose.model('Melodies', MelodySchema)

//function to query, create, update, and delete from collection
function getOneMelody(id) {
    MelodyCollection.findById(id, (err, res) => {
        if (!err) {
            return res
        } else {
            throw err
        }
    })
}

function getAllMelodies() {
    MelodyCollection.find({}, (err, res) => {
        if (!err) {
            return res
        } else {
            throw err
        }
    })
}

function createMelody(body) {
    MelodyCollection.create(body, (err, res) => {
        if (!err) {
            return res
        } else {
            throw err
        }
    })
}

function updateMelody(body, id) {
    MelodyCollection.find(body, { _id: id }, (err, res) => {
        if (!err) {
            return res
        } else {
            throw err
        }
    })
}


function deleteMelody(id) {
    MelodyCollection.deleteOne({ _id: id }, (err, res) => {
        if (!err) {
            return res
        } else {
            throw err
        }
    })
}


export {
    getOneMelody,
    getAllMelodies,
    createMelody,
    updateMelody,
    deleteMelody
}