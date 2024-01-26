import JWT from 'passport-jwt';
import user from '../models/user.js';

const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_auth'
}
export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done)=> {
        const User = await user.findById(jwt_payload.id);
        if (User) {
            return done(null, User);
        } else {
            return done(null, false);
        }
    }));
    };
