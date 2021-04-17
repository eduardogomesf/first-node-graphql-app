const User = require('./User');

module.exports = {
  Query: {
    users: () => { return User.find() },
    user: (_, { id }) => { return User.findOne(id) },
  },

  Mutation: {
    createUser: (_, { name, email }) => { return User.create({ name, email }) },
  }
}