import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkpieceSetupPageComponent } from './components/pages/workpiece-setup-page/workpiece-setup-page.component';
import { ResultPageComponent } from './components/pages/result-page/result-page.component';
import { ReadPageComponent } from './components/pages/read-page/read-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { UserWorkpiecesPageComponent } from './components/pages/user-workpieces-page/user-workpieces-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { NewPostPageComponent } from './components/pages/new-post-page/new-post-page.component';
import { StartPageComponent } from './components/pages/start-page/start-page.component';
import { WorkpieceEditPageComponent } from './components/pages/workpiece-edit-page/workpiece-edit-page.component';
import { WritingChapterEditPageComponent } from './components/pages/writing-chapter-edit-page/writing-chapter-edit-page.component';
import { WritingChapterNewPageComponent } from './components/pages/writing-chapter-new-page/writing-chapter-new-page.component';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [ AuthGuardService ]
  // },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {path: 'workpiece-new', component: WorkpieceSetupPageComponent},
  {path: 'workpiece-edit/:id', component: WorkpieceEditPageComponent},
  {path: 'search', component: ResultPageComponent},
  {path: 'read/:id', component: ReadPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'registration', component: RegisterPageComponent},
  {path: 'workpiece-results', component: ResultPageComponent},
  {path: 'home', component: StartPageComponent},
  {path: 'new-post/:id', component: NewPostPageComponent},
  {path: 'user-workpieces/:id', component: UserWorkpiecesPageComponent},
  {path: 'user-profile/:id', component: ProfilePageComponent},
  {path: 'chapter-new/:id', component: WritingChapterNewPageComponent},
  {path: 'chapter-edit/:id', component: WritingChapterEditPageComponent},
  //{path: 'workpiece-read', component: ReadPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DxDataGridModule, DxFormModule],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ],
  declarations: [
    HomeComponent,
    ProfileComponent,
    TasksComponent
  ]
})
export class AppRoutingModule { }
