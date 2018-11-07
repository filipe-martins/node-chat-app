const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  it('should add new user', () => {  //é synch n é preciso o done func
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([resUser]);//com arrays tem de se usar ToEqual
  });

});
