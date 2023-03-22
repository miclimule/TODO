    const data = {
        tasks: [
            {
            id: 1,
            title: 'Task 1',
            subtasks: [
                {
                id: 1,
                title: 'Subtask 1'
                },
                {
                id: 2,
                title: 'Subtask 2'
                }
            ]
            },
            {
            id: 2,
            title: 'Task 2',
            subtasks: []
            }
        ]
    };

    function addTask(title) {
        const newTask = {
            id: data.tasks.length + 1,
            title,
            subtasks: []
        };
        data.tasks.push(newTask);
    }

    function addSubtask(taskId, title) {
        const task = data.tasks.find(task => task.id === taskId);
        if (task) {
            const newSubtask = {
            id: task.subtasks.length + 1,
            title,
            subtasks: []
            };
            task.subtasks.push(newSubtask);
        }
    }

function addTodo() {
    return (
        <div className="App">
            
        </div>
    );
}
    
export default addTodo;