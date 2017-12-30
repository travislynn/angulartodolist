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
  @Output() onEdit = new EventEmitter();

  private prevTask: ToDoItem = new ToDoItem();

  constructor(private itemService: TodoitemService) { }

  ngOnInit() {
    this.CreatePrevTask()
  }

  private CreatePrevTask() {
    this.prevTask.Id = this.task.Id;
    this.prevTask.Title = this.task.Title;
    this.prevTask.Description = this.task.Description;
    this.prevTask.Completed = this.task.Completed;
    this.prevTask.CompletedDate = this.task.CompletedDate;
    this.prevTask.CreateDate = this.task.CreateDate;
  }

  private CancelChanges() {
    this.task.Title = this.prevTask.Title;
    this.task.Description = this.prevTask.Description;
  }

  CancelEdit() {
    this.CancelChanges();
    this.onEdit.emit(false);
  }

  SaveEdit() {
    this.itemService.updateItem(this.task);
    this.onEdit.emit(false);
  }
}
