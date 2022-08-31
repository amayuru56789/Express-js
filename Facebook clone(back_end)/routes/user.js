const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send('user get');
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('user post method');
})

router.put('/', (req, res) => {
    res.send('put method');
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('delete method');
})

router.get('/:id', (req, res) => {
    res.send('get user by id');
})

module.exports = router