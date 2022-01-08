
 const constants   = require('../properties/constants');
 const zlib        = require('zlib');
//  const commonFunction     = require('./commonFunction');
 
 
 
 exports.parameterMissingResponse = function (res, err, data) {
     const response = {
         "message": err || constants.responseMessages.PARAMETER_MISSING,
         "status": constants.responseFlags.PARAMETER_MISSING,
         "data" : data || {}
     };
     res.send(JSON.stringify(response));
 };
 
 exports.databaseError = function (res, err, data,insertId) {
     const response = {
         "message": err || constants.responseMessages.PARAMETER_MISSING,
         "status": constants.responseFlags.DATABASE_ERROR,
         "data" : data || {}
     };
     // if(insertId){
     //     commonFunction.saveResponse(insertId,response)
     // }
     res.send(JSON.stringify(response));
 };
 
 exports.databaseErrorCorrect = function (res, err, data) {
     const response = {
         "message": err || constants.responseMessages.PARAMETER_MISSING,
         "status": constants.responseFlags.DATABASE_ERROR,
         "data" : data || {}
     };
     res.send(JSON.stringify(response));
 };
 
 exports.databaseErrorSpecific = function (res, err, data, status) {
     const response = {
         "message": err || constants.responseMessages.PARAMETER_MISSING,
         "status":  status || constants.responseFlags.EXTENTION_DISABLE ,
         "data" : data || {}
     };
     res.send(JSON.stringify(response));
 };
 exports.actionCompleteResponse = function (res, data, msg,insertId) {
     const response = {
         "message": msg || constants.responseMessages.ACTION_COMPLETE,
         "status": constants.responseFlags.ACTION_COMPLETE,
         "data" : data || []
     };
     // if(insertId){
     //     commonFunction.saveResponse(insertId,response)
     // }
     res.send(JSON.stringify(response));
 };
 exports.sendActionFailedResponse = function(res, data, msg,insertId){
     const response = {
         message : msg || "Something went wrong.Please try again",
         status : constants.responseFlags.ERROR_IN_EXECUTION,
         data : data || {}
     }
     // if(insertId){
     //     commonFunction.saveResponse(insertId,response)
     // }
     res.send(response);
 };
 
 exports.sendActionFailedResponseCorrect = function(res, data, msg){
     const response = {
         message : msg || "Something went wrong.Please try again",
         status : constants.responseFlags.ACTION_FAILED,
         data : data
     }
     res.send(response);
 };
 
 
 exports.invalidSharedSecret = function(res, msg, data){
     const response = {
         message : msg || "Invalid Shared Secret",
         status : constants.responseFlags.ACTION_FAILED,
         data : data
     };
     res.send(response);
 };
 
 exports.sendGzippedResponse = function (res, data, msg) {
     const response = {
         message : msg || constants.responseMessages.ACTION_COMPLETE,
         status : constants.responseFlags.ACTION_COMPLETE,
         data : data || []
     };
     zlib.gzip(JSON.stringify(response), function(err, zippedData) {
         if (err) {
             return res.send(response);
         }
         res.set({ 'Content-Encoding': 'gzip' });
         return res.send(zippedData);
     });
 }
 
 exports.authenticationFailed = function (res, msg){
     const response = {
         message : msg || 'Authentication Failed',
         status : constants.responseFlags.AUTHENTICATION_FAILED
     }
     res.send(response);
 }
 exports.redirectResponse = function (res, link) {
     res.redirect(link);
 };
 
 exports.customError = function (res, err, data, status) {
     const response = {
         "message": err || constants.responseMessages.SOMETHING_WENT_WRONG,
         "status":  status || constants.responseFlags.ERROR_IN_EXECUTION,
         "data" : data || {}
     };
     res.send(JSON.stringify(response));
 };