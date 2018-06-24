export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Max',
      status: 'active'
    },
    {
      id: 2,
      name: 'Anna',
      status: 'active'
    },
    {
      id: 3,
      name: 'Chris',
      status: 'active'
    }
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(
      (u) => {
        return u.id === id;
      }
    );
    return user;
  }

  updateUser(id: number, userInfo: {name: string, status: string}) {
    const user = this.users.find(
      (u) => {
        return u.id === id;
      }
    );
    if (user) {
      user.name = userInfo.name;
      user.status = userInfo.status;
    }
  }

}
