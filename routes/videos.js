const router = require('express').Router();
const { log } = require('debug');
const Video = require('../models/video');

router.get('/', (req, res) => {
    // Video.find((err, videos) => {
    //     console.log(videos);
    // })

    // mejor con promesas:
    let aleatorio = Math.floor(Math.random() * (308 - 1)) + 1;
    console.log(aleatorio);

    Video.find({ 'numeroId': { $gt: aleatorio, $lt: aleatorio + 20 } })
        .then(videos => {
            console.log(videos);
            res.render('videos/index', { videos });
        }).catch(error => console.log(error));
});

router.get('/detalles/:idVideo', (req, res) => {
    Video.find({ 'numeroId': (req.params.idVideo) })
        .then(videos => {
            res.render('videos/index', { videos });
        }).catch(error => console.log(error));
})

router.get('/new', (req, res) => {
    res.render('videos/form');
});

router.post('/create', (req, res) => {
    res.redirect('/videos');
});

module.exports = router;