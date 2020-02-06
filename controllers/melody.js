const express = require('express')
const MelodyApi = require('../models/melody.js')

const MelodyRouter = express.Router()

MelodyRouter.get('/melody', async (req, res) => {
    const melodies = await MelodyApi.getAllMelodies()
    return res.json(melodies)
})

MelodyRouter.post('/melody', async (req, res) => {
    const melodyCreated = await MelodyApi.createMelody(req.body)
    return res.json(melodyCreated)
})

MelodyRouter.put('/melody/:id', async (req, res) => {
    const melodyUpdated = await MelodyApi.updateMelody(req.body, req.id)
    return res.json(melodyUpdated)
})

MelodyRouter.delete('/melody/:id', async (req, res) => {
    const melodyDeleted = await MelodyApi.deleteMelody(req.id)
    return res.json(melodyDeleted)
})

MelodyRouter.get('/melody/:id', async (req, res) => {
    const melody = await MelodyApi.getOneMelody(req.id)
    return res.json(melody)
})

module.exports = {
    MelodyRouter
}