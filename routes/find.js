var msg = require('../utility/const');

exports.findById = function(req, res) {
    var id = parseInt(req.params.id);
    db.collection('FavoriteTelefilm', function(err, collection) {
        collection.find({'id': id}).toArray(function(err, results) {
            if(err) {
                console.log(err)
                res.send(err);
            }
            else {
                console.log(results)
                res.send(results);
            }
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('FavoriteTelefilm', function(err, collection) {
        collection.find().toArray(function(err, items) {
            if(err) {
                res.json({
                    status: 'error',
                    message: msg.ERROR_MSG,
                    data: err
                });
            }
            else {
                res.json({
                    status: 'success',
                    message: msg.SUCCESS_MSG,
                    data: items
                });
            }
        });
    });
};

