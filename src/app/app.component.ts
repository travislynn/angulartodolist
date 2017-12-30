import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './model/ToDoItem';
import { TodoitemService } from './service/todoitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  public userName: string;
  public today: string;
  public items: ToDoItem[];

  constructor(private itemService: TodoitemService) {
    
  }

  
  async ngOnInit() {
    console.log("app-root oninit");
    this.userName = "ToDo User";
    this.today = Date().toString();
    this.items = await this.itemService.getToDoItems();
    console.log(this.items);
  }


}
