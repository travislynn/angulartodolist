import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { MatInputModule, MatFormField } from "@angular/material";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }

  
  ngOnInit() {
  }

  emitValue(value) {
    this.valueEmitted.emit(value);
  }
  

}
