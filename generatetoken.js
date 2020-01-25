// node generatetoken

const jwt = require("jsonwebtoken");

let token = jwt.sign(
    {
        message: "Hola"
    },
    "esteesunsecretomuysecreto",
    {
        algorithm: "HS256",
        expiresIn: "30m"
    }
);

console.log(token);
