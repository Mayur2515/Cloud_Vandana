class ToDoList {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.taskInput = document.getElementById('taskInput');
        this.addBtn = document.getElementById('addBtn');
        this.taskList = document.getElementById('taskList');
        this.emptyState = document.getElementById('emptyState');
        
        this.init();
    }
    
    init() {
        this.renderTasks();
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.addBtn.addEventListener('click', () => this.addTask());
        this.taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.addTask();
        });
    }
    
    addTask() {
        const taskText = this.taskInput.value.trim();
        
        if (taskText) {
            this.tasks.push({
                id: Date.now(),
                text: taskText
            });
            
            this.saveTasks();
            this.taskInput.value = '';
            this.renderTasks();
        }
    }
    
    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
        this.renderTasks();
    }
    
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    renderTasks() {
        this.taskList.innerHTML = '';
        
        if (this.tasks.length === 0) {
            this.emptyState.style.display = 'block';
            return;
        }
        
        this.emptyState.style.display = 'none';
        
        this.tasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = 'task-item';
            
            taskItem.innerHTML = `
                <span class="task-text">${task.text}</span>
                <button class="delete-btn" title="Delete task">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            taskItem.querySelector('.delete-btn').addEventListener(
                'click', () => this.deleteTask(task.id)
            );
            
            this.taskList.appendChild(taskItem);
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ToDoList();
});