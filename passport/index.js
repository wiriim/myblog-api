const passport = require('passport');
const {Strategy, ExtractJwt} = require('passport-jwt');
require('dotenv').config();
const prisma = require('../lib/prisma');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(new Strategy(opts, async function(jwt_payload, done) {
    try{
        const user = await prisma.user.findUnique({
            where: {id: jwt_payload.user.id}
        });
        if (!user){
            return done(null, false);
        }
        return done(null, user);
    }catch(err){
        return done(err, false);
    }
}));