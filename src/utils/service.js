'use strict';
const AWS = require('aws-sdk');
// const AWSConfig = require('./config');
const dbConfig = require('../db');
// // const { parseResponse } = require('../helpers');
const { default: axios } = require('axios');
const rdsDataService = new AWS.RDSDataService();
// // const sesService = new AWS.SES();
// // const apigateway = new AWS.APIGateway();

module.exports={

    async executeStatement(query) {
        //Prepare SQL command
        const sqlParams = {
            sql: query,
            ...dbConfig
        }
        return await rdsDataService.executeStatement(sqlParams).promise();
    },
    execute: execute,

}
async function execute(query) {
    //Prepare SQL command
    const sqlParams = {
        sql: query,
        ...dbConfig
    }
    return await rdsDataService.executeStatement(sqlParams).promise();
}