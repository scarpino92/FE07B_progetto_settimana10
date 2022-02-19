import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoServizio from '../todos.service';

@Component({
  template: `
    <div class="text-center">
      <ng-container *ngIf="todos; else elseTemplate">
        <div *ngIf="todos.length > 0; else elseNoTask">
          <ul>
            <li *ngFor="let item of todos; let i = index" class="fs-5">
              {{ item.title }}
              <button
                class="btn btn-outline-info p-0"
                (click)="aggiorna(item, i)"
              >
                ✅
              </button>
            </li>
          </ul>
        </div>
      </ng-container>

      <ng-template #elseTemplate>
        <span>Recupero Tasks...</span>
      </ng-template>
    </div>

    <ng-template #elseNoTask>
      <span>Ops, non ci sono task!</span>
    </ng-template>

    <div class="inp-container">
      <input type="text" class="rounded-start fs-5" [(ngModel)]="todo" />
      <button (click)="aggiungi()" class="btn btn-primary rounded-end">
        Add
      </button>
    </div>
  `,
  styles: [
    `
      .inp-container {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class TodosPage implements OnInit {
  i!: number;
  todo = '';
  todos!: Todo[];
  newTaskTitle: any;

  constructor() {
    TodoServizio.get().then((todos) => {
      this.todos = todos;
    });
  }

  aggiungi() {
    TodoServizio.add(this.todo).then((todos) => {
      console.log(todos);
      this.todo = '';
    });
  }

  aggiorna(todos: Todo, i: number) {
    TodoServizio.changeTrue(todos, i).then((todo) => {
      console.log(todo.completed);
    });
  }

  async addTask() {
    const nTodo = await TodoServizio.add({
      title: this.newTaskTitle,
      completed: false,
    });
    this.todos.push(nTodo);
    this.newTaskTitle = '';
  }
  async completeTask(todo: Todo, i: number) {
    await TodoServizio.update({ completed: true }, todo.id);
    this.todos.splice(i, 1);
  }

  ngOnInit(): void {}
}
