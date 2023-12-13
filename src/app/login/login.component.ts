import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _api:LoginService, private _router:Router , private _cookie:CookieService){}

  person= {userName:'',password:''}
 
  submit(){
    this._api.post(this.person).subscribe((res:any)=>{
      // res=res.json()
      if(res.status==201){
        this._cookie.set("user",JSON.stringify(res),1)
        this._router.navigateByUrl("/home")
        console.log(res)
      }
      else{
        Swal.fire("Please , Enter Valid Username or Password")
        this.person.userName = ''
        this.person.password = ''
      }
    })
  }
}
