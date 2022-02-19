import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import * as TodoServizio from '../todos.service';

@Component({
  template: `
    <div class="text-center">
      <ng-container *ngIf="todos; else elseTemplate">
        <div *ngIf="todos.length > 0; else elseNoTask">
          <div *ngFor="let item of todos; let i = index">
            <div class="fs-5">✔️ {{ item.title }}</div>
          </div>
        </div>
      </ng-container>
      <ng-template #elseTemplate>
        <p>Recupero Task...</p>
      </ng-template>
    </div>
    <ng-template #elseNoTask> <p>Non ci sono task completati</p> </ng-template>
  `,
  styles: [],
})
export class CompletedPage implements OnInit {
  todos!: Todo[];
  constructor() {
    TodoServizio.get().then(
      (todos) => (this.todos = todos.filter((todo) => todo.completed))
    );
  }

  ngOnInit(): void {}
}
