import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from './todo.service';
import {Todo } from './todo';


@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {
  todos: Todo[] = []
  form: FormGroup = new FormGroup({
    description : new FormControl(''),
    type: new FormControl('')
  })

  constructor(
    private service: TodoService
  ){}

  ngOnInit(){
    this.listarTodos()
  }

  
  listarTodos(){
    
    this.service.listar().subscribe(todoList => {
      this.todos = todoList
    }) 
  }

  submit(){
    const todo: Todo = {...this.form.value}
    this.service
    .salvar(todo)
    .subscribe(savedTodo => {
       this.todos.push(savedTodo)
       this.form.reset()
    })
  }

  delete(todo: Todo){
    this.service.deletar(todo.id).subscribe({
      next: (response) => this.listarTodos()
    })
  }

  done(todo: Todo) {
    this.service.marcarComoConcluido(todo.id).subscribe({
      next: (todoAtualizado) => {
        todo.done = todoAtualizado.done
        todo.doneDate = todoAtualizado.doneDate
      }
    })
  }




}
