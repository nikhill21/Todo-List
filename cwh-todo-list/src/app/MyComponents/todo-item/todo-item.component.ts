import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() todo?:Todo;
  @Input() i?:number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter()

  constructor(){}

  onClick(todo?: Todo){
    this.todoDelete.emit(todo) // output karke parent component ko dediya
    console.log("On Click has been triggered")
  }

  onCheckboxClick(todo: any){
    this.todoCheckbox.emit(todo)
  }
}