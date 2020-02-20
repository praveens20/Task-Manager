import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddComponent } from './components/add/add.component';
import { AboutComponent } from './components/about/about.component';
import { ShowComponent } from './components/show/show.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ContactComponent } from './components/contact/contact.component';
import { UpdateComponent } from './components/update/update.component';
import { TasksService } from './services/tasks.service';
import { ValidationsService } from './services/validations.service';

const appRoutes : Routes = [
  { path:'',               redirectTo:'about' ,            pathMatch:'full'},
  { path:'about',          component: AboutComponent },
  { path:'add',            component: AddComponent },
  { path:'show',           component: ShowComponent },
  { path:'update',         component: UpdateComponent },
  { path:'delete',         component: DeleteComponent },
  { path:'contact',        component: ContactComponent },
  { path:'**',             redirectTo:'about' },
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddComponent,
    ShowComponent,
    DeleteComponent,
    ContactComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule , FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [TasksService, ValidationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
