import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt-nodejs';

const SALT_FACTOR = 12;

export const UsersSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
});

UsersSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  bcrypt.genSalt(SALT_FACTOR, (err, salt) => {
      if (err) {
        return next(err);
      }

      bcrypt.hash(user.password, salt, null, (err, hash) => {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
      });
  });
});

UsersSchema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch: boolean) => {
          if (err) {
            return reject(err);
          }
          resolve(isMatch);
      });
  });

};
