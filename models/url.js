const mongoose  = require('mongoose')
const Schema = mongoose.Schema;

const UrlSchema =  new Schema({
    urlData: String,
     created_at: Date,
    urlShorten:String
});
module.exports = mongoose.model('URL',UrlSchema,'url')