import { Component, OnInit, Input, Output } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoitemService } from '../service/todoitem.service';
import { StaticVariablesService } from '../service/staticvariables.service';

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

  constructor(private itemService: TodoitemService,
    private sv: StaticVariablesService) { }

  async ngOnInit() {
    console.log("item-list oninit");
    this.items = await this.itemService.getToDoItems();
    console.log(this.items);
  }

  CreateItem() {
    if (this.sv.itemEditing) {
      return;
    }
    if (!this.disableNewTask) {
      this.loading = true;
      let item: ToDoItem = this.itemService.getNewItem();
      this.items.unshift(item);
      this.disableNewTask = true;
      this.loading = false;
      this.sv.itemEditing = true;
    }
  }

  OnSave(task: ToDoItem) {
    console.log("item list onSave ");
    // item already saved to api, if saving immediately
    this.disableNewTask = false;
    this.sv.itemEditing = false;
  }

  OnCancel(task: ToDoItem) {
    console.log("itme list onCancel ");
    if (this.items && this.items.length > 0 && this.items[0].Id === -1) {
      console.log("item list onCancel new item detected, removing")
      // cancel creation of the new item
      var index = this.items.findIndex(t => t.Id === -1);
			if (index > -1) {
				this.items.splice(index, 1);
      }
      this.disableNewTask = false;    
    }
    this.sv.itemEditing = false;
  }
}
