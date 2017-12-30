import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() public task: ToDoItem;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

}
