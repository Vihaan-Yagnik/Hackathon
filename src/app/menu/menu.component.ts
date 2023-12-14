import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  
  constructor(private _cookie:CookieService){}

  cookieValue: string = this._cookie.get('user');
  storedObject: any = JSON.parse(this.cookieValue);
  usernames: any = ""
  img : any = ""

  ngOnInit(){
    this.usernames = this.storedObject.userName
    this.img = this.storedObject.img
  }
}
