var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoUri = process.env.MONGODB_URI || 'mogodb://localhost:27017/answers';

mongoose.connect(mongoUri, {});

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.once("open", () => {
    console.log('Running...');
});

var answerSchema = new Schema({
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

var Answer = mongoose.model('Answer', answerSchema);
module.exports.Answer = Answer;