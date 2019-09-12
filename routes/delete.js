exports.deleteTeleFilm = function(req, res) {
    var id = parseInt(req.params.id);
    console.log('Deleting film: ' + id);
    db.collection('FavoriteTelefilm', function(err, collection) {
        collection.deleteOne({'id': id}, {safe:true}, function(err, result) {
            if (err) {
                res.json({
                    status: 'error',
                    message: msg.ERROR_MSG,
                    data: err
                });
            } else {
                res.json({
                    status: 'Success',
                    message: msg.SUCCESS_MSG
                });
            }
        });
    });
}