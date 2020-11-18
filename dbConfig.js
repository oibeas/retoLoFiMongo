const mongoose = require('mongoose');

const urlDb = 'mongodb://127.0.0.1/retoLoFi';

mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});