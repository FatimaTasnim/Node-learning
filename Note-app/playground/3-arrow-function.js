// Goal: create the method to get incomplete tasks

// 1. Define getTasksToDo method
// 2. Use filter to return just the incomplete tasks

const tasks = {
    tasks: [{
        text: 'Grocery Shopping',
        completed: true,
    },{
        text: 'Clean yard',
        completed: false
    },{
        text: 'File course',
        completed: false
    }],

    getTasksToDo(){
        const unfinished = this.tasks.filter(function(task){
            return task.completed === false;
        })
        return unfinished;
    }
}

console.log(tasks.getTasksToDo())