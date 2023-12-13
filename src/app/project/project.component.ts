import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  emp : any = [{}]
  empIds : any = []
  data : any = {}
  // ngmode varialbles 
  projectName : string = ""
  desc : string = ""


  constructor(private _api:ApiEmployeeService , private _router: Router){}

  ngOnInit(){
    this._api.getAll().subscribe((res:any)=>{
      this.emp = res
    })
  }

  give(i : any){
    if(this.empIds.indexOf(i) >= 0){
      this.empIds.splice(this.empIds.indexOf(i),1)
    }
    else{
      this.empIds.push(i)
    }
    console.log(this.empIds)
  }

  submit(){
    this.data = {
      teamMembers:
        this.emp.filter((e : any)=>{
        return this.empIds.indexOf(e.empId) >=0;
       
    }),
      projectId: 1,
      projectName: this.projectName,
      desc: this.desc,
      teamLeaader: this.emp[2]
  }
    this._api.createProject(this.data).subscribe((res)=>{
      console.log(res);


    })
    this._router.navigateByUrl("/home")
  }

}
