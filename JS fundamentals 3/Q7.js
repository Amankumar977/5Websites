class UserManagement {
  constructor() {
    this.userMap = new Map();
  }

  addUser(name, age, email) {
    this.userMap.set(email, { name, age, email });
  }

  updateUser(email, name, age) {
    if (this.userMap.has(email)) {
      const user = this.userMap.get(email);
      user.name = name || user.name;
      user.age = age || user.age;
      this.userMap.set(email, user);
    }
  }

  deleteUser(email) {
    this.userMap.delete(email);
  }

  getUser(email) {
    return this.userMap.get(email);
  }

  getAllUsers() {
    return Array.from(this.userMap.values());
  }
}

// Example usage
const userManagement = new UserManagement();

userManagement.addUser("John Doe", 25, "john@example.com");
userManagement.addUser("Jane Smith", 30, "jane@example.com");

console.log(userManagement.getAllUsers());

userManagement.updateUser("john@example.com", "John Smith", 26);
console.log(userManagement.getUser("john@example.com"));

userManagement.deleteUser("jane@example.com");
console.log(userManagement.getAllUsers());
