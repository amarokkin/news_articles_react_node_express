var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient

router.get('/', function(req, res, next) {
    MongoClient.connect('mongodb://localhost:27017/news', function (err, client) {
        if (err) throw err

        var db = client.db('news_articles')

        db.collection('news_articles').find().toArray(function (err, result) {
            if (err) throw err

            //res.status(200).send({"data": ["hi", "bye"]});
            res.status(200).send({"data": result});
            return;
        })
    })
});

module.exports = router;

