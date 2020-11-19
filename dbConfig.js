const mongoose = require('mongoose');

// const urlDb = 'mongodb://127.0.0.1/retoLoFi';
const urlDb = 'mongodb+srv://retolofi:retoloFi2020@cluster0.npx3z.mongodb.net/retoLoFi?retryWrites=true'

mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});