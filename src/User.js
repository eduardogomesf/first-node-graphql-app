const { uuid } = require('uuidv4');

class User {

  constructor() {
    this.users = [];
  }

  create({ name, email }) {
    const user = { id: uuid(), name, email };

    this.users.push(user);

    return user;
  }

  findOne(id) {
    const user = this.users.find(user => user.id === id);

    return user || "";
  } 

  find() {
    return this.users;
  }


}

module.exports = new User();