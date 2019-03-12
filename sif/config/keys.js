module.exports = {
    mongoURI: `mongodb://${process.env.USER_BD}:${process.env.PASS_BD}@${process.env.PATH_BD}/${process.env.NAME_BD}`,
    secretOrKey: process.env.SECRET
}