const passport = require("passport");
const {Strategy, ExtractJwt } = require("passport-jwt");
const Students  = require("../model/studentsModel");

const jwt_secret = '##%asdqweasdqwe##';

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwt_secret
    },
    async (jwtPayLoad, done) => {
        try {
            const student = await Students.findById({studentId: jwtPayLoad.id})
            if (!student) {
                const error = new Error('UStudent not found')
                console.log(error);
            }
            done(null, student);

        } catch (err) {
            done(err);
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
};

const authenticate = () => {
    return passport.authenticate('jwt', {session: false})
};

module.exports = {
    initialize,
    authenticate,
};
