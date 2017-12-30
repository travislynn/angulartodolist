import { Component, OnInit, Input, Output } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() public items: ToDoItem[];
  @Input() public userName: string;
  
  constructor() { }

  ngOnInit() {
    console.log("item-list oninit");
    console.log(this.items);
  }

}
