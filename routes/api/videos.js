const router = require('express').Router();
const Video = require('../../models/video');

// Listado de los 20 primeros
router.get('/', async (req, res) => {
    const videos = await Video.find().limit(20);
    res.json(videos);

});

// Detalles de un video
router.get('/detalles/:idVideo', async (req, res) => {
    const videos = await Video.find({ 'rango': (req.params.idVideo) })
    res.json(videos);
})

// Busqueda por autor
router.get('/autor/:idAutor', async (req, res) => {
    const videos = await Video.find({ 'autor': { $regex: req.params.idAutor, $options: 'i' } })
    res.json(videos);
})


// Busqueda por titulo o autor, cualquier palabra
router.get('/buscar/:idBusqueda', async (req, res) => {
    const videos = await Video.find(
        {
            $or:
                [
                    { titulo: { $regex: req.params.idBusqueda, $options: 'i' } },
                    { autor: { $regex: req.params.idBusqueda, $options: 'i' } },
                ]
        }
    )
    res.json(videos);
})

// Me devuelve un video aleatorio
router.get('/aleatorio', async (req, res) => {
    // Video.find((err, videos) => {
    //     console.log(videos);
    // })

    // mejor con promesas:
    let aleatorio = Math.floor(Math.random() * (308 - 1)) + 1;
    console.log(aleatorio);

    const videos = await Video.find({ 'rango': (aleatorio) })
    res.json(videos);
});



module.exports = router;