const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/test',
    user = process.env.MONGO_USER,
    pass = process.env.MONGO_PASSwORD;

mongoose.Promise = global.Promise;

mongoose.connect(mongoUri, {useNewUrlParser:true});
const db = mongoose.connection;

db.once('open', () => {
    console.log(`listening...`);
});

var liliSchema = new Schema({
    question:{
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var Lili = mongoose.model('Lili', liliSchema);
module.exports = Lili;