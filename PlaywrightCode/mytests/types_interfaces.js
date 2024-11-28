// TypeScript program to demonstrate types and interfaces
// Implement the UserService interface in a class
var simpleUserService = /** @class */ (function () {
    function simpleUserService() {
        this.users = [];
    }
    // Retrive all Users
    simpleUserService.prototype.getUsers = function () {
        return this.users;
    };
    // Add a new user
    simpleUserService.prototype.addUser = function (user) {
        this.users.push(user);
        console.log("User added ".concat(user.name));
    };
    // Update status of a user
    simpleUserService.prototype.updateUserStatus = function (userId, status) {
        var user = this.users.find(function (u) { return u.id === userId; });
        if (user) {
            user.status = status;
        }
        else {
            console.log("User ID ".concat(userId, " Not Found"));
        }
    };
    return simpleUserService;
}());
// Example Usage
var userService = new simpleUserService();
// Create some user objects
var user1 = { id: 1, name: 'Alice', email: 'alice@gmail.com', status: 'Active' };
var user2 = { id: 2, name: 'Tom', email: 'tom@gmail.com', status: 'Inactive' };
// Add users
userService.addUser(user1);
userService.addUser(user2);
// Get and display all Users
console.log(userService.getUsers());
// Update user status
userService.updateUserStatus(2, 'Active');
// Display updated user
userService.getUsers();
