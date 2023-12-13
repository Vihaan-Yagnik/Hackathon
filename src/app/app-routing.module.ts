import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { ProjectComponent } from './project/project.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"" , component:LayoutComponent , children:[
    {path:"home" , component:HomeComponent},
    {path:"project" , component:ProjectComponent},
    {path:"aboutus" , component:AboutusComponent},
    {path:"contact" , component:ContactComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
