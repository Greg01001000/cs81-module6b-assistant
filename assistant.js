// CS 81 Module 6 Assignment 6B: Personal Assistant, by GregH, 7/16/25

class PersonalAssistant {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.mood = "";
        this.completedTasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    completeTask() {
        if (this.tasks.length > 0) {
            const task = this.tasks.shift();
            this.completedTasks.push(task);
            console.log(`You finished the task, ${task}! Great job!`);
        }
        if (this.tasks.length == 0) {
            console.log(`You finished everything! That was amazing!`)
        }
    }

    reportMood() {
        console.log(`Looks like you're feeling ${this.mood}!`);
    }
}

const eddie = new PersonalAssistant('Eddie');
console.log(`Hi there! I'm ${eddie.name}, your assistant, and I'm feeling just great!`);
console.log('How are you?');
eddie.mood = 'sleepy';
eddie.reportMood();
console.log(`And what can I help you do today? I'll get a bundle of kicks out of it!`);
eddie.addTask('Assignment 6B');
eddie.addTask('Russian Bible Reading');
eddie.addTask('Shave & Shower');
console.log(eddie.tasks);
eddie.completeTask();
console.log(eddie.tasks);
eddie.completeTask();
console.log(eddie.tasks);
eddie.mood = 'accomplished';
eddie.reportMood();
eddie.completeTask();
