var msg = require('../utility/const');

exports.updateFilm = function(req, res) {
    var id = req.params.id;
    var teleFilm = req.body;
    db.collection('FavoriteTelefilm', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, teleFilm, {safe:true}, function(err, result) {
            if (err) {
                res.json({
                    status: 'error',
                    message: msg.ERROR_MSG,
                    data: err
                });
            } else {
                res.json({
                    status: 'success',
                    message: msg.SUCCESS_MSG,
                    data: teleFilm
                });
            }});
    });
}