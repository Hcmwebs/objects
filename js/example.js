const user = {
  name: 'John',
  age: 36,
  email: 'john@example.com',
  location:'Khartoum',
  blogs: ['The company spreads its wings', 'what has happened in the last few days'],
  login(){
    console.log('John has logged in');
  },
  logout(){
    console.log('John has logged out');
  }
}

user.logout()