
 var Joi                                         = require('joi');
 var _                                           = require('underscore');
 
 var logging                                     = require('../logging/logging');
 
 exports.validateFields                          = validateFields;
 exports.trimFields                              = trimFields;
 
 
 function validateFields(apiReference, req, schema, msg) {
     var validation = Joi.validate(req, schema);
     if(validation.error) {
         var errorReason =
                 validation.error.details !== undefined
                     ? (msg ? msg : validation.error.details[0].message)
                     : 'Parameter missing or parameter type is wrong';
         console.log(validation.error.details);
         logging.log(apiReference, validation.error.details);
         return false;
     }
     if(req.auth_key){
         if(!config.get('SECRET_API_KEY').includes(req.auth_key)){
             responses.invalidApiKey(res);
             return false;
         }
     }
     return true;
 }
 
 function trimFields(req, res, next) {
   logging.log(req.apiReference, {EVENT: "Trimming Validator", REQUEST_BODY: req});
   if (req.body.email) {
     req.body.email = req.body.email.trim();
   }
   next();
 }