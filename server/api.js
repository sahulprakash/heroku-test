const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const URL = require('../models/url')
var shortUrl = require('node-url-shortener');
// var hbs = require('express-handlebars')
const connectionURL = 'mongodb://localhost:27017/UrlShorten';
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/urlLink', (req, res) => {
    res.render('home')
    var urlData = req.body.urlData
    URL.findOne({ urlData: urlData }, function (err, doc) {
        if (doc) {
            console.log('entry found in db', doc)
            res.send({
                doc: doc
                // url: urlData,
                // urlShorten: urlShorten,
                // hash: btoa(doc._id),
                // status: 200,
                // statusTxt: 'OK'
            });
        } else {
            console.log("error in doc", err)
            console.log('entry NOT found in db, saving new');
            shortUrl.short(urlData, function (err, result) {
                var url = new URL({
                    urlData: urlData,
                    urlShorten: result,
                    created_at: new Date
                });
                url.save(function (err) {
                    if (err) return console.error(err);
                    res.send({
                        url: urlData,
                        urlShorten: result,
                        created_at: created_at,
                        // hash: btoa(url._id),
                        status: 200,
                        statusTxt: 'OK'
                    });
                });
            })
        }
    })
})

module.exports = router;