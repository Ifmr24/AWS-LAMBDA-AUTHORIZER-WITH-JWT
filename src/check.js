const handler = async (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            message: "esto es secreto"
        })
    });
};

module.exports.handler = handler;
