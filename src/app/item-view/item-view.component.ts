import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() public task: ToDoItem;
  @Output() public onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ToggleEdit() {
    console.log("toggle edit");
    this.onEdit.emit(true);
  }

}
