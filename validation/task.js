const router = require('express').Router();
const Joi = require('joi');
 
// Create validation for routes as Joi schemas
    
exports.schema = Joi.object({
    id: Joi.number().required(),
    poster_path: Joi.string().required(),
    original_name: Joi.string().required(),
    overview: Joi.string().allow('', null)
});

