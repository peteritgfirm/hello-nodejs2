
//const date = require('date-and-time');

// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
    try {
        // const ret = await axios(url);

        // const now = new Date();
        // let strDateTime = date.format(now, 'YYYY/MM/DD HH:mm:ss');
        // let strMessage = 'hello world ' + strDateTime;

        var date = new Date();

        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                message: 'Hello World Node!!! The current date and time is ' + date + '.',
                // location: ret.data.trim()
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
