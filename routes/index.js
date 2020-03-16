const express = require('express');
const router = express.Router();

var messages = [{text:"Hello!",user:"Tyler",added:new Date()},{text:"Oh I didn't see you there!",user:"Grelbin",added:new Date()}];



router.get('/', (req, res) => {
    res.render('index',{title: "Messages", messages: messages});
})
router.post('/', (req, res) => {
    messages = messages.filter(el=>{return el!==messages[req.body.deleteBtn]})
    res.redirect('/')
})
router.get('/new', (req, res) => {
    res.render('form');
})
router.post('/new', (req, res) => {
    let message = {
        user: req.body.name,
        text: req.body.message,
        added: new Date()
    };
    messages.push(message);
    res.redirect('/');
})

module.exports = router;