const jwt = require('jsonwebtoken');
// require('dotenv').config({path: '../.env'});

function generateJWT (userId){
    const payload = {user: {id: userId}};
    const secret = process.env.jwt_secret;
    return jwt.sign(payload, secret);
}

module.exports = generateJWT;