// TypeScript program to demonstrate types and interfaces

// Define a type for user status
type UserState = 'Active' | 'Inactive' | 'Suspended';

// Define a type for user information

type User = {
    id: number;
    name: string;
    email: string;
    status: UserState;
};

// Define an interface for user service operations
interface UserService {
    getUsers(): User[];
    addUser(user: User): void;
    updateUserStatus(userId: number, status: UserState): void
}

// Implement the UserService interface in a class

class simpleUserService implements UserService {
    private users: User[] = [];

    // Retrive all Users
    getUsers(): User[] {
        return this.users
    }

    // Add a new user
    addUser(user: User): void {
        this.users.push(user);
        console.log(`User added ${user.name}`);
    }

    // Update status of a user
    updateUserStatus(userId: number, status: UserState): void {
        const user = this.users.find((u) => u.id === userId);
        if(user) {
            user.status = status;
        } else {
            console.log(`User ID ${userId} Not Found`);
        }
    }
}

// Example Usage

const userService = new simpleUserService();

// Create some user objects
const user1: User = { id: 1, name: 'Alice', email: 'alice@gmail.com', status: 'Active' }
const user2: User = { id: 2, name: 'Tom', email: 'tom@gmail.com', status: 'Inactive' }

// Add users
userService.addUser(user1);
userService.addUser(user2);

// Get and display all Users
console.log(userService.getUsers());

// Update user status
userService.updateUserStatus(2, 'Active');

// Display updated user
userService.getUsers();