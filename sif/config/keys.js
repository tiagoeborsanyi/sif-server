const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mongoURI: process.env.PATH_MONGO,
    secretOrKey: process.env.SECRET
}