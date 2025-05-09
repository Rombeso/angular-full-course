import {NgModule} from "@angular/core";
import {TaskComponent} from "./task/task.component";
import {NewTaskComponent} from "./new-task/new-task.component";
import {TasksComponent} from "./tasks.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, NewTaskComponent, TasksComponent],
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule]
})

export class TasksModule {

}
