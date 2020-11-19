const mongoose = require('mongoose');

const urlDb = 'mongodb://127.0.0.1/retoLoFi';
// const urlDb = 'mongodb+srv://retolofi:amdk626277A@cluster0.npx3z.mongodb.net/retoLoFi?retryWrites=true&w=majority'

mongoose.connect(urlDb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});