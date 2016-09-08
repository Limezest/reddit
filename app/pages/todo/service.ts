import { Injectable } from '@angular/core';

@Injectable()
export class ToDoService {

  constructor() { }

  getToDos() {
    return [
      'directive myCard',
      'partie authentification',
      'rassembler tous les services HTTP'
    ];
  }
}