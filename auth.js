'use strict';

class Auth {
    constructor() {
        this.users = [];
    }

    register(username, password) {
        if (this.validateUsername(username) && this.validatePassword(password)) {
            const user = { username, password };
            this.users.push(user);
            return 'Registration successful!';
        }
        return 'Registration failed: Invalid username or password.';
    }

    login(username, password) {
        const user = this.users.find(u => u.username === username && u.password === password);
        if (user) {
            return 'Login successful!';
        }
        return 'Login failed: Invalid username or password.';
    }

    validateUsername(username) {
        const regex = /^[a-zA-Z0-9]{3,20}$/;
        return regex.test(username);
    }

    validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
        return regex.test(password);
    }
}

// Export the Auth class so it can be used in other files
module.exports = Auth;
