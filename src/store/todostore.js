import EventEmitter from 'events';
import dispatcher from '../dispatchers/dispatcher';

export class TodoStore  extends EventEmitter {

    constructor(){
        super();

        this.todos = [
            {
                "id": 1,
                "done": true,
                "taskTitle": "Code furiously",
                "userId" : 1,
                "favourite": false
            },
            {
                "id": 2,
                "done": true,
                "taskTitle": "Do user study",
                "userId" : 1,
                "favourite": false
            },
            {
                "id": 3,
                "done": true,
                "taskTitle": "Write paper",
                "userId" : 2,
                "favourite": false
            },
            {
                "id": 4,
                "done": false,
                "taskTitle": "Have a life!!",
                "userId" : 2,
                "favourite": false
            }
        ];

        this.showCompleted = true;
    }

    createTodo(text){
        this.todos.push({
            taskTitle: text,
            done: false,
            id : this.todos.length + 1,
            userId: null
        });

        this.emit("ToDoListUpdated");
    }

    deleteTodo(id){
        var todo = this.todos.find(f=> f.id === id);
        var indexOf = this.todos.indexOf(todo);
        this.todos.splice(indexOf, 1);
        this.emit("ToDoListUpdated");
    }

    getAllTodos() {
        var notCompleted = this.todos.filter(t=> t.done === false);
        var allTodos = notCompleted;
        if(this.showCompleted){
            var completed = this.todos.filter(t=> t.done === true);
            allTodos = allTodos.concat(completed);
        }
        return allTodos; 
    }

    getFavourites(){
        var favourites = this.getAllTodos().filter(t=> t.favourite === true);
        return favourites;
    }

    updateFavourite(payload){    
        var id = payload.id;
        var isFavourite = payload.isFavourite;
        var indexOf = this.todos.findIndex(f=> f.id === id);
        this.todos[indexOf].favourite = isFavourite;
        this.emit("ToDoListUpdated");
    }

    updateCompleted(payload){    
        var id = payload.id;
        var done = payload.done;
        var indexOf = this.todos.findIndex(f=> f.id === id);
        this.todos[indexOf].done = done;
        this.emit("ToDoListUpdated");
    }

    setShowCompleted(show){
        this.showCompleted = show;
        this.emit("ToDoListUpdated");
    }

    getShowCompleted(){
        return this.showCompleted;
    }

    // NB: store is getting all the events that are dispached but only respond to specific ones
    handleActions(action){
        switch(action.type)
        {
            case 'CREATE_TODO':
                this.createTodo(action.payload);
                break;
            case 'DELETE_TODO':
                this.deleteTodo(action.payload);
                break;
            case 'UPDATE_FAVOURITE':
                this.updateFavourite(action.payload);
                break;
            case 'UPDATE_COMPLETED':
                this.updateCompleted(action.payload);
                break;
            case 'SHOW_COMPLETED':
                this.setShowCompleted(action.payload);
                break;            
        }
    }
}

const todoStore = new TodoStore;

// NB: important to bind it
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;