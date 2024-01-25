import JwtStrategy from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import user from '../models/user.js';

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'twitter_auth'
}
export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done)=> {
    await user.findById(jwt_payload.id, (err, User)=> {
        if (err) {
            return done(err, false);
        }
        if (User) {
            return done(null, User);
        } else {
            return done(null, false);
        }
    })
}));
}