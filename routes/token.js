var msg = require('../utility/const');

exports.add = function(req, res) {
    db.collection('token', function (err, collection) {
        collection.insertOne(req.body ,{safe: true}, function (err, result) {
            if (!err)
            {
                res.json({
                    status: 'success',
                    message: msg.SUCCESS_MSG,
                });
            }
        })
    });
}
