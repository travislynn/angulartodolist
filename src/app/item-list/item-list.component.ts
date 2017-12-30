import { Component, OnInit, Input, Output } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public items: ToDoItem[];
  @Input() public userName: string;
  public disableNewTask: boolean = false;
  public loading: boolean = false;

  constructor(private itemService: TodoitemService) { }

  async ngOnInit() {
    console.log("item-list oninit");
    this.items = await this.itemService.getToDoItems();
    console.log(this.items);
  }

  CreateItem() {
    if (!this.disableNewTask) {
      this.loading = true;
      let item: ToDoItem = this.itemService.getNewItem();
      this.items.unshift(item);
      this.disableNewTask = true;
      this.loading = false;
    }
  }

  onSave(saving: boolean) {
    console.log("item list onSave " + saving);
    // item already saved to api, if saving immediately
    this.disableNewTask = false;
  }

  onCancel(saving: boolean) {
    console.log("itme list onCancel " + saving);
    if (this.items && this.items.length > 0 && this.items[0].Id === -1) {
      console.log("item list onCancel new item detected, removing")
      // cancel creation of the new item
      var index = this.items.findIndex(t => t.Id === -1);
			if (index > -1) {
				this.items.splice(index, 1);
      }
      this.disableNewTask = false;    
    }
  }
}
