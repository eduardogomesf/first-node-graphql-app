const users = [
  { id: 1, name: 'Eduardo', email: 'eduardo@hotmail.com.br' },
  { id: 2, name: 'Gomes', email: 'gomes@hotmail.com.br' }
]

module.exports = {
  Query: {
    users: () => { return users; },
    user: () => { return users[0] },
  },

  Mutation: {
    createUser: () => { return users[0] },
  }
}