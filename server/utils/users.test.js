const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'Marcus1',
        room: 'test room'
      },
      {
        id: '2',
        name: 'Marcus2',
        room: 'react room'
      },
      {
        id: '3',
        name: 'Marcus3',
        room: 'test room'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id: '1',
      name: 'Marcus',
      room: 'test room'
    };
    // var resUser = users.addUser(user.id, user.name, user.room);
    users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '22';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for test room', () => {
    var userList = users.getUserList('test room');

    expect(userList).toEqual(['Marcus1', 'Marcus3']);
  });

  it('should return names for react room', () => {
    var userList = users.getUserList('react room');

    expect(userList).toEqual(['Marcus2']);
  });
});
