import { Component } from '@angular/core';
//import { ConsoleReporter } from 'jasmine';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:string|null;
  todos:Todo[];
  constructor(){ 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos = [];
    }
    else{
        this.todos = JSON.parse(this.localItem)
    }
  }  

    //this.todos = [];
     
    //   {
    //     sno:1,
    //     title:"This is todo1/title",
    //     desc:"This is desription1",
    //     active:true
    //   },
    //   {
    //     sno:2,
    //     title:"This is todo2/title",
    //     desc:"This is desription2",
    //     active:true
    //   },
    //   {
    //     sno:3,
    //     title:"This is todo3/title",
    //     desc:"This is desription3",
    //     active:true
    //   }
     

  deleteTodo(todo:Todo){
      console.log(todo)
      const index = this.todos.indexOf(todo)
      this.todos.splice(index,1)
      localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    
    const index = this.todos.indexOf(todo)
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos))

    console.log(todo)
  }
}
