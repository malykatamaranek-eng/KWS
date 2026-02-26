// gambling games functionality

class GamblingGame {
    constructor(name) {
        this.name = name;
        this.balance = 0;
    }

    // Add some money to player's balance
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
    }

    // Bet an amount of money
    bet(amount) {
        if (amount > this.balance) {
            console.log(`Not enough balance to bet $${amount}. Current balance: $${this.balance}`);
            return false;
        }
        this.balance -= amount;
        console.log(`Bet: $${amount}. Remaining balance: $${this.balance}`);
        return true;
    }

    // Simulate a game round
    play() {
        // To be overridden by specific game type
        console.log(`Playing ${this.name}`);
        return Math.random() < 0.5; // Random win/lose
    }

    // Endgame result
    endGame(won) {
        if (won) {
            console.log(`You won! Current balance: $${this.balance}`);
        } else {
            console.log(`You lost! Current balance: $${this.balance}`);
        }
    }
}

// Example usage
const game = new GamblingGame('Slot Machine');
game.deposit(100);
if (game.bet(10)) {
    const won = game.play();
    game.endGame(won);
}