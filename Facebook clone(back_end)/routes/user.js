const express = require('express');
const router = express.Router()

const app = express();
const User = require('../models/user_models');

app.use(express.json())

router.get('/', async (req, res) => {
    try{
        const user = await User.find();
        res.json(user);
        // res.send(item);
    }catch (err) {
        res.send('Err: ' + err);
    }

    // res.send('user get');
})

router.post('/', async (req, res) => {
    const user = new User({
        uid: req.body.uid,
        date: req.body.date,
        time: req.body.time,
        title: req.body.title
    });

    try{
        const response = user.save();
        res.json(response);
        // res.send(response);
    }catch (err) {
        res.send('Err: ' + err);
    }

    // console.log(req.body);
    // res.send('user post method');
})

router.put('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.uid = req.body.uid;
        user.date = req.body.date;
        user.time = req.body.time;
        user.title = req.body.title;

        const response = await user.save();
        res.json(response);

    } catch (err) {
        res.send('Err: ' + err);
    }


    // res.send('put method');
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send('delete method');
})

router.get('/:id', (req, res) => {
    res.send('get user by id');
})

module.exports = router