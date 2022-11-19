const { Schema , model, Types } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
    type: String,
    unique: true,
    require: true,
    trim: true,
    },
    email: {
      type: String,
      unique: true,
      require: true,
      match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      }
    ],
    friends : [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);
//friend count that gets the number of friends each user has
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length
  })
  .set((v) => {
    
    this.set(v)
  })

const User = model('user', userSchema);

module.exports = User;