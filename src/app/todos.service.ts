import { Todo } from "./models/todo";

let todos: Todo[] = [];

export function get(): Promise<Todo[]> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(todos);
    }, 2000);
  });
}

export function add(task: any): Promise<Todo>{
  return new Promise((res, rej) => {
    setTimeout(() => {
      const newTodo: Todo = {
        title: task,
        id: todos.length + 1,
        completed: false
      };
      todos.push(newTodo);
      res(newTodo);
    }, 2000);
  });
}

export function changeTrue(todos: Todo, i:number): Promise <Todo>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.completed = true;
      resolve(todos);
    });
  });
}

export function update(newTodo: Partial<Todo>, id: number): Promise<Todo> {
  return new Promise((res, rej) => {
    setTimeout(() => {
      todos = todos.map((todo) =>
        todo.id == id ? { ...todo, ...newTodo } : todo
      );
      const updatedTodo = todos.find((todo) => todo.id == id);
      if (updatedTodo) {
        res(updatedTodo);
      } else {
        rej('todo non trovato');
      }
    }, 2000);
  });
}


