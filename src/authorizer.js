const jwt = require("jsonwebtoken");

const handler = async (event, context, callback) => {
    try {
        let token = event.authorizationToken.split(" ")[1];
        jwt.verify(token, "esteesunsecretomuysecreto");

        callback(null, generatePolicy("user", "Allow", event.methodArn));
    } catch (error) {
        callback(null, generatePolicy("user", "Deny", event.methodArn));
    }
};

const generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument = {};
        policyDocument.Version = "2012-10-17";
        policyDocument.Statement = [];
        var statementOne = {};
        statementOne.Action = "execute-api:Invoke";
        statementOne.Effect = effect;
        statementOne.Resource = resource;
        policyDocument.Statement[0] = statementOne;
        authResponse.policyDocument = policyDocument;
    }

    authResponse.context = {
        stringKey: "stringval",
        numberKey: 123,
        booleanKey: true
    };

    return authResponse;
};

module.exports.handler = handler;
