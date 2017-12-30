import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './model/ToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  public userName: string;
  public today: string;

  constructor() {
  }
  
  async ngOnInit() {
    console.log("app-root oninit");
    this.userName = "ToDo User";
    this.today = Date().toString();
  }

}
