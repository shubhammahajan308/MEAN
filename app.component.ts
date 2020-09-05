import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app3';
  inputTask = new FormControl();
  taskList: any = [];

  addTask() {
    const newtask = this.inputTask.value;
    this.taskList.push(newtask);

    this.inputTask.setValue("");
  }
}
