import { Component } from '@angular/core';
import { ToDoService } from './service';

@Component({
    templateUrl: 'build/pages/todo/todo.html',
    providers: [ToDoService]
})
export class ToDoPage {
    todos: Array<string>;

    constructor(private toDoService: ToDoService) {
        this.todos = toDoService.getToDos();
    }
}