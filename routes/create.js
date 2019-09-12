const Joi = require('joi');
var validation = require('../validation/task')
var msg = require('../utility/const');

exports.addTeleFilm = function(req, res) {
    telefilm = req.body;
    Joi.validate(this.telefilm, validation.schema, (err, value) => {
        if (err) {
            res.status(422).json({
                status: 'error',
                message: msg.INVALID_REQUEST,
                data: telefilm
            });
        } 
        else {
            console.log("Invalid schema");
            insertOne(res);
        }
    });
}

function insertOne(res){
    id = parseInt(this.telefilm.id);
    db.collection('FavoriteTelefilm', function (err, collection) {
        collection.find({'id':id}).toArray(function(err,items){
            if(items.length == 0) {
                collection.insertOne(this.telefilm, {safe: true}, function (err, result) {
                    if (err) {
                        res.send({'error': 'An error has occurred'});
                    } else {
                        res.json({
                            status: 'success',
                            message: MSGesture.SUCCESS_MSG,
                            data: Object.assign({id}, this.telefilm)
                        });
                    }
                });
            }
            else
                res.status(409).json({
                    status: 'error',
                    message: 'Telefilm not exist',
                });
        })
    });
}
