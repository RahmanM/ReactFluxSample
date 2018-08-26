import dispatcher from '../dispatchers/dispatcher';

export function createTodo(text){
    dispatcher.dispatch ({
        type: "CREATE_TODO",
        payload: text
    });
}

export function deleteTodo(id){
    dispatcher.dispatch ({
        type: "DELETE_TODO",
        payload: id
    });
}

export function updateFavourite(id, isFavourite){
    dispatcher.dispatch ({
        type: "UPDATE_FAVOURITE",
        payload: {id, isFavourite}
    });
}

export function updateCompleted(id, done){
    dispatcher.dispatch ({
        type: "UPDATE_COMPLETED",
        payload: {id, done}
    });
}

export function showCompleted(showCompleted){
    dispatcher.dispatch ({
        type: "SHOW_COMPLETED",
        payload: showCompleted
    });
}