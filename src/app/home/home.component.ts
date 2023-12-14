import { CdkDrag, CdkDropListGroup, CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray,
  transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ApiProjectJenishService } from '../api-project-jenish.service';
import { ApiTaskJenishService } from '../api-task-jenish.service';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})

export class HomeComponent {
    constructor(private _apiProject : ApiProjectJenishService, private _apiTask:ApiTaskJenishService, private _cookie:CookieService ){}
    user : any = {}
    ngOnInit(){
      this.user = JSON.parse(this._cookie.get('user'))
      this._apiProject.getById(1).subscribe((res:any)=>{
        console.log(res);
        this.toDos = res.allTasks.filter((task:any) => task.stage === "toDos")

        this.inProgress = res.allTasks.filter((task:any) => task.stage === "inProgress")

        this.inReview = res.allTasks.filter((task:any) => task.stage === "inReview")

        this.completed = res.allTasks.filter((task:any) => task.stage === "completed")
      });
    }

    isNewTask = false;
    taskName = ''
    taskDescription = ''

    toDos:any = []
    inReview:any = []
    inProgress:any = []
    completed:any = []

    updateTaskData : any = {
      lastStage : '',
      stage: '',
      taskId : 0,

    }

    entered(event: CdkDragEnter, i:number){
      const cases = ["toDos","inProgress","inReview","completed"]
      this.updateTaskData.stage = cases[i]
    }

    drop(event: CdkDragDrop<any>){
      
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else if(this.user.userName === "Jenish" && this.updateTaskData.stage === "completed") {
        Swal.fire("Just eat 5 star. Do Nothing")
      }else{
        this.updateTaskData._id = event.previousContainer.data[event.previousIndex]._id
        console.log(event.previousContainer.data[event.previousIndex])
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      console.log(event.container.data[event.currentIndex])

      console.log(this.updateTaskData)
        this._apiProject.updateTask(this.updateTaskData).subscribe((res)=>{console.log(res)})
      }
    }
    

    taskForm(){
      this.isNewTask = !this.isNewTask;
    }

    saveTask(){

     const data = {
        taskName : this.taskName,
        desc : this.taskDescription,
        timinng : new Date(),
        taskId: this.toDos.length + this.inReview.length + this.completed.length + this.inProgress.length + 1
      }
      
      this._apiProject.createTask(data,1).subscribe(res=>{
        console.log(res)
        this.toDos.push(res)
        console.log(this.toDos)
      });
      this.taskForm()
    }
}
