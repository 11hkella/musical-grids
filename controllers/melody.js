const express = require('express')
const MelodyApi = require('../models/melody.js')

const MelodyRouter = express.Router()

MelodyRouter.get('/', async (req, res) => {
    const melodies = await MelodyApi.getAllMelodies()
    return res.json(melodies)
})

MelodyRouter.post('/', async (req, res) => {
    const melodyCreated = await MelodyApi.createMelody(req.body)
    return res.json(melodyCreated)
})

MelodyRouter.put('/:id', async (req, res) => {
    const melodyUpdated = await MelodyApi.updateMelody(req.body, req.params.id)
    return res.json(melodyUpdated)
})

MelodyRouter.delete('/:id', async (req, res) => {
    const melodyDeleted = await MelodyApi.deleteMelody(req.params.id)
    return res.json(melodyDeleted)
})

MelodyRouter.get('/:id', async (req, res) => {
    const melody = await MelodyApi.getOneMelody(req.params.id)
    return res.json(melody)
})

module.exports = {
    MelodyRouter
}