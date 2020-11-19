const router = require('express').Router();
const Video = require('../../models/video');

router.get('/', async (req, res) => {
    const videos = await Video.find().limit(20);
    res.json(videos);

});

router.get('/detalles/:idVideo', async (req, res) => {
    const videos = await Video.find({ 'numeroId': (req.params.idVideo) })
    res.json(videos);
})

router.get('/buscar', async (req, res) => {
    const videos = await Video.find({
        $search: {
            'text': {
                'path': 'titulo',
                'query': 'retolofi'
            }
        }
    })
    res.json(videos);
})

router.get('/aleatorio', async (req, res) => {
    // Video.find((err, videos) => {
    //     console.log(videos);
    // })

    // mejor con promesas:
    let aleatorio = Math.floor(Math.random() * (308 - 1)) + 1;
    console.log(aleatorio);

    const videos = await Video.find({ 'numeroId': (aleatorio) })
    res.json(videos);
});



module.exports = router;