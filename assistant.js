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
        this.tasks.length > 0 ? this.completedTasks.push(this.tasks.shift()) :
            console.log(`Your to-do list has no tasks.`);
    }

    reportMood() {
        console.log(`Your mood appears to be: `, this.mood);
    }

    setMood(mood) {
        this.mood = mood;
    }
}