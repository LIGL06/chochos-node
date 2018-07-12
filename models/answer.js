var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    mongoUri = process.env.MONGODB_URI || 'mogodb://localhost/answers';

mongoose.connect(mongoUri, function (error) {
    if (error) throw error
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