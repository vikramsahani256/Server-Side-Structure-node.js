
const apiReferenceModule        = 'startup'
const httpService               = require('./httpService');
const envProperties             = require('../properties/envProperties');
const mysqlLib                  = require('../database/mysqlLib');
const logging                   = require('../logging/logging');


exports.initializeServer = async function initializeServer() {
    let apiReference = {
        module: apiReferenceModule,
        api: "initialize"
    }
    try {

        connection = await mysqlLib.initializeConnectionPool(envProperties.databaseSettings.mysql.master);

        // do not let var

        server = await httpService.startHttpServer(envProperties.port);
    } catch (error) {
        logging.logError(apiReference, {EVENT: "initializeServer", ERROR: error});

        throw new Error(error)
    }
}