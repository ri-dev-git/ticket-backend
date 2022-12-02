module.exports = {
    secretArn: process.env.AURORA_SECRET_ARN,
    resourceArn: process.env.RESOURCE_ARN,
    database: process.env.DATABASE,
    includeResultMetadata: true,
    resultSetOptions: { 
        decimalReturnType: "DOUBLE_OR_LONG"
    },
}
