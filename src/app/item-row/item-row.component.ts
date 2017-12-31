import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { StaticVariablesService } from '../service/staticvariables.service';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {
  @Input() public task: ToDoItem;
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();

  public editing: boolean = false;
  
  constructor(private sv: StaticVariablesService) { }

  ngOnInit() {
    
  }

  OnSave(task: ToDoItem) {
    this.editing = false;
    this.onSave.emit(task);
  }

  OnCancel(task: ToDoItem) {
    this.editing = false;
    this.onCancel.emit(task);
  }
  
  EditItem() {
    if (!this.sv.itemEditing) {
      this.editing = true;
      this.sv.itemEditing = true;
    }
    
  }

}
