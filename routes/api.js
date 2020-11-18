const router = require('express').Router();

const videosApiRouter = require('./api/videos');

router.use('/videos', videosApiRouter);

module.exports = router;