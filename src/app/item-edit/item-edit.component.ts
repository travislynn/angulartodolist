import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoItem } from '../model/ToDoItem';
import { TodoitemService } from '../service/todoitem.service';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @Input() public task: ToDoItem;
  @Output() onCancel = new EventEmitter();
  @Output() onSave = new EventEmitter();
  private prevTask: ToDoItem = new ToDoItem();

  constructor(private itemService: TodoitemService) { }

  ngOnInit() {
    this.prevTask = JSON.parse(JSON.stringify(this.task));
  }

  private CancelChanges() {
    this.task.Title = this.prevTask.Title;
    this.task.Description = this.prevTask.Description;
    this.task.Completed = this.prevTask.Completed;
    this.task.CompletedDate = this.prevTask.CompletedDate;
  }

  private FormatItemForSaving() {
    if (this.task.Completed && !this.prevTask.Completed) {
      this.task.CompletedDate = new Date().toString();
    } else if (!this.task.Completed && this.prevTask.Completed) {
      this.task.CompletedDate = "";
    }
    if (this.task.Id === -1) {
      this.task.CreateDate = new Date().toString();
    }
  }

  CancelEdit() {
    this.CancelChanges();
    this.onCancel.emit(this.prevTask);
  }

  SaveEdit() {
    this.FormatItemForSaving();
    this.itemService.updateItem(this.task);
    this.onSave.emit(this.task);
  }
}
